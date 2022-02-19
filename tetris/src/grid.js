export default class Grid {
    constructor() {
        this.GRID_WIDTH = 10
        this.GRID_HEIGHT = 20

        this.grid = document.querySelector('.grid');
        this.squares = [];
        this.create();
    }

    create() {
        for (let i = 0; i < this.GRID_WIDTH * this.GRID_HEIGHT; i++) {
            this.grid.appendChild(document.createElement('div'));
        }
        this.squares = document.querySelectorAll('.grid div');
    }
}