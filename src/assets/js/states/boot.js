window.PIXI   = require('phaser-ce/build/custom/pixi');
window.p2     = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');
class Boot extends Phaser.State {

    constructor() {
        super();
    }

    preload() {
        this.load.image('preloader', 'assets/img/preloader.gif');
    }

    create() {
        this.game.input.maxPointers = 1;

        //setup device scaling
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        this.initGlobalVariables();

        this.game.state.start('Preloader');
    }

    initGlobalVariables() {
        this.game.global = {

        };
    }

}

export default Boot;