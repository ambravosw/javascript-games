export default class Frog {
    constructor(position) {
        this.position = position;
        this.width = 9;
    }

    paint() {
        const position = this.position + 1;
        const el = document.querySelector(".grid div:nth-child(" + position + ")");
        el.classList.add('frog');
    }

    remove() {
        const position = this.position + 1;
        const el = document.querySelector(".grid div:nth-child(" + position + ")");
        el.classList.remove('frog');
    }

    moveLeft() {
        this.remove();
        if (this.position % this.width !== 0) {
            this.position -= 1;
        }
        this.paint();
    }

    moveUp() {
        this.remove();
        if (this.position - this.width >= 0) {
            this.position -= this.width;
        }
        this.paint();
    }

    moveDown() {
        this.remove();
        if (this.position + this.width < this.width * this.width) {
            this.position += this.width;
        }
        this.paint();
    }

    moveRight() {
        this.remove();
        if (this.position % this.width < this.width - 1) {
            this.position += 1;
        }
        this.paint();
    }

    getPosition(){
        return this.position;
    }
}