export default class Square {
    constructor(id, score) {
        this.id = id;
        this.square = document.createElement('div');
        this.square.setAttribute('class', 'square');
        this.square.setAttribute('id', this.id);
        this.square.addEventListener('mousedown', () => { this.hit(); });
        this.hasMole = false;
        this.score = score;
    }

    getObject() {
        return this.square;
    }

    clearMole() {
        this.square.classList.remove('mole');
        this.hasMole = false;
    }

    setMole() {
        this.square.classList.add('mole');
        this.hasMole = true;
    }

    hit(){
        if(this.hasMole){
            this.score.textContent++;
        };
    }
}