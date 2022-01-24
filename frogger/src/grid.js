export default class Grid {
    constructor() {
        this.grid = document.querySelector('.grid');
        this.squares = [];
        this.endPosition = 5;
        this.create();
    }

    create() {
        for (let i = 0; i < 9*9; i++) {
            this.grid.appendChild(document.createElement('div'));
        }
        this.squares = document.querySelectorAll('.grid div');
        this.squares[75].classList.add('starting-block');
        this.squares[this.endPosition].classList.add('ending-block');
    }

    checkWin(position){
        return position == this.endPosition;
    }

    checkLose(position){
        return position == this.endPosition -1;
    }

}