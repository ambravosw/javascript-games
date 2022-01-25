import Log from './log.js';

export default class logRight extends Log {

    constructor(position){
        super();
        this.direction = 1;
        this.position = position;
    }

    next(){
        if(this.position >= 35){
            this.position = 26;
        }
        this.position += this.direction;
    }
}