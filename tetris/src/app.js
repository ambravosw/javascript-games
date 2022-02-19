import Grid from "./grid.js";
import TetrominosManager from "./tetrominosManager.js";

export default class App {
    constructor() {

        this.references = {
            'keydown': null,
        };

        document.addEventListener(
            'keydown',
            this.references.keyup = (e) => { this.control(e) });

        document.getElementById('startBtn')
            .addEventListener('click', this.references.click = () => { this.start() });

        this.grid = new Grid();
        this.tetrominosManager = new TetrominosManager();

        this.currentTetromino = this.tetrominosManager.next();
        console.log(this.currentTetromino);
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

    moveDown(){
        this.nextTetromino = this.tetrominosManager.next();
        this.currentTetromino = this.tetrominosManager.current();
        console.log("N " , this.nextTetromino);
        console.log("C " , this.currentTetromino);
    }

    start() {
        console.log('a');
    }

}



