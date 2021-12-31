export default class Card {
    constructor(name, image) {
        this.flipped = false;
        this.name = name;
        this.image = image;
        this.bkgImage = 'src/images/bkg.png';
        this.id = null;
        this.card = null;
        this.references = { 'flip': null };
    }

    create(id) {
        this.id = id;
        this.card = document.createElement('img');
        this.card.setAttribute('src', this.bkgImage);
        this.card.setAttribute('data-id', this.id);
        this.card.addEventListener('click', this.references.flip = () => { this.flip(); });
        // error: this.card.addEventListener('click', flip);
        // error: this.card.addEventListener('click', this.flip);
    }

    getObject() {
        return this.card;
    }

    flip() {
        this.flipped = !this.flipped;
        if (this.flipped) {
            this.card.setAttribute('src', this.image);
        }
        else {
            this.card.setAttribute('src', this.bkgImage);
        }
    }

    isFlipped() {
        return this.flipped;
    }

    equal(card) {
        return this.name === card.name;
    }

    remove() {
        this.flipped = false;
        this.name += this.id;
        this.card.setAttribute('src', 'src/images/blank.png');
        this.card.removeEventListener('click', this.references.flip);
    }
}