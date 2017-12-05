class Preloader extends Phaser.State {

    constructor() {
        super();
        this.asset = null;
        this.ready = false;
    }

    preload() {
        // setup loading bar
        this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
        this.load.setPreloadSprite(this.asset);

        // setup loading and its events
        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.loadResources();
    }

    update() {
        if (this.ready) {
            this.game.state.start('Game');
        }
    }

    loadResources() {
        // load your resources here

        this.load.image('basketball_stand', 'assets/img/basketball_stand.png');
        this.load.image('ball', 'assets/img/ball.png');
        this.load.image('bg', 'assets/img/bg.jpg');
        this.load.spritesheet('chain', 'assets/img/chain.png', 16, 26);
    }

    onLoadComplete() {
        this.ready = true;
    }
}

export default Preloader;