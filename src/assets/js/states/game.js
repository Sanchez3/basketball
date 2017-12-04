class Game extends Phaser.State {

    constructor() {
        super();
    }

    create() {
        this.world.setBounds(0, 0, 1334, 670);
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.p2.defaultRestitution = 0.8;
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


        this.ball = this.add.sprite(100, 100, 'ball');
         this.ball.smoothed = false;
        this.ball.anchor.setTo(0.5);
        this.physics.p2.enable(this.ball, true);
        this.ball.body.clearShapes();
        this.ball.body.setCircle(28);
        // this.ball.body.fixedRotation = false;
        this.ball.body.velocity.y = 200;
        this.physics.p2.gravity.y = 100;
        this.physics.p2.restitution = 0.8;
        this.camera.follow(this.ball);
        //Static Body
        var board = this.add.graphics(1127, 100);
        board.beginFill(0xffffff);
        board.drawRect(0, 0, 50, 136);
        board.endFill();
        board.alpha = 0;
        this.physics.p2.enable(board, true);
        board.body.static = true;

        var bbasket = this.add.graphics(1010, 149);
        bbasket.beginFill(0xffffff);
        bbasket.drawRect(0, 0, 5, 6);
        bbasket.endFill();
        bbasket.alpha = 0;
        this.physics.p2.enable(bbasket, true);

        bbasket.body.static = true;


        this.input.onDown.add(this.launch, this);










        // this.input.onDown.add(this.endGame, this);
    }

    update() {

    }

    launch() {
        if (this.input.x < this.ball.x) {
            this.ball.body.velocity.x = -200;
            this.ball.body.velocity.y = -200;
        } else {
            this.ball.body.velocity.x = 200;
            this.ball.body.velocity.y = -200;
        }
    }

}

export default Game;