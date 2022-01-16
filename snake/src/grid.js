export default class Grid {
    constructor() {
        this.grid = document.querySelector('.grid');
        this.squares = [];
        this.create();
    }

    create() {
        for (let i = 0; i < 100; i++) {
            this.grid.appendChild(document.createElement('div'));
        }
        this.squares = document.querySelectorAll('.grid div');
    }

    paintSnake(snake) {
        // console.assert(snake !== undefined, "error");
        for (let i = 0; i < snake.size(); i++) {
            this.squares[snake.getElement(i)].classList.add('snake');
        }
    }

    paintApple(apple) {
        this.squares[apple].classList.add('apple');
    }

    removeApple(apple) {
        this.squares[apple].classList.remove('apple');
    }

    removeSnake(snake) {
        for (let i = 0; i < snake.size(); i++) {
            this.squares[snake.getElement(i)].classList.remove('snake');
        }
    }

    availableSquare(position) {
        return this.squares[position].classList.contains('snake');
    }

    clear() {
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].classList.remove('snake');
            this.squares[i].classList.remove('apple');
        }
    }

}