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
        this.speed = 500;

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
                this.references.keydown = (e) => { this.control(e) });
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
        this.timerId = setInterval(() => { this.moveDown() }, this.speed);

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
        if (this.column > 0 && this.grid.isAtRightEdge(this.column, this.line, this.currentTetromino)) {
            this.currentTetromino.rotate(-1);
        }
        this.grid.draw(this.column, this.line, this.currentTetromino);
        if (this.grid.isGameOver(this.column, this.line)) {
            this.gameOver();
        }
    }

    moveDown() {
        this.grid.undraw(this.column, this.line, this.currentTetromino);
        if (this.grid.isAtBottom(this.column, this.line + 1, this.currentTetromino) ||
            this.grid.isOccupied(this.column, this.line + 1, this.currentTetromino)) {
            this.freeze();
        }
        else {
            this.line++;
            this.grid.draw(this.column, this.line, this.currentTetromino);
        }
    }

    freeze() {
        this.grid.freeze(this.column, this.line, this.currentTetromino);
        this.grid.draw(this.column, this.line, this.currentTetromino);
        this.grid.removeCompletedRows();
        if (this.grid.isGameOver(this.column, this.line)) {
            this.gameOver();
        }
        else {
            this.next();
        }
    }

    gameOver() {
        clearInterval(this.timerId);
        this.timerId = null;
        document.removeEventListener('keydown', this.references.keydown);
        document.getElementById('score').textContent = 'Game Over!';
    }

    next() {
        this.line = 0;
        this.column = 0;
        this.nextTetromino = this.tetrominosManager.next();
        this.nextGrid.setNextTetromino(this.nextTetromino);
        this.currentTetromino = this.tetrominosManager.current();
        this.grid.draw(this.column, this.line, this.currentTetromino);
    }

    moveLeft() {
        this.grid.undraw(this.column, this.line, this.currentTetromino);
        if (!this.grid.isAtLeftEdge(this.column, this.line, this.currentTetromino) &&
            (!this.grid.isOccupied(this.column - 1, this.line, this.currentTetromino))) {
            this.column -= 1;
        }
        this.grid.draw(this.column, this.line, this.currentTetromino);
    }

    moveRight() {
        this.grid.undraw(this.column, this.line, this.currentTetromino);
        if (!this.grid.isAtRightEdge(this.column + 1, this.line, this.currentTetromino) &&
            (!this.grid.isOccupied(this.column - 1, this.line, this.currentTetromino))) {
            this.column += 1;
        }
        this.grid.draw(this.column, this.line, this.currentTetromino);
    }
}



