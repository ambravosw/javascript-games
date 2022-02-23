import Tetromino from "./tetromino.js";

export default class TetrominoZ extends Tetromino {

    constructor() {
        super();
        this.shape = [
            [1, 2, this.gridWidth, this.gridWidth + 1],
            [0, this.gridWidth, this.gridWidth + 1, 2 * this.gridWidth + 1],
            [1, 2, this.gridWidth, this.gridWidth + 1],
            [0, this.gridWidth, this.gridWidth + 1, 2 * this.gridWidth + 1]
        ];
    }
}