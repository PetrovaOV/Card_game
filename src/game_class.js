class Game {
    constructor(screen) {
        if (!(screen instanceof HTMLElement)) {
            console.error('Error: the argument must be an HTML element')
            return
        }

        this.screen = screen
        this.init()
    }

    init() {
        window.application.screen = difficulty
        this.renderScreen()
        // this.screen.appendChild(templateEngine(window.application.screen));

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

        startButton.addEventListener('click', () => {
            const numberOfCards = 18
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
            let cardDeck = []

            while (cardDeck.length < numberOfCards) {
                let suit = suits[Math.floor(Math.random() * suits.length)]
                let rank = ranks[Math.floor(Math.random() * ranks.length)]
                let card = '#' + suit + '_' + rank

                if (!cardDeck.includes(card)) {
                    cardDeck.push(card)
                }
            }

            window.application.screen = playField
            this.renderScreen()
            const field = document.querySelector('.field__cards')
            for (let index = 0; index < numberOfCards; index++) {
                field.appendChild(templateEngine(oneCard))
                let cardId = document.querySelector('#card')
                let cardFront = cardId.querySelector('.imgBack')
                cardFront.setAttribute(
                    'href',
                    './src/img/svg-cards.svg' + cardDeck[index]
                )
                cardId.setAttribute('id', `card${index}`)
            }
        })
    }

    renderScreen() {
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild)
        }
        this.screen.appendChild(templateEngine(window.application.screen))
    }
}
