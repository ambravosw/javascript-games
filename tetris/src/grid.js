export default class Grid {
    constructor() {
        this.squares = [];
    }

    create() {
        if (this.squares.length > 0) {
            console.log(this.squares);
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

    draw(position, tetromino) {
        this.setUnsetStyle(position * this.GRID_WIDTH, tetromino, true);
    }

    undraw(position, tetromino) {
        this.setUnsetStyle(position * this.GRID_WIDTH, tetromino, false);
    }

    setUnsetStyle(position, tetromino, set) {
        const tetrominoSquares = tetromino.getSquares();
        for (let i = 0; i < tetrominoSquares.length; i++) {
            if (set) {
                this.squares[tetrominoSquares[i] + position].classList.add('block');
            }
            else {
                this.squares[tetrominoSquares[i] + position].classList.remove('block');
            }
        }
    }
}