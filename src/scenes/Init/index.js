import { gameHeight, gameWidth } from '../../consts';
import back from '../assets/img/fondo.jpg'
import imgDoClick from '../assets/img/cara3.png'
import imgSuperman from '../assets/img/cara4.png'
import imgSpiderman from '../assets/img/cara2.png'

class Init extends Phaser.Scene {

    preload() {
        //Add background
        this.load.image('mainBack', back);
        //Add images to click
        this.load.image('addPower', imgDoClick);
        this.load.image('superman', imgSuperman);
        this.load.image('spiderman', imgSpiderman);
    }

    create() {
        //Load background at the half of the screen
        this.add.sprite(gameWidth / 2, gameHeight / 2, 'mainBack');
        //Load images to click on the respective screen of background
        this.imgDoClick = this.add.sprite(480, 100, 'addPower').setScale(1, 1);
        this.imgSuperman = this.add.sprite(225, 350, 'superman').setScale(0.5, 0.5);
        this.imgSpiderman = this.add.sprite(740, 350, 'spiderman').setScale(0.5, 0.5);
        //Set pulsed main face to acumulate power
        this.imgDoClick.setInteractive();
        this.imgDoClick.on('pointerdown', () => this.addPower(this.imgDoClick));
        //Set hero pulsed to get power
        this.imgSuperman.setInteractive();
        this.imgSuperman.on('pointerdown', () => this.selectHeroPower(this.imgSuperman));
        this.imgSpiderman.setInteractive();
        this.imgSpiderman.on('pointerdown', () => this.selectHeroPower(this.imgSpiderman));
        //Set power text
        this.totalPower = 0;
        this.powerAdded = this.add.text(550, 350, this.totalPower, {
            fontFamily: 'font1',
            fontSize: 60,
            color: '#00ff00',
            align: 'right'
        });
        //Set superman text
        this.superman = 'Superman';
        this.superPower = this.add.text(40, 25, this.superman, {
            fontFamily: 'font1',
            fontSize: 30,
            color: '#00ff00',
            align: 'right'
        });
        //Set superPower text
        this.totalSuperPower = 0;
        this.superPowerAdded = this.add.text(65, 60, this.totalSuperPower, {
            fontFamily: 'font1',
            fontSize: 60,
            color: '#00ff00',
            align: 'right'
        });
        //Set spiderman text
        this.spiderman = 'Spiderman';
        this.spiderPower = this.add.text(790, 25, this.spiderman, {
            fontFamily: 'font1',
            fontSize: 30,
            color: '#00ff00',
            align: 'right'
        });
        //Set spiderman text
        this.totalSpiderPower = 0;
        this.spiderPowerAdded = this.add.text(810, 60, this.totalSpiderPower, {
            fontFamily: 'font1',
            fontSize: 60,
            color: '#00ff00',
            align: 'right'
        });
        this.powerAdded.setOrigin(1, 0);
    }

    update() {
        console.log('update');
    }

    addPower(cara) {
        if (this.totalPower < 99900) {
            this.totalPower += 100;
        }
        else {
            alert('No puedes aumentar más el poder');
        }
        this.powerAdded.setText(this.totalPower);
    }

    selectHeroPower(cara) {
        if (this.totalPower > 0) {
            if (cara.texture.key == this.imgSuperman.texture.key) {
                this.totalSuperPower += 100;
                this.totalPower -= 100;
                this.superPowerAdded.setText(this.totalSuperPower);
                this.powerAdded.setText(this.totalPower);
            }
            else if (cara.texture.key == this.imgSpiderman.texture.key) {
                this.totalSpiderPower += 100;
                this.totalPower -= 100;
                this.spiderPowerAdded.setText(this.totalSpiderPower);
                this.powerAdded.setText(this.totalPower);
            }
        }
        else {
            alert('No hay poder para asignar');
        }
    }
}

export default Init;