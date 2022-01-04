import Board from './board.js';

export default class App {
    constructor() {
        this.board = new Board();
        this.currentPlayer = 1;
        this.references = { 'dropChip': null };

        this.createEventListener();

        this.changeTurn();
    }

    changeTurn() {
        const turn = document.querySelector('#currentPlayer');
        turn.classList.remove('player-' + this.currentPlayer);
        this.currentPlayer = ((this.currentPlayer + 1) % 2);
        turn.classList.add('player-' + this.currentPlayer);
        turn.textContent = this.currentPlayer + 1;
    }

    createEventListener() {
        const header = document.querySelector('.rowHeader');
        header.addEventListener('click', this.references.dropChip = () => {
            const ok = this.board.dropChip(this.currentPlayer);
            if (!ok) {
                return;
            }
            if (this.board.isFinished(this.currentPlayer)) {
                this.finishMatch();
            }
            else {
                this.changeTurn();
            }
        });
    }

    finishMatch() {
        const player = this.currentPlayer + 1;
        document.getElementById('result').textContent = 'Player ' + player + ' won!';
        const header = document.querySelector('.rowHeader');
        header.removeEventListener('click', this.references.dropChip);
    }
}


