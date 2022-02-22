import Grid from './grid.js';

export default class MainGrid extends Grid {
    constructor() {
        super();
        this.GRID_WIDTH = 10
        this.GRID_HEIGHT = 20

        this.classStyle = '.grid';
        this.grid = document.querySelector(this.classStyle);
    }
}