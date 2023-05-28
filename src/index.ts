import { Game } from './game_class.js'
import './card_game.css'

declare global {
    interface Window {
        application: {
            difficultyLevel: number
            screen: object
            spentTime: number | undefined
            cards: Array<string>
            chosenCard: string
            counterCards: number
        }
    }
}

const screen = document.querySelector('.app')
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game(screen)
})
