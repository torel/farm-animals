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

        var leftButton = this.game.add.button(80, 300, 'button', this.switchStateLeft, this);
        leftButton.scale.x = -1;
        var rightButton = this.game.add.button(750, 300, 'button', this.switchStateRight, this);

    },

    switchStateRight: function() {
        this.game.state.start('ChickenState');
        this.backgroundSound.stop();
    },

    switchStateLeft: function() {
        this.game.state.start('PigState');
        this.backgroundSound.stop();
    }
};