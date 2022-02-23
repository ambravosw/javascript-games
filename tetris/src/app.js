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
        this.started = false;
    }

    start() {
        this.grid.create();
        this.nextGrid.create();
        this.tetrominosManager = new TetrominosManager();

        if (!this.started) {
            document.addEventListener(
                'keydown',
                this.references.keyup = (e) => { this.control(e) });
        }

        this.line = 0;
        this.column = 0;

        this.currentTetromino = this.tetrominosManager.next();
        this.nextGrid.setNextTetromino(this.currentTetromino);

        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        // this.moveDown();
        this.timerId = setInterval(() => { this.moveDown() }, 1000);

        this.started = true;
    }

    control(e) {
        switch (e.keyCode) {
            case 37: // left
                this.moveLeft();
                break;
            case 38: // up
                this.rotate();
                break;
            case 39: // right
                this.moveRight();
                break;
            case 40: // down
                this.moveDown();
                break;
        }
    }

    rotate() {
        this.grid.undraw(this.column, this.line, this.currentTetromino);
        this.currentTetromino.rotate(1);
        console.log(this.currentTetromino);
        if(this.column > 0 && this.grid.isAtRightEdge(this.column, this.line, this.currentTetromino)) {
            console.log('undo', this.currentTetromino);
            this.currentTetromino.rotate(-1);
        }
        this.grid.draw(this.column, this.line, this.currentTetromino);
    }

    moveDown() {
        this.grid.undraw(this.column, this.line, this.currentTetromino);
        this.line++;
        this.grid.draw(this.column, this.line, this.currentTetromino);
        // this.freeze();

        // this.nextTetromino = this.tetrominosManager.next();
        // this.nextGrid.setNextTetromino(this.nextTetromino);
        // this.currentTetromino = this.tetrominosManager.current();
    }

    moveLeft() {
        this.grid.undraw(this.column, this.line, this.currentTetromino);
        if (!this.grid.isAtLeftEdge(this.column, this.line, this.currentTetromino)) {
            this.column -= 1;
        }
        this.grid.draw(this.column, this.line, this.currentTetromino);
    }

    moveRight() {
        this.grid.undraw(this.column, this.line, this.currentTetromino);
        if (!this.grid.isAtRightEdge(this.column+1, this.line, this.currentTetromino)) {
            this.column += 1;
        }
        this.grid.draw(this.column, this.line, this.currentTetromino);
    }



}



