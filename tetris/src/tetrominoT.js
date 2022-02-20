import Tetromino from "./tetromino.js";

export default class TetrominoT extends Tetromino {

    constructor() {
        super();
        this.shape = [
            [1, this.gridWidth, this.gridWidth + 1, this.gridWidth + 2],
            [1, this.gridWidth + 1, this.gridWidth + 2, this.gridWidth * 2 + 1],
            [this.gridWidth, this.gridWidth + 1, this.gridWidth + 2, this.gridWidth * 2 + 1],
            [1, this.gridWidth, this.gridWidth + 1, this.gridWidth * 2 + 1]
        ];
    }
}