export default class Tetromino {

    constructor() {
        console.log('construct');
        this.gridWidth = 10;
        this.rotationIndex = 1;
    }

    rotate() {
        this.rotationIndex = (this.rotationIndex + 1) % this.shape.length;
    }

    getSquares() {
        return this.shape[this.rotationIndex];
    }
}