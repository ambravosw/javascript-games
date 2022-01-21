export default class Laser {
    constructor(position) {
        this.position = position;
        this.laserId = null;
        this.width = 15;
    }

    shoot() {
        this.laserId = setInterval(() => { this.moveLaser() }, 100);
    }

    moveLaser() {
        const lastPosition = this.position + 1;
        let el = document.querySelector(".grid div:nth-child(" + lastPosition + ")");
        if (el) {
            el.classList.remove('laser');
        }
        const position = this.position - this.width + 1;
        if (position < 0) {
            clearInterval(this.laserId);
            return;
        }
        el = document.querySelector(".grid div:nth-child(" + position + ")");
        if (el) {
            el.classList.add('laser');
        }
        if (el && el.classList.contains('invader')) {
            const positionAux = position - 1;
            document.dispatchEvent(new CustomEvent("killed", { detail: { position: positionAux } }));
            el.classList.remove('laser');
            el.classList.add('boom');

            setTimeout(() => el.classList.remove('boom'), 300);
            clearInterval(this.laserId);
        }
        this.position -= this.width;
    }


}