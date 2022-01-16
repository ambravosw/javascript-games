import Grid from './grid.js';
import Snake from './snake.js';
// import Card from './card.js';

export default class App {
    constructor() {
        console.log('app');

        this.reset();
        document.addEventListener('keyup', (e) => { this.control(e) });

        document.getElementById('start').addEventListener('click', () => { this.start() });
    }

    reset() {
        this.direction = 1;
        this.width = 10;
        this.intervalTime = 1000;
        this.score = 0;
        this.setScore(0);
        this.speed = 0.9;
        clearInterval(this.interval);

        this.grid = new Grid();
        this.snake = new Snake();

        this.grid.clear();
        this.grid.removeSnake(this.snake);
    }

    start() {
        this.reset();
        this.interval = setInterval(() => { this.moveOutcomes() }, this.intervalTime);

        this.grid.paintSnake(this.snake);
        this.randomApple();
        this.grid.paintApple(this.apple);
    }

    control(e) {
        if (e.keyCode === 39) {
            this.direction = 1;
        }
        if (e.keyCode === 38) {
            this.direction = -this.width;
        }
        if (e.keyCode === 37) {
            this.direction = -1;
        }
        if (e.keyCode === 40) {
            this.direction = +this.width;
        }
    }

    moveOutcomes() {
        if (this.snake.hitsBottom(this.direction, this.width) ||
            this.snake.hitsRightWall(this.direction, this.width) ||
            this.snake.hitsLeftWall(this.direction, this.width) ||
            this.snake.hitsTop(this.direction, this.width) ||
            this.snake.hitsItself(this.direction)) {
            return clearInterval(this.interval);
        }

        this.grid.removeSnake(this.snake);
        this.snake.move(this.direction);

        if (this.snake.hitsTheApple(this.apple)) {
            this.grid.removeApple(this.apple);
            this.snake.eat(this.apple);
            this.randomApple();
            this.grid.paintApple(this.apple);
            this.setScore(1);
            clearInterval(this.interval);
            this.intervalTime *= this.speed;
            this.interval = setInterval(() => { this.moveOutcomes() }, this.intervalTime);
        }
        this.grid.paintSnake(this.snake);
        console.log(this.snake);
    }

    setScore(value) {
        this.score += value;
        const el = document.getElementById('score');
        el.textContent = this.score;
    }

    randomApple() {
        do {
            this.apple = Math.floor(Math.random() * 100);
        } while (this.grid.availableSquare(this.apple));
        this.grid.paintApple(this.apple);
    }
}



