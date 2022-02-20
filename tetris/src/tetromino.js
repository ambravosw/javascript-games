export default class Tetromino {

    constructor(){
        console.log('construct');
        this.gridWidth = 10;
        this.rotationIndex = 0;
    }

    rotate(){
        this.rotationIndex = this.rotationIndex % this.shapes.length;
        console.log('rotate');
    }

    getSquares(){
        return this.shape[this.rotationIndex];
    }
}