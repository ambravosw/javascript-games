import Tetromino from "./tetromino.js";

export default class TetrominoI extends Tetromino {

    constructor() {
        super();
        this.shape = [
            [1, this.gridWidth + 1, this.gridWidth * 2 + 1, 2],
            [this.gridWidth, this.gridWidth + 1, this.gridWidth + 2, this.gridWidth * 2 + 2],
            [1, this.gridWidth + 1, this.gridWidth * 2 + 1, this.gridWidth * 2],
            [this.gridWidth, this.gridWidth * 2, this.gridWidth * 2 + 1, this.gridWidth * 2 + 2]
        ];
    }
}