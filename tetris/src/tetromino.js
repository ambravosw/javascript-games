export default class Tetromino {

    constructor() {
        this.gridWidth = 10;
        this.rotationIndex = 1;
    }

    rotate(direction) {
        this.rotationIndex = (this.rotationIndex + direction) % this.shape.length;
        if(this.rotationIndex < 0){
            this.rotationIndex = this.shape.length + this.rotationIndex;
        }
    }

    getSquares() {
        return this.shape[this.rotationIndex];
    }
}