import CarLeft from './carLeft.js';
import CarRight from './carRight.js';
import LogLeft from './logLeft.js';
import LogRight from './logRight.js';

export default class Grid {
    constructor() {
        this.grid = document.querySelector('.grid');
        this.squares = [];
        this.endPosition = 5;
        this.cars = [];
        this.logs = [];
        this.create();
        this.paintRoad();
        this.paintRiver();
    }

    create() {
        for (let i = 0; i < 9 * 9; i++) {
            this.grid.appendChild(document.createElement('div'));
        }
        this.squares = document.querySelectorAll('.grid div');
        this.squares.forEach((el) => el.classList.remove('car'));
        this.squares.forEach((el) => el.classList.remove('log'));
        this.squares[75].classList.add('starting-block');
        this.squares[this.endPosition].classList.add('ending-block');
    }

    checkWin(position) {
        return position == this.endPosition;
    }

    checkLose(position) {
        let lose = false;//this.squares[position].classList.contains('car');
        if (!lose) {
            lose = this.isOnRiver(position);
        }
        return lose;
    }

    isOnRiver(position) {
        return this.squares[position].classList.contains('river') &&
            !this.squares[position].classList.contains('log');
    }

    isOnLog(position) {
        return this.squares[position].classList.contains('log');
    }

    isOnLeftLog(position) {
        return this.isOnLog(position) && (position >= 18 && position <= 26);
    }

    isOnRightLog(position) {
        return this.isOnLog(position) && (position >= 27 && position < 35);
    }

    paintRoad() {
        for (let i = 45; i < 45 + 9 + 9; i++) {
            this.squares[i].classList.add('road');
        }
        this.cars.push(new CarLeft(49));
        this.cars.push(new CarLeft(51));
        this.cars.push(new CarLeft(53));
        this.cars.push(new CarRight(55));
        this.cars.push(new CarRight(57));
        this.cars.push(new CarRight(59));

        for (let i = 0; i < this.cars.length; i++) {
            this.cars[i].paint();
        }
    }

    moveCars() {
        for (let i = 0; i < this.cars.length; i++) {
            this.cars[i].move();
        }
    }

    paintRiver() {
        for (let i = 18; i < 18 + 9 + 9; i++) {
            this.squares[i].classList.add('river');
        }

        this.logs.push(new LogLeft(22));
        this.logs.push(new LogLeft(23));
        this.logs.push(new LogLeft(24));
        this.logs.push(new LogRight(30));
        this.logs.push(new LogRight(29));
        this.logs.push(new LogRight(28));

        for (let i = 0; i < this.logs.length; i++) {
            this.logs[i].paint();
        }
    }

    moveLogs() {
        for (let i = 0; i < this.logs.length; i++) {
            this.logs[i].move();
        }
    }
}