import { Game } from './game_class.js'
import './card_game.css'

window.application = {
    difficultyLevel: 1,
    screen: {},
    spentTime: undefined,
    cards: [],
    chosenCard: null,
    counterCards: null,
}

const screen = document.querySelector('.app')
document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(screen);
});
