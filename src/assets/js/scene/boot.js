class Boot extends Phaser.Scene {

    constructor() {
        super();
    }

    preload() {
        this.load.atlas('preloader-sprite', 'assets/img/preloader-sprite.png', 'assets/img/preloader-sprite.json');
    }

    create() {
        // this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scene.start('Preloader');
    }
}

export default Boot;