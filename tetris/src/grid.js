export default class Grid {
    constructor() {
        this.GRID_WIDTH = 10
        this.GRID_HEIGHT = 20

        this.grid = document.querySelector('.grid');
        this.squares = [];
        this.create();
    }

    create() {
        for (let i = 0; i < this.GRID_WIDTH * this.GRID_HEIGHT; i++) {
            this.grid.appendChild(document.createElement('div'));
        }
        this.squares = document.querySelectorAll('.grid div');
    }

    draw(position, tetromino) {
        this.setUnsetStyle(position, tetromino, true);
    }

    undraw(position, tetromino) {
        this.setUnsetStyle(position, tetromino, false);
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