import Board from './board.js';
import Card from './card.js';

export default class App {
    constructor() {
        console.log('app');
        const cards = [
            new Card('account','src/images/account.png'),
            new Card('account','src/images/account.png'),
            new Card('account-supervisor-circle','src/images/account-supervisor-circle.png'),
            new Card('account-supervisor-circle','src/images/account-supervisor-circle.png'),
            new Card('alarm','src/images/alarm.png'),
            new Card('alarm','src/images/alarm.png'),
            new Card('alert','src/images/alert.png'),
            new Card('alert','src/images/alert.png'),
            new Card('auto-fix','src/images/auto-fix.png'),
            new Card('auto-fix','src/images/auto-fix.png'),
            new Card('baby-face','src/images/baby-face.png'),
            new Card('baby-face','src/images/baby-face.png'),
            new Card('bathtub','src/images/bathtub.png'),
            new Card('bathtub','src/images/bathtub.png'),
            new Card('brightness-1','src/images/brightness-1.png'),
            new Card('brightness-1','src/images/brightness-1.png'),
            new Card('delete','src/images/delete.png'),
            new Card('delete','src/images/delete.png'),
            new Card('fingerprint','src/images/fingerprint.png'),
            new Card('fingerprint','src/images/fingerprint.png'),
        ];

        const board = new Board(cards);
    }
}



