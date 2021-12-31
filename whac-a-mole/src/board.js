import Square from './square.js';

export default class Board {
    constructor(score) {
        this.grid = document.querySelector('.grid');
        this.currentMolePosition = -1;
        this.squares = [];
        for (let i = 0; i < 9; i++) {
            this.squares[i] = new Square(i, score);
        }
        this.timer = null;
        this.create();
    }

    create() {
        for (let i = 0; i < this.squares.length; i++) {
            this.grid.appendChild(this.squares[i].getObject());
        }
    }

    setUp() {
        this.timer = setInterval(() => { this.moveMole(); }, 500);
    }

    finish() {
        clearInterval(this.timer);
        if (this.currentMolePosition >= 0) {
            this.squares[this.currentMolePosition].clearMole();
        }
    }

    moveMole() {
        if (this.currentMolePosition >= 0) {
            this.squares[this.currentMolePosition].clearMole();
        }

        this.currentMolePosition = Math.floor(Math.random() * 9);
        console.log(this.currentMolePosition);

        this.squares[this.currentMolePosition].setMole();
    }
}