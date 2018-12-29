class Game{

    constructor() {
       
    }

    create() {
        this.world.setBounds(0, 0, 1334, 670);
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.p2.defaultRestitution = 0.8;


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


        this.ball = this.add.sprite(400, 100, 'ball');
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
        this.ball.body.mass=10;
        // console.log('ball mass',this.ball.body.mass)

        //Static Body
        var board = this.add.graphics(1130, 100);
        board.beginFill(0xffffff);
        board.drawRect(0, 0, 50, 136);
        board.endFill();
        board.alpha = 0;
        this.physics.p2.enable(board, true);
        board.body.static = true;

        var bbasket = this.add.graphics(1020, 149);
        bbasket.beginFill(0xffffff);
        bbasket.drawRect(0, 0, 5, 6);
        bbasket.endFill();
        bbasket.alpha = 0;
        this.physics.p2.enable(bbasket, true);

        bbasket.body.static = true;


        var netgroup = this.add.group();
        // net
        this.createNet(5, 1020, 149);
        this.createNet(5, 1100, 149);
        this.input.onDown.add(this.launch, this);

        const text = this.add.text(this.game.width * 0.5, 0, 'click to the left / right of the ball', {
            font: '42px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        text.anchor.set(0.5, 0);

        this.bmd = this.add.bitmapData(1334, 670);
        this.bmd.context.fillStyle = '#ffffff';

        this.bg = this.add.sprite(0, 0, this.bmd);


        // this.input.onDown.add(this.endGame, this);
    }
    createNet(length, xAnchor, yAnchor) {
        var newRect;
        var lastRect;
        var height = 10; //  Height for the physics body - your image height is 8px
        var width = 8; //  This is the width for the physics body. If too small the rectangles will get scrambled together.
        var maxForce = 100; //  The force that holds the rectangles together.

        for (var i = 0; i <= length; i++) {
            var x = xAnchor; //  All rects are on the same x position
            var y = yAnchor + (i * height); //  Every new rect is positioned below the last

            if (i % 2 === 0) {
                //  Add sprite (and switch frame every 2nd time)
                newRect = this.add.sprite(x, y, 'chain', 1);
            } else {
                newRect = this.add.sprite(x, y, 'chain', 0);
                lastRect.bringToTop();
            }


            //  Enable physicsbody
            // if(i===0){
            // this.physics.p2.enable(newRect, true);
            // }else{
            this.physics.p2.enable(newRect, true);
            // }

            newRect.body.damping=0.5;
            //  Set custom rectangle
            newRect.body.setRectangle(width, height);
           
            if (i === 0) {
                newRect.body.static = true;
                 newRect.body.clearCollision(true, true);
                // newRect.enableBody = false;
            } else {
                //  Anchor the first one created
                // newRect.body.velocity.x = 400; //  Give it a push :) just for fun
                newRect.body.mass = length / i; //  Reduce mass for evey rope element
                console.log('net mass',length / i)
            }

            //  After the first rectangle is created we can add the constraint
            if (lastRect) {
                this.physics.p2.createRevoluteConstraint(newRect, [0, -5], lastRect, [0, 5], maxForce);
            }

            lastRect = newRect;
        }
    }

    update() {
        this.bmd.context.fillStyle = '#ffff00';
        this.bmd.context.fillRect(this.ball.x, this.ball.y, 2, 2);
        //When renderer:WEBGL
        // this.bmd.dirty = true;

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