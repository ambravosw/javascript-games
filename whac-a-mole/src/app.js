import Board from './board.js';

export default class App {
    constructor() {
        this.startBt = document.getElementById('start');
        this.startBt.addEventListener('click', () => { this.start(); });

        this.timeLeft = document.querySelector('#time-left');
        this.score = document.querySelector('#score');

        this.TOTALTIME = 6;

        this.setTime();
        
        this.board = new Board(this.score);
        this.countDownTimer = null;
    }

    start() {
        this.setTime();
        this.score.textContent = 0;
        console.log('starting');
        this.countDownTimer = setInterval(() => { this.countDown(); }, 1000);
        this.board.setUp();
    }

    countDown() {
        this.currentTime--;
        this.timeLeft.textContent = this.currentTime;

        if (this.currentTime == 0) {
            clearInterval(this.countDownTimer);
            this.board.finish();
            alert('GAME OVER! Your final score is ' + this.score.textContent);
        }
    }

    setTime(){
        this.currentTime = this.TOTALTIME;
        this.timeLeft.textContent = this.currentTime;
    }
}


