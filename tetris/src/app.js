export default class App {
    constructor() {

        this.references = {
            'keydown': null,
        };

        document.addEventListener(
            'keydown',
            this.references.keyup = (e) => { this.control(e) });
            
        document.getElementById('startBtn')
            .addEventListener('click', this.references.click = () => { this.start() });
    }

    control(e) {
        switch (e.keyCode) {
            case 37: // left
                break;
            case 38: // up
                break;
            case 39: // right
                break;
            case 40: // down
                break;
        }
    }

    start(){
        console.log('a');
    }

}



