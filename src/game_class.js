class Game {
    constructor(screen) {
        if (!(screen instanceof HTMLElement)) {
            console.error('Error: the argument must be an HTML element')
            return
        }

        this.screen = screen
        this.init()
        this.numberOfCards
    }

    init() {
        window.application.screen = difficulty
        this.renderScreen()

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
        this.renderScreen()
        const field = document.querySelector('.field__cards')
        for (let index = 0; index < this.numberOfCards; index++) {
            field.appendChild(templateEngine(oneCard))
            let cardId = document.querySelector('#card')
            let cardFront = cardId.querySelector('.imgBack')
            cardFront.setAttribute(
                'href',
                './src/img/svg-cards.svg' + window.application.cards[index]
            )
            cardId.setAttribute('id', `${index}`)
        }
        setTimeout(() => {
            this.showAllCards()
        }, 100)

        setTimeout(() => {
            this.hideAllCards()
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
                            this.showAllCards
                            setTimeout(() => {
                                alert('Вы проиграли!')
                            }, 1000)
                        } else {
                            window.application.chosenCard = null
                        }
                    }
                } else {
                    this.showAllCards
                    setTimeout(() => {
                        alert('Вы победили!')
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
        setTimeout(() => {
            backCards.forEach((backCard) => {
                backCard.classList.remove('card__back_hidden')
            })
            frontCards.forEach((frontCard) => {
                frontCard.classList.remove('card__front_hidden')
            })
        }, 999)
    }

    renderScreen() {
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild)
        }
        this.screen.appendChild(templateEngine(window.application.screen))
    }
}
