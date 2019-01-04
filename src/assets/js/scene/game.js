class Game {

    constructor() {

    }

    create() {
        this.matter.world.setBounds(0, 0, 1334, 670);
        this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.5, 'bg');
        var stand = this.add.sprite(this.game.config.width * 0.5 + 425, this.game.config.height * 0.5 - 150, 'basketball_stand');
        var basket = this.add.graphics(1010, 146);
        basket.fillStyle(0x9A2D33);
        basket.moveTo(4, 0);
        basket.lineTo(92, 0);
        basket.arc(92, 0, 96, 4, 6);
        basket.arc(96, 4, 92, 8, 6);
        basket.lineTo(92, 8);
        basket.lineTo(4, 8);
        basket.arc(0, 4, 4, 8, 6);
        basket.arc(4, 0, 0, 4, 6);
        basket.closePath();



        this.ball = this.matter.add.sprite(400, 100, 'ball');
        this.ball.setBody({
            type: 'circle',
            radius: 28
        });
        this.ball.smoothed = false;

        // this.ball.body.fixedRotation = false;
        this.ball.setVelocity(2, -2)
        this.ball.setBounce(0.5);
        this.ball.setMass(10);
        // console.log('ball mass',this.ball.body.mass)

        //Static Body
        var board = this.matter.add.rectangle(1130, 100, 50, 136, { isStatic: true });

        var bbasket = this.matter.add.rectangle(1020, 149, 5, 6, { isStatic: true });

        var netgroup = this.add.group();
        // net
        // this.createNet(5, 1020, 149);
        // this.createNet(5, 1100, 149);
        this.input.on('pointerdown', this.launch.bind(this));

        const text = this.add.text(this.game.width * 0.5, 0, 'click to the left / right of the ball', {
            font: '42px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        text.setOrigin(0.5, 0);

        // this.bmd = this.add.bitmapData(1334, 670);
        // this.bmd.context.fillStyle = '#ffffff';

        // this.bg = this.add.sprite(0, 0, this.bmd);


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

            newRect.body.damping = 0.5;
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
                console.log('net mass', length / i)
            }

            //  After the first rectangle is created we can add the constraint
            if (lastRect) {
                this.physics.p2.createRevoluteConstraint(newRect, [0, -5], lastRect, [0, 5], maxForce);
            }

            lastRect = newRect;
        }
    }


    launch(pointer) {
        if (pointer.x < this.ball.x) {
            this.ball.setVelocity(-10, -10)

        } else {
            this.ball.setVelocity(10, -10)
        }
    }

}

export default Game;