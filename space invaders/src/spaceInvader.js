export default class SpaceInvader {
    constructor(i) {
        this.index = i;
        this.width = 15;
        this.isAlive = true;
    }

    paint() {
        if(!this.isAlive){
            return;
        }
        const position = this.index + 1;
        const el = document.querySelector(".grid div:nth-child(" + position + ")");
        el.classList.add('invader');
    }

    remove() {
        const position = this.index + 1;
        const el = document.querySelector(".grid div:nth-child(" + position + ")");
        el.classList.remove('invader');
    }

    move(position) {
        this.index += position;
    }

    isLeftEdge() {
        return this.index % this.width === 0;
    }

    isRightEdge() {
        return this.index % this.width === this.width - 1;
    }

    bottomReached() {
        return this.index >= this.width * (this.width - 2);
    }

    contains(element){
        return this.index === element;
    }

    killed(){
        this.isAlive = false;
        this.remove();
    }
}

