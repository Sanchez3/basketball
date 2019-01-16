class Preloader {

    constructor() {
        this.asset = null;
        this.ready = false;
    }

    preload() {
        // setup loading bar
        this.anims.create({ key: 'loading', frames: this.anims.generateFrameNames('preloader-sprite'), repeat: -1 });
        this.asset = this.add.sprite(this.game.config.width * 0.5, this.game.config.height * 0.5, 'preloader-sprite').play('loading');
        this.asset.x = this.game.config.width * 0.5 - this.asset.width / 2;
        this.asset.displayWidth = 0;

        this.asset.setOrigin(0, 0.5);
        this.pg = { v: 0 };

        // setup loading and its events
        this.load.on('progress', this.onLoadProgress.bind(this))
        this.load.on('complete', this.onLoadComplete.bind(this));
        this.loadResources();
    }

    loadResources() {
        // load your resources here

        this.load.image('basketball-stand', 'assets/img/basketball-stand.png');
        this.load.image('ball', 'assets/img/ball.png');
        this.load.image('bg', 'assets/img/bg.jpg');
        this.load.spritesheet('chain-sprites', 'assets/img/chain-sprites.png', { frameWidth: 15, frameHeight: 13 });
    }
    onLoadProgress(value) {
        // TweenMax.to(this.pg, 0.2, {
        //     v: value,
        //     onUpdate: function() {
        //         this.asset.displayWidth = this.asset.width * this.pg.v
        //     }.bind(this)
        // })
        this.tweens.add({
            targets: this.asset,
            displayWidth: this.asset.width*value,
            ease: 'Power1',
            duration: 100
        });
    }
    onLoadComplete() {
        console.log('all')
        this.game.scene.start('Game');
    }
}

export default Preloader;