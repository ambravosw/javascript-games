export default class Snake {
    constructor() {
        this.body = [42];
        this.body.push(this.body[0] - 1);
        this.body.push(this.body[1] - 1);
    }

    size() {
        return this.body.length;
    }

    getElement(i) {
        return this.body[i];
    }

    hitsBottom(direction, width) {
        return this.body[0] + width >= (width * width) && direction === width;
    }

    hitsRightWall(direction, width) {
        return this.body[0] % width === width - 1 && direction === 1;
    }

    hitsLeftWall(direction, width) {
        return this.body[0] % width === 0 && direction === -1;
    }

    hitsTop(direction, width) {
        return this.body[0] - width < 0 && direction === -width;
    }

    hitsItself(direction){
        const occupied = this.body[0] + direction;
        return this.body.includes(occupied,1);
    }

    hitsTheApple(apple){
        return this.body[0] == apple;
    }

    move(direction){
        this.body.pop();
        this.body.unshift(this.body[0] + direction);
    }

    eat(apple){
        this.body.push(apple);
    }
}