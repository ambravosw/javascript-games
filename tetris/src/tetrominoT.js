import Tetromino from "./tetromino.js";

export default class TetrominoT extends Tetromino {

    constructor() {
        super();
        this.shape = [
            [0, this.gridWidth, this.gridWidth + 1, 2 * this.gridWidth],
            [0, 1, 2, this.gridWidth + 1],
            [1, this.gridWidth, this.gridWidth + 1, 2 * this.gridWidth + 1],
            [1, this.gridWidth, this.gridWidth + 1, this.gridWidth + 2]
        ];
    }
}