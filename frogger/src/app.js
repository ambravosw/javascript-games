import Frog from "./frog.js";
import Grid from "./grid.js";

export default class App {
    constructor() {
        console.log('app');

        this.references = {
            'keyup': null,
            'click': null
        };

        this.reset();

        document.getElementById('startBtn')
            .addEventListener('click', this.references.click = (e) => { this.start(e) });
    }

    reset() {
        this.grid = new Grid();
        this.frog = new Frog(75);
        this.timeLeft = 20;
        this.timerId = null;
        document.querySelector('#result').innerHTML = '';
        this.printTime();
        if (this.references.keyup) {
            document.removeEventListener('keyup', this.references.keyup);
        }
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
        if (this.grid.checkLose(frogPosition) || this.timeLeft <= 0) {
            text = 'You LOSE';
        }
        if (text !== '') {
            document.querySelector('#result').innerHTML = text;
            clearInterval(this.timerId);
            document.removeEventListener('keyup', this.references.keyup);
        }
    }

    movePieces() {
        this.timeLeft--;
        this.printTime();
        this.grid.moveCars();
        this.grid.moveLogs(this.frog);
        // if(this.grid.isOnRightLog(this.frog.getPosition())){
        //     console.log('dere');
        //     this.frog.moveRight();
        // }
        // if(this.grid.isOnLeftLog(this.frog.getPosition())){
        //     this.frog.moveLeft();
        // }
        this.checkResult();
    }

    start() {
        if (this.timerId) {
            this.frog.remove();
            clearInterval(this.timerId);
            this.reset();
        } else {
            this.timerId = setInterval(() => { this.movePieces() }, 1000)
            document.addEventListener(
                'keyup',
                this.references.keyup = (e) => { this.control(e) });
        }
    }
}



