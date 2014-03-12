PigState = function(game) {
    this.game = game;
};

PigState.prototype =  {


    preload: function() {

    },

    create: function()  {
        this.game.add.sprite(-100, -100, 'sky');
        new Sun(this.game, 650, 100);

        this.game.add.sprite(0, 50, 'pigGround');
        this.game.add.sprite(10, 220, 'water');
        this.game.add.sprite(0, 330, 'fence');
        this.game.add.sprite(0, 380, 'fence');
        this.game.add.sprite(0, 450, 'mud');
        this.game.add.sprite(555, 200, 'barn');

        // this.backgroundSound = this.game.add.audio('chicks', 0.2, true);
        // this.backgroundSound.play();

        this.game.add.button(20, 300, 'button', this.switchState, this);
        this.backgroundSound = this.game.add.audio('pigs', 0.2, true);
        this.backgroundSound.play();

    },

    switchState: function() {
        this.game.state.start('ChickenState');
        this.backgroundSound.stop();
    }
};