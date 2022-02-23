import Grid from "./grid.js";

export default class NextGrid extends Grid {
    constructor() {
        super();
        this.GRID_WIDTH = 10;
        this.GRID_HEIGHT = 4;

        this.classStyle = '.next';
        this.grid = document.querySelector(this.classStyle);
    }

    setNextTetromino(tetromino) {
        this.clear();
        this.draw(4,0, tetromino);
    }

    clear(){
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].classList.remove('block');
        }
    }
}