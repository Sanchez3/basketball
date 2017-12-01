class Game extends Phaser.State {

    constructor() {
        super();
    }

    create() {
        const text = this.add.text(this.game.width * 0.5, 0, 'Game', {
            font: '42px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        text.anchor.set(0.5, 0);

        this.add.image(this.game.width * 0.5, this.game.height * 0.5, 'bg').anchor.set(0.5);
        var stand = this.add.sprite(this.game.width * 0.5 + 300, 100, 'basketball_stand');
        // stand.anchor.set(0.5);



        this.input.onDown.add(this.endGame, this);
    }

    update() {

    }

    endGame() {
        this.game.state.start('gameover');
    }

}

export default Game;