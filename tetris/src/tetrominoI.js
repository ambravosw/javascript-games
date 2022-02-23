import Tetromino from "./tetromino.js";

export default class TetrominoI extends Tetromino {

    constructor() {
        super();
        this.shape = [
            [0,1,2,3],
            [0,this.gridWidth,this.gridWidth*2,this.gridWidth*3],
            [0,1,2,3],
            [0,this.gridWidth,this.gridWidth*2,this.gridWidth*3],
            // [1, this.gridWidth + 1, this.gridWidth * 2 + 1, this.gridWidth * 3 + 1],
            // [this.gridWidth, this.gridWidth + 1, this.gridWidth + 2, this.gridWidth + 3],
            // [1, this.gridWidth + 1, this.gridWidth * 2 + 1, this.gridWidth * 3 + 1],
            // [this.gridWidth, this.gridWidth + 1, this.gridWidth + 2, this.gridWidth + 3]
        ];
    }
}