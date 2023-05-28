import { templateEngine } from './template-engine.js'
import { difficulty, oneCard, playField, winner, loser } from './card_game.js'
import svgCards from './img/svg-cards.svg'

export class Game {
    constructor(screen) {
        if (!(screen instanceof HTMLElement)) {
            console.error('Error: the argument must be an HTML element')
            return
        }

        this.screen = screen
        this.init()
        this.numberOfCards
        this.minutes
        this.seconds
        this.timer
        this.timeout1
        this.timeout2
    }

    init() {
        window.application = {
            difficultyLevel: 1,
            screen: {},
            startTime: null,
            elapsedTime: null,
            cards: [],
            chosenCard: null,
            counterCards: null,
        }
        if (typeof this.timeout1 !== 'undefined') {
            clearTimeout(this.timeout1)
        }
        if (typeof this.timeout2 !== 'undefined') {
            clearTimeout(this.timeout2)
        }
        window.application.screen = difficulty
        this.renderScreen('new')

        const radioButtons = this.screen.querySelectorAll('[id^="radio_"]')
        const startButton = this.screen.querySelector('#btn')

        radioButtons.forEach((radioButton) => {
            radioButton.addEventListener('change', (event) => {
                if (event.target.checked) {
                    window.application.difficultyLevel =
                        radioButton.nextSibling.textContent
                }
            })
        })

        startButton.addEventListener('click', () => this.playProcess())
    }

    playProcess() {
        const levels = {
            1: 6,
            2: 12,
            3: 18,
        }
        this.numberOfCards = levels[window.application.difficultyLevel] || 6

        let suits = ['club', 'spade', 'heart', 'diamond']
        let ranks = [
            'king',
            'queen',
            'jack',
            '10',
            '9',
            '8',
            '7',
            '6',
            '5',
            '4',
            '3',
            '2',
            '1',
        ]
        let fullCardDeck = []

        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                let card = '#' + suit + '_' + rank
                fullCardDeck.push(card)
            })
        })
        // получаем набор парных карт из колоды
        for (let index = 0; index < this.numberOfCards / 2; index++) {
            let randomCard = fullCardDeck.splice(
                Math.floor(Math.random() * fullCardDeck.length),
                1
            )[0]
            window.application.cards.push(randomCard, randomCard)
        }
        //  тасуем колоду по методу Фишера — Йетса
        for (let i = window.application.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[window.application.cards[i], window.application.cards[j]] = [
                window.application.cards[j],
                window.application.cards[i],
            ]
        }

        window.application.screen = playField
        this.renderScreen('new')
        const restartButton = this.screen.querySelector('.button__start')
        restartButton.addEventListener('click', () => {
            this.stopTimer()
            this.init()
        })
        const field = document.querySelector('.field__cards')
        for (let index = 0; index < this.numberOfCards; index++) {
            field.appendChild(templateEngine(oneCard))
            let cardId = document.querySelector('#card')
            let cardFront = cardId.querySelector('.imgBack')
            cardFront.setAttribute(
                'href',
                svgCards + window.application.cards[index]
            )
            cardId.setAttribute('id', `${index}`)
        }
        this.timeout1 = setTimeout(() => {
            this.showAllCards()
        }, 100)

        this.timeout2 = setTimeout(() => {
            this.hideAllCards()
            this.startTimer()
        }, 5000)

        const cards = document.querySelectorAll('.card')
        window.application.counterCards = this.numberOfCards
        cards.forEach((card) => {
            card.addEventListener('click', (event) => {
                card.firstElementChild.classList.add('card__front')
                card.lastElementChild.classList.add('card__back')
                let currentCard = event.target.parentElement.parentElement.id
                window.application.counterCards =
                    window.application.counterCards - 1
                if (window.application.counterCards > 0) {
                    if (!window.application.chosenCard) {
                        window.application.chosenCard = currentCard
                    } else {
                        if (
                            window.application.cards[
                                window.application.chosenCard
                            ] !== window.application.cards[currentCard]
                        ) {
                            this.stopTimer()
                            this.showAllCards
                            this.timeout2 = setTimeout(() => {
                                window.application.screen = loser
                                this.renderScreen('old')
                                this.showElapsedTime()
                                const restButton =
                                    document.querySelector('.play__again')
                                restButton.addEventListener('click', () => {
                                    this.init()
                                })
                            }, 1000)
                        } else {
                            window.application.chosenCard = null
                        }
                    }
                } else {
                    this.stopTimer()
                    this.timeout2 = setTimeout(() => {
                        window.application.screen = winner
                        this.renderScreen('old')
                        this.showElapsedTime()
                        const restButton =
                            document.querySelector('.play__again')
                        restButton.addEventListener('click', () => {
                            this.init()
                        })
                    }, 1000)
                }
            })
        })
    }

    showAllCards() {
        const frontCards = document.querySelectorAll('.front')
        const backCards = document.querySelectorAll('.back')
        backCards.forEach((backCard) => {
            backCard.classList.add('card__back')
        })
        frontCards.forEach((frontCard) => {
            frontCard.classList.add('card__front')
        })
    }
    hideAllCards() {
        const frontCards = document.querySelectorAll('.front')
        const backCards = document.querySelectorAll('.back')
        backCards.forEach((backCard) => {
            backCard.classList.remove('card__back')
            backCard.classList.add('card__back_hidden')
        })
        frontCards.forEach((frontCard) => {
            frontCard.classList.remove('card__front')
            frontCard.classList.add('card__front_hidden')
        })
        this.timeout1 = setTimeout(() => {
            backCards.forEach((backCard) => {
                backCard.classList.remove('card__back_hidden')
            })
            frontCards.forEach((frontCard) => {
                frontCard.classList.remove('card__front_hidden')
            })
        }, 999)
    }

    renderScreen(view) {
        if (view === 'new') {
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild)
            }
        }
        this.screen.appendChild(templateEngine(window.application.screen))
    }

    startTimer() {
        this.minutes = document.querySelector('.show__min')
        this.seconds = document.querySelector('.show__sec')
        window.application.startTime = Date.now()
        this.timer = setInterval(() => {
            let currentTime = Date.now()
            window.application.elapsedTime =
                currentTime - window.application.startTime

            let minutes = Math.floor(window.application.elapsedTime / 60000)
            let seconds = (
                (window.application.elapsedTime % 60000) /
                1000
            ).toFixed(0)
            this.showTimer(minutes, seconds)
        }, 1000)
    }

    stopTimer() {
        clearInterval(this.timer)
    }

    showTimer(minutes, seconds) {
        // преобразовываем числа в строки и добавляем ведущие нули
        let minutesStr = String(minutes).padStart(2, '0')
        let secondsStr = String(seconds).padStart(2, '0')

        this.minutes.textContent = minutesStr
        this.seconds.textContent = secondsStr
    }

    showElapsedTime() {
        const elapsedTime = document.querySelector('.time_2')
        const minutes = Math.floor(window.application.elapsedTime / 60000)
        const seconds = (
            (window.application.elapsedTime % 60000) /
            1000
        ).toFixed(0)
        let minutesStr = String(minutes).padStart(2, '0')
        let secondsStr = String(seconds).padStart(2, '0')
        elapsedTime.textContent = minutesStr + '.' + secondsStr
    }
}
