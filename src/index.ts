import { Game } from './game_class.js'
import './card_game.css'

declare global {
    interface Window {
        application: any // Вы можете заменить any на более конкретный тип, если у вас он есть.
    }
}



const screen = document.querySelector('.app')
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game(screen)
})
