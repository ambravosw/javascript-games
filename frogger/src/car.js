export default class Car {
    constructor(){
        this.direction = 0;
    }

    move(){
        this.remove();
        this.next();
        this.paint();
    }

    paint(){
        const position = this.position + 1;
        const el = document.querySelector(".grid div:nth-child(" + position + ")");
        el.classList.add('car');
    }

    remove(){
        const position = this.position + 1;
        const el = document.querySelector(".grid div:nth-child(" + position + ")");
        el.classList.remove('car');
    }
}