class Preloader{

    constructor() {
        this.asset = null;
        this.ready = false;
    }

    preload() {
        // setup loading bar
        this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
        this.load.setPreloadSprite(this.asset);

        // setup loading and its events
        this.load.on('complete', that.onLoadComplete.bind(this));
        this.loadResources();
    }

    update() {
        if (this.ready) {
            this.game.scene.start('Game');
        }
    }

    loadResources() {
        // load your resources here

        this.load.image('basketball_stand', 'assets/img/basketball_stand.png');
        this.load.image('ball', 'assets/img/ball.png');
        this.load.image('bg', 'assets/img/bg.jpg');
        this.load.spritesheet('chain', 'assets/img/chain.png', 8, 13);
    }

    onLoadComplete() {
        this.ready = true;
    }
}

export default Preloader;