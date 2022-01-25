import Car from './car.js';

export default class CarRight extends Car {

    constructor(position){
        super();
        this.direction = 1;
        this.position = position;
    }

    next(){
        if(this.position >= 62){
            this.position = 53;
        }
        this.position += this.direction;
    }
}