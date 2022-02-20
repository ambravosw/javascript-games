import Grid from "./grid.js";
import TetrominosManager from "./tetrominosManager.js";

export default class App {
    constructor() {

        this.references = {
            'keydown': null,
            'click': null,
        };

        this.timerId = null;

        document.getElementById('startBtn')
            .addEventListener('click', this.references.click = () => { this.start() });

    }

    start() {
        document.addEventListener(
            'keydown',
            this.references.keyup = (e) => { this.control(e) });

        this.grid = new Grid();
        this.tetrominosManager = new TetrominosManager();

        this.currentTetromino = this.tetrominosManager.next();
        console.log(this.currentTetromino);

        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        else {
            // this.moveDown();
            this.timerId = setInterval(() => { this.moveDown() }, 1000);
        }
    }

    control(e) {
        switch (e.keyCode) {
            case 37: // left
                break;
            case 38: // up
                this.rotate();
                break;
            case 39: // right
                break;
            case 40: // down
                this.moveDown();
                break;
        }
    }

    rotate() {
        this.currentTetromino.rotate();
    }

    moveDown() {
        this.grid.undraw(20, this.currentTetromino);
        this.nextTetromino = this.tetrominosManager.next();
        this.currentTetromino = this.tetrominosManager.current();
        this.grid.draw(20, this.currentTetromino);
    }



}



