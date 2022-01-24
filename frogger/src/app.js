import Frog from "./frog.js";
import Grid from "./grid.js";

export default class App {
    constructor() {
        console.log('app');

        this.grid = new Grid();
        this.frog = new Frog(75);
        this.timeLeft = 20;
        this.printTime();

        this.references = { 'keyup': null };
        document.addEventListener('keyup', this.references.keyup = (e) => { this.control(e) });
    }

    printTime() {
        document.querySelector('#time-left').textContent = this.timeLeft;
    }

    control(e) {
        switch (e.keyCode) {
            case 37:
                this.frog.moveLeft();
                break;
            case 38:
                this.frog.moveUp();
                break;
            case 39:
                this.frog.moveRight();
                break;
            case 40:
                this.frog.moveDown();
                break;
        }
        this.checkResult();
    }

    checkResult() {
        let text = '';
        const frogPosition = this.frog.getPosition();
        if (this.grid.checkWin(frogPosition)) {
            text = 'you WON!';
        }
        if (this.grid.checkLose(frogPosition)) {
            text = 'You LOSE';
        }
        if (text !== '') {
            document.querySelector('#result').innerHTML = text;
            // clearInterval(timerId)
            document.removeEventListener('keyup', this.references.keyup);
        }
    }
}



