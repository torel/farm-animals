SheepState = function(game) {
    this.game = game;
};

SheepState.prototype =  {

    create: function()  {
        this.game.add.sprite(-100, -100, 'sky');
        new Sun(this.game, 250, 70, 1.5);

        this.game.add.sprite(-100, 0, 'sheepGround');

        new Sheep(this.game, 260, 280);

        this.game.add.sprite(580, 430, 'stone');

        //this.backgroundSound = this.game.add.audio('chicks', 0.2, true);
        //this.backgroundSound.play();

        this.game.add.button(700, 300, 'button', this.switchState, this);

    },

    switchState: function() {
        this.game.state.start('ChickenState');
        this.backgroundSound.stop();
    }
};