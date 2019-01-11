class Game {

    constructor() {

    }

    create() {
        this.matter.world.setBounds(0, 0, 1334, 670);
        this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.5, 'bg');
        var stand = this.add.sprite(this.game.config.width * 0.5 + 425, this.game.config.height * 0.5 - 150, 'basketball_stand');
        var basket = this.add.graphics();
        basket.fillStyle(0x9A2D33, 1);
        basket.fillRoundedRect(this.game.config.width * 0.5 + 350, this.game.config.height * 0.5 - 230, 88, 8, { tl: 4, tr: 4, bl: 4, br: 4 });


        this.hsv = Phaser.Display.Color.HSVColorWheel();
        this.i = 0;
        this.text1 = this.add.text(50, 50, 'click to the left / right of the ball', { font: "74px Arial Black", fill: "#fff" });
        this.text1.setStroke('#00f', 16);
        // this.text1.setShadow(2, 2, "#333333", 2, true, true);

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
        this.createNet();
        this.matter.add.mouseSpring();
        // this.createNet(5, 1020, 149);
        // this.createNet(5, 1100, 149);
        this.input.on('pointerdown', this.launch.bind(this));
        
        // this.bmd = this.add.bitmapData(1334, 670);
        // this.bmd.context.fillStyle = '#ffffff';

        // this.bg = this.add.sprite(0, 0, this.bmd);

    }
    createNet() {
        var particleOptions = { friction: 0.00001, collisionFilter: { group: group }, render: { visible: false } };
        var constraintOptions = { stiffness: 0.1 };
        var group = this.matter.world.nextGroup(true);
        var cloth;
        // softBody: function (x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions)
        cloth = this.matter.add.softBody(1018, 145, 6, 4, 1, 1, false, 7.3, particleOptions, constraintOptions);
        var f = 0;
        console.log(cloth.bodies.length)
        for (var i = 0; i < cloth.bodies.length; i++) {
            var body = cloth.bodies[i];

            if (i == 5 || i == 0) {
                body.isStatic = true;
            }

            if (i % 6 === 0) {
                f++;

                if (f > 5) {
                    f = 0;
                }
            }

            // body.gameObject = blitter.create(body.position.x, body.position.y, f);
        }
    }


    launch(pointer) {
        if (pointer.x < this.ball.x) {
            this.ball.setVelocity(-10, -10)

        } else {
            this.ball.setVelocity(10, -10)
        }
    }
    update() {
        var top = this.hsv[this.i].color;
        var bottom = this.hsv[359 - this.i].color;

        this.text1.setTint(top, top, bottom, bottom);
        this.i++;
        if (this.i === 360) {
            this.i = 0;
        }
    }

}

export default Game;