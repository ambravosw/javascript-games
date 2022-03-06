import Grid from './grid.js';

export default class MainGrid extends Grid {
    constructor() {
        super();
        this.GRID_WIDTH = 10;
        this.GRID_HEIGHT = 20;

        this.classStyle = '.grid';
        this.grid = document.querySelector(this.classStyle);
    }

    isAtLeftEdge(X, Y, tetrominio) {
        const tetrominioSquares = tetrominio.getSquares();
        return X <= 0;
    }

    isAtRightEdge(X, Y, tetrominio) {
        const tetrominioSquares = tetrominio.getSquares();
        const position = Y * this.GRID_WIDTH + X;

        for (let i = 0; i < tetrominioSquares.length; i++) {
            const rightEdge = ((tetrominioSquares[i] + position) % this.GRID_WIDTH) === 0;
            if (rightEdge) {
                return true;
            }
        }
        return false;
    }

    isAtBottom(X, Y, tetrominio) {
        const tetrominioSquares = tetrominio.getSquares();
        const position = Y * this.GRID_WIDTH + X;

        for (let i = 0; i < tetrominioSquares.length; i++) {
            const bottomEdge = tetrominioSquares[i] + position >= this.GRID_WIDTH * this.GRID_HEIGHT;
            if (bottomEdge) {
                return true;
            }
        }
        return false;
    }

    isOccupied(X, Y, tetrominio) {
        const tetrominioSquares = tetrominio.getSquares();
        const position = Y * this.GRID_WIDTH + X;

        for (let i = 0; i < tetrominioSquares.length; i++) {
            if (this.squares[tetrominioSquares[i] + position] === undefined) {
                continue;
            }
            const isOccupied = this.squares[tetrominioSquares[i] + position].classList.contains('block-freezed');
            if (isOccupied) {
                return true;
            }
        }
        return false;
    }

    freeze(X, Y, tetrominio) {
        const tetrominioSquares = tetrominio.getSquares();
        const position = Y * this.GRID_WIDTH + X;

        for (let i = 0; i < tetrominioSquares.length; i++) {
            this.squares[tetrominioSquares[i] + position].classList.add('block-freezed');
        }
    }

    removeCompletedRows() {
        let total = 0;
        let block = this.GRID_HEIGHT * this.GRID_WIDTH - 1;
        do {
            if (this.squares[block].classList.contains('block-freezed')) {
                total = total + 1;
            }
            if (block % this.GRID_WIDTH === 0) {
                if (total === 10) {
                    this.removeRow(parseInt(block / this.GRID_WIDTH));
                }
                total = 0;
            }
            block--;
        } while (block >= 0);
    }

    removeRow(row) {
        for (let rowIndex = row; rowIndex > 0; rowIndex--) {
            const initIndex = row * this.GRID_WIDTH;
            for (let i = initIndex; i < initIndex + this.GRID_WIDTH; i++) {
                this.squares[i].classList.add('block-test');
            }

        }
    }

    isGameOver(X, Y) {
        return Y * this.GRID_WIDTH + X <= 0;
    }

}