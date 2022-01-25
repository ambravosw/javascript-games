import Car from './car.js';

export default class CarLeft extends Car {

    constructor(position){
        super();
        this.direction = -1;
        this.position = position;
    }

    next(){
        if(this.position <= 45){
            this.position = 53;
        }
        this.position += this.direction;
    }
}