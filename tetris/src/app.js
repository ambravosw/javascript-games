import MainGrid from "./mainGrid.js";
import NextGrid from "./nextGrid.js";
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

        this.grid = new MainGrid();
        this.nextGrid = new NextGrid();

    }

    start() {
        this.grid.create();
        this.nextGrid.create();

        document.addEventListener(
            'keydown',
            this.references.keyup = (e) => { this.control(e) });

        this.tetrominosManager = new TetrominosManager();
        this.line = 0;

        this.currentTetromino = this.tetrominosManager.next();
        this.nextGrid.setNextTetromino(this.currentTetromino);

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
        this.grid.undraw(this.line, this.currentTetromino);
        this.currentTetromino.rotate();
        this.grid.draw(this.line, this.currentTetromino);
    }

    moveDown() {
        this.grid.undraw(this.line, this.currentTetromino);
        this.line++;
        this.grid.draw(this.line, this.currentTetromino);

        // this.nextTetromino = this.tetrominosManager.next();
        // this.nextGrid.setNextTetromino(this.nextTetromino);
        // this.currentTetromino = this.tetrominosManager.current();
    }



}



