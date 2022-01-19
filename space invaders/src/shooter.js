export default class Shooter {
    constructor() {
        this.index = 202;
        this.width = 15;
        // this.laserId = null;
    }

    paint() {
        const position = this.index + 1;
        const el = document.querySelector(".grid div:nth-child(" + position + ")");
        el.classList.add('shooter');
    }

    remove() {
        const position = this.index + 1;
        const el = document.querySelector(".grid div:nth-child(" + position + ")");
        el.classList.remove('shooter');
    }

    moveLeft() {
        this.remove();
        if (this.index % this.width !== 0) {
            this.index -= 1;
        }
        this.paint();
    }

    moveRight() {
        this.remove();
        if (this.index % this.width < this.width - 1) {
            this.index += 1;
        }
        this.paint();
    }

    position(){
        return this.index;
    }

}