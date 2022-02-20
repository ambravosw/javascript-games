import Tetromino from "./tetromino.js";

export default class TetrominoO extends Tetromino {

    constructor() {
        super();
        this.shape = [
            [0, 1, this.gridWidth, this.gridWidth + 1],
            [0, 1, this.gridWidth, this.gridWidth + 1],
            [0, 1, this.gridWidth, this.gridWidth + 1],
            [0, 1, this.gridWidth, this.gridWidth + 1]
        ];
    }
}