export default class Grid {
    constructor() {
        this.squares = [];
    }

    create() {
        if (this.squares.length > 0) {
            for (let i = 0; i < this.squares.length; i++) {
                this.squares[i].classList.remove('block');
            }
        }
        else {

            for (let i = 0; i < this.GRID_WIDTH * this.GRID_HEIGHT; i++) {
                this.grid.appendChild(document.createElement('div'));
            }
            this.squares = document.querySelectorAll(this.classStyle + ' div');
        }
    }

    draw(X, Y, tetromino) {
        this.setUnsetStyle(Y * this.GRID_WIDTH + X, tetromino, true);
    }

    undraw(X, Y, tetromino) {
        this.setUnsetStyle(Y * this.GRID_WIDTH + X, tetromino, false);
    }

    setUnsetStyle(position, tetromino, set) {
        const tetrominioSquares = tetromino.getSquares();
        for (let i = 0; i < tetrominioSquares.length; i++) {
            if (set) {
                this.squares[tetrominioSquares[i] + position].classList.add('block');
            }
            else {
                this.squares[tetrominioSquares[i] + position].classList.remove('block');
            }
        }
    }
}