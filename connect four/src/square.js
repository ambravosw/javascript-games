export default class Square {
    constructor(row, col) {
        this.id = row + '-' + col;
        this.square = document.createElement('div');
        // this.square.setAttribute('class', 'square');
        this.square.setAttribute('id', this.id);
        this.col = col;
        this.row = row;
        this.player = -1;
    }

    getObject() {
        return this.square;
    }

    isOccupied(){
        return this.player !== -1;
    }

    isOccupiedByPlayer( player ){
        return this.player === player;
    }

    setChip(player){
        this.player = player;
        this.square.classList.add('player-' + player)
    }

    samePlayer(square){
        return (this.player > -1) && (this.player === square.player);
    }

    getRow(){
        return this.row;
    }

    getCol(){
        return this.col;
    }
}