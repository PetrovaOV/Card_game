class Game {
    constructor(screen) {
        if (!(screen instanceof HTMLElement)) {
            console.error("Error: the argument must be an HTML element");
            return;
        }

        this.screen = screen;
        this.init();
    }

    init() {
        window.application.screen = difficulty;
        this.renderScreen();
        // this.screen.appendChild(templateEngine(window.application.screen));

        const radioButtons = this.screen.querySelectorAll('[id^="radio_"]');
        const startButton = this.screen.querySelector('#btn');

        radioButtons.forEach((radioButton) => {
            radioButton.addEventListener('change', (event) => {
                if (event.target.checked) {
                    window.application.difficultyLevel = radioButton.nextSibling.textContent;
                }
            })
        });

        startButton.addEventListener('click', () => {
            console.log(startButton);
            window.application.screen = temporary;
            this.renderScreen();
        })
    }

    renderScreen() {
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        this.screen.appendChild(templateEngine(window.application.screen));
    }


}
