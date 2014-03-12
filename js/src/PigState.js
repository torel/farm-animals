PigState = function(game) {
    this.game = game;
};

PigState.prototype =  {


    preload: function() {

    },

    create: function()  {
        this.game.add.sprite(-100, -100, 'sky');
        new Sun(this.game, 600, 130);

        this.game.add.sprite(-200, 100, 'pigGround');
        this.game.add.sprite(-100, 250, 'fence');
        this.game.add.sprite(-100, 250, 'water');
        this.game.add.sprite(0, 450, 'mud');
        this.game.add.sprite(300, 200, 'barn');

        // this.backgroundSound = this.game.add.audio('chicks', 0.2, true);
        // this.backgroundSound.play();

        this.game.add.button(20, 300, 'button', this.switchState, this);

    },

    switchState: function() {
        this.game.state.start('ChickenState');
    }
};