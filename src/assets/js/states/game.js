class Game extends Phaser.State {

    constructor() {
        super();
    }

    create() {
        this.world.setBounds(0, 0, 750, 1334);
        this.physics.startSystem(Phaser.Physics.P2JS);
        const text = this.add.text(this.game.width * 0.5, 0, 'Game', {
            font: '42px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        text.anchor.set(0.5, 0);

        this.add.image(this.game.width * 0.5, this.game.height * 0.5, 'bg').anchor.set(0.5);
        var stand = this.add.sprite(this.game.width * 0.5 + 325, 10, 'basketball_stand');

        var basket = this.add.graphics(1010, 146);
        basket.beginFill(0x9A2D33);
        basket.moveTo(4, 0);
        basket.lineTo(92, 0);
        basket.arcTo(92, 0, 96, 4, 6);
        basket.arcTo(96, 4, 92, 8, 6);
        basket.lineTo(92, 8);
        basket.lineTo(4, 8);
        basket.arcTo(0, 4, 4, 8, 6);
        basket.arcTo(4, 0, 0, 4, 6);
        basket.endFill();


        var ball = this.add.sprite(100, 100, 'ball');
        this.physics.p2.enable(ball);
        ball.body.fixedRotation = false;
        ball.body.velocity.y = 200;












        // this.input.onDown.add(this.endGame, this);
    }

    update() {

    }

    endGame() {
        this.game.state.start('gameover');
    }

}

export default Game;