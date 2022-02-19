import TetrominoI from "./tetrominoI.js";
import TetrominoL from "./tetrominoL.js";
import TetrominoO from "./tetrominoO.js";
import TetrominoT from "./tetrominoT.js";
import TetrominoZ from "./tetrominoZ.js";

export default class TetrominosManager {

    constructor() {
        this.tetrominos = [];
        this.tetrominos.push('TetrominoI');
        this.tetrominos.push('TetrominoL');
        this.tetrominos.push('TetrominoO');
        this.tetrominos.push('TetrominoT');
        this.tetrominos.push('TetrominoZ');
        this.nextTetromino = this.random();
    }

    current() {
        return eval('new ' + this.tetrominos[this.currentTetromino] + '()');
    }

    next() {
        this.currentTetromino = this.nextTetromino;
        this.nextTetromino = this.random();
        return eval('new ' + this.tetrominos[this.nextTetromino] + '()');
    }

    random() {
        return Math.floor(Math.random() * this.tetrominos.length)
    }

}