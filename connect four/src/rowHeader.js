export default class RowHeader {
    constructor( cols ) {
        this.columnsNumber = cols;
        this.currentCol = -1;

        const header = document.querySelector('.rowHeader');
        for (let i = 0; i < this.columnsNumber ; i++) {
            const column = document.createElement('img');
            column.setAttribute('src', 'src/img/down.png');
            column.setAttribute('data-id', i);
            column.addEventListener('click', () => { this.setCurrentCol(i); });
            header.appendChild(column);
        }

    }

    setCurrentCol(col){
        this.currentCol = col;
    }

    getCurrentCol(){
        return this.currentCol;
    }
}