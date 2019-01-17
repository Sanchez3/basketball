class Boot extends Phaser.Scene {

    constructor() {
        super();
    }

    preload() {
        this.load.atlas('preloader-sprite', 'assets/img/preloader-sprite.png', 'assets/img/preloader-sprite.json');
    }

    create() {
        var that=this;
        // this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        this.events.on('resize', this.resize, this);
        window.addEventListener('resize', function(event) {
            that.game.resize(window.innerWidth, window.innerHeight);
        }, false);
        this.game.scene.start('Preloader');
    }

    resize(width, height) {
        if (width === undefined) { width = this.sys.game.config.width; }
        if (height === undefined) { height = this.sys.game.config.height; }

        this.cameras.resize(width, height);
        // this.bg.setSize(width, height);
        // this.logo.setPosition(width / 2, height / 2);
    }
}

export default Boot;