import Log from './log.js';

export default class logLeft extends Log {

    constructor(position){
        super();
        this.direction = -1;
        this.position = position;
    }

    next(){
        if(this.position <= 18){
            this.position = 27;
        }
        this.position += this.direction;
    }
}