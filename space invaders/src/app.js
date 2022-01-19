import Grid from './grid.js';
import SpaceInvader from './spaceInvader.js';
import Shooter from './shooter.js';
import Laser from './laser.js';

export default class App {
    constructor() {
        console.log('app');

        this.width = 15;
        this.direction = 1;

        this.grid = new Grid();
        this.shooter = new Shooter();
        this.shooter.paint();
        this.createInvaders();

        this.references = { 'keydown': null };

        document.addEventListener('keydown', this.references.keydown = (e) => { this.control(e) });
        document.addEventListener('killed', (e) => { this.removeInvader(e.detail.position) });

        this.invaderId = setInterval(() => { this.moveInvaders() }, 200);
    }

    createInvaders() {
        this.invaders = [];
        for (let i = 0; i < 10; i++) {
            const invader = new SpaceInvader(i);
            invader.paint();
            this.invaders.push(invader);
        }
        for (let i = 15; i < 25; i++) {
            const invader = new SpaceInvader(i);
            invader.paint();
            this.invaders.push(invader);
        }
        for (let i = 30; i < 40; i++) {
            const invader = new SpaceInvader(i);
            invader.paint();
            this.invaders.push(invader);
        }
    }

    moveInvaders() {
        const leftEdge = this.invaders.length > 0 ? this.invaders[0].isLeftEdge() : 0;
        const rightEdge = this.invaders.length > 0 ? this.invaders[this.invaders.length - 1].isRightEdge() : 0;

        let position = 0;
        if ((leftEdge && this.direction === -1) || (rightEdge && this.direction === 1)) {
            position = this.width;
            this.direction *= -1;
        }
        if (position === 0) {
            position = this.direction;
        }

        for (let i = 0; i < this.invaders.length; i++) {
            this.invaders[i].remove();
        }

        for (let i = 0; i < this.invaders.length; i++) {
            this.invaders[i].move(position);
        }

        for (let i = 0; i < this.invaders.length; i++) {
            this.invaders[i].paint();
        }

        if (this.isGameOver()) {
            clearInterval(this.invaderId);
            document.removeEventListener('keydown', this.references.keydown);
        }
    }

    removeInvader(position) {
        for (let i = 0; i < this.invaders.length; i++) {
            if (this.invaders[i].contains(position)) {
                this.invaders[i].killed();
                this.invaders.splice(i, 1);
                break;
            }
        }
        if (this.areAllKilled()) {
            clearInterval(this.invaderId);
            document.removeEventListener('keydown', this.references.keydown);
        }
    }

    isGameOver() {
        for (let i = 0; i < this.invaders.length; i++) {
            const isGameOver = this.invaders[i].bottomReached();
            if (isGameOver) {
                return true;
            }
        }
        return false;
    }

    areAllKilled() {
        return this.invaders.length <= 0;
    }

    control(e) {
        if (e.keyCode === 37) {
            this.shooter.moveLeft();
        }
        if (e.keyCode === 39) {
            this.shooter.moveRight();
        }
        if (e.code === 'Space') {
            const laser = new Laser(this.shooter.position());
            laser.shoot();
        }
    }
}



