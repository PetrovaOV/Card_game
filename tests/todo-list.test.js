import { Game } from '../src/game_class.js'
// import { loser, winner } from '../src/card_game.js'

describe('Difficulty selection', () => {
    let game
    let difficultyButtons

    beforeEach(async () => {
        document.body.innerHTML = '<div class="app"></div>'
        const app = document.querySelector('.app')
        game = new Game(app)
        // Использование setTimeout для ожидания завершения асинхронных операций
        await new Promise((r) => setTimeout(r, 1000))
        difficultyButtons = document.querySelectorAll('[id^="radio_"]')
    })

    it('should set difficulty level when button clicked', () => {
        difficultyButtons[0].click()
        expect(window.application.difficultyLevel).toBe('1')

        difficultyButtons[1].click()
        expect(window.application.difficultyLevel).toBe('2')

        difficultyButtons[2].click()
        expect(window.application.difficultyLevel).toBe('3')
    })
})

describe('Win condition', () => {
    let game

    beforeEach(() => {
        jest.useFakeTimers() // Включаем фейковые таймеры Jest
        document.body.innerHTML = '<div class="app"></div>'
        game = new Game(document.querySelector('.app'))
        game.playProcess() // Запускаем игру
    })

    it('should detect win when all cards matched', (done) => {
        // Имитируем клики по всем картам, предполагая, что все они совпадают
        const cards = document.querySelectorAll('.card')

        cards.forEach((card) => {
            card.click()
        })

        // Запускаем таймер для ожидания перехода к экрану победы
        setTimeout(() => {
            // Проверяем, что игра перешла на экран победы
            expect(document.body.textContent).toContain('Вы выиграли!')

            // Помечаем тест как завершенный
            done()
        }, 1000) // Подождем 1 секунду

        jest.advanceTimersByTime(1000) // Прогоняем все фейковые таймеры Jest на 1 секунду
    })
})
