import RowHeader from './rowHeader.js';
import Square from './square.js';

export default class Board {
    constructor() {
        this.columnsNumber = 7;
        this.rowsNumber = 6;
        this.header = new RowHeader(this.columnsNumber);

        this.squares = [];
        for (let i = 0; i < this.rowsNumber; i++) {
            this.squares[i] = [];
            for (let j = 0; j < this.columnsNumber; j++) {
                this.squares[i][j] = new Square(i, j);
            }
        }
        this.grid = document.querySelector('.grid');

        this.create();
    }

    create() {
        for (let i = 0; i < this.squares.length; i++) {
            for (let j = 0; j < this.squares[i].length; j++) {
                this.grid.appendChild(this.squares[i][j].getObject());
            }
        }
    }

    dropChip(player) {
        const column = this.header.getCurrentCol();
        let row = this.rowsNumber - 1;
        while (row >= 0 && this.squares[row][column].isOccupied()) {
            row--;
        }
        if (row < 0) {
            console.log("column is complete!");
            return false;
        }
        this.squares[row][column].setChip(player);
        return true;
    }

    isFinished(player) {
        let success = false;
        for (let i = 0; i < this.squares.length; i++) {
            for (let j = 0; j < this.squares[i].length; j++) {
                if (this.squares[i][j].isOccupiedByPlayer(player)) {
                    if (!success) {
                        success |= this.checkVertical(this.squares[i][j]);
                    }
                    if (!success) {
                        success |= this.checkHorizontal(this.squares[i][j]);
                    }
                    if (!success) {
                        success |= this.checkDiagonal(this.squares[i][j]);
                    }
                    if (!success) {
                        success |= this.checkReverse(this.squares[i][j]);
                    }
                }
            }
        }
        return success;
    }

    checkVertical(square) {
        const total = 4;
        let current = 1;
        let currentSquare = square;
        do {
            const row = currentSquare.getRow() - 1;
            if(row < 0){
                break;
            }
            const nextSquare = this.squares[row][currentSquare.getCol()];
            if (!nextSquare.isOccupied()) {
                break;
            }
            if (!currentSquare.samePlayer(nextSquare)) {
                break;
            }
            current++;
            currentSquare = nextSquare;
        } while (current <= total);
        return total === current;
    }

    checkHorizontal(square) {
        const total = 4;
        let current = 1;
        let currentSquare = square;
        do {
            const col = currentSquare.getCol() + 1;
            if(col >= this.columnsNumber){
                break;
            }
            const nextSquare = this.squares[currentSquare.getRow()][col];
            if (!nextSquare.isOccupied()) {
                break;
            }
            if (!currentSquare.samePlayer(nextSquare)) {
                break;
            }
            current++;
            currentSquare = nextSquare;
        } while (current <= total);
        return total === current;
    }

    checkDiagonal(square) {
        const total = 4;
        let current = 1;
        let currentSquare = square;
        do {
            const row = currentSquare.getRow() - 1;
            if(row < 0){
                break;
            }
            const col = currentSquare.getCol() + 1;
            if(col >= this.columnsNumber){
                break;
            }
            const nextSquare = this.squares[row][col];
            if (!nextSquare.isOccupied()) {
                break;
            }
            if (!currentSquare.samePlayer(nextSquare)) {
                break;
            }
            current++;
            currentSquare = nextSquare;
        } while (current <= total);
        return total === current;
    }

    checkReverse(square) {
        const total = 4;
        let current = 1;
        let currentSquare = square;
        do {
            const row = currentSquare.getRow() + 1;
            if(row >= this.rowsNumber){
                break;
            }
            const col = currentSquare.getCol() + 1;
            if(col >= this.columnsNumber){
                break;
            }
            const nextSquare = this.squares[row][col];
            if (!nextSquare.isOccupied()) {
                break;
            }
            if (!currentSquare.samePlayer(nextSquare)) {
                break;
            }
            current++;
            currentSquare = nextSquare;
        } while (current <= total);
        return total === current;
    }
}