export default class Grid {
    constructor() {
        this.grid = document.querySelector('.grid');
        this.squares = [];
        this.create();
    }

    create() {
        for (let i = 0; i < 15*15; i++) {
            this.grid.appendChild(document.createElement('div'));
        }
        this.squares = document.querySelectorAll('.grid div');
    }

}