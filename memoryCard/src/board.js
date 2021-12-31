export default class Board {
    constructor(cards) {
        this.cards = cards;
        this.grid = document.querySelector('.grid');
        this.create();
        this.grid.addEventListener('click', () => { this.checkCards(); });
    }

    create() {
        this.cards = this.shuffleArray(this.cards);
        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i].create(i);
            this.grid.appendChild(this.cards[i].getObject());
        }
    }

    checkCards() {
        let selectedCards = []
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].isFlipped()) {
                selectedCards.push(i);
            }
        }
        if (selectedCards.length == 2) {
            if (this.cards[selectedCards[0]].equal(this.cards[selectedCards[1]])) {
                setTimeout(() => { this.removeCards(selectedCards); }, 500);
            }
            else {
                setTimeout(() => { this.flipCards(); }, 500);
            }
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    flipCards() {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].isFlipped()) {
                this.cards[i].flip();
            }
        }
    }

    removeCards(selectedCards) {
        this.cards[selectedCards[0]].remove();
        this.cards[selectedCards[1]].remove();
    }

}