import Grid from './grid.js';

export default class MainGrid extends Grid {
    constructor() {
        super();
        this.GRID_WIDTH = 10
        this.GRID_HEIGHT = 20

        this.classStyle = '.grid';
        this.grid = document.querySelector(this.classStyle);
    }

    isAtLeftEdge(X, Y, tetrominio) {
        const tetrominioSquares = tetrominio.getSquares();
        console.log(X, Y, tetrominioSquares);
        // tetrominioSquares.some(index => index % this.GRID_WIDTH === 0)
        return X <= 0;
    }

    isAtRightEdge(X, Y, tetrominio) {
        const tetrominioSquares = tetrominio.getSquares();
        const position = Y * this.GRID_WIDTH + X;

        for (let i = 0; i < tetrominioSquares.length; i++) {
            const rightEdge = ((tetrominioSquares[i] + position) % this.GRID_WIDTH) === 0;
            if(rightEdge){
                return true;
            }
        }
        return false;
    }
}