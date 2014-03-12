ChickenState = function(game) {
    this.game = game;
};

ChickenState.prototype =  {

    rooster: null,

    preload: function() {

    },

    create: function()  {
        this.game.add.sprite(-100, -100, 'sky');
        new Sun(this.game, 650, 170);

        this.game.add.sprite(-100, 250, 'ground');
        this.game.add.sprite(100, 300, 'henHouse');

        new Rooster(this.game, 130, 150);

        new Chicken(this.game, 200, 460, 0.7);
        new Chicken(this.game, 650, 470, 0.75);
        new Hen(this.game, 380, 260);

        new Chicken(this.game, 400, 530, 0.85);

        this.backgroundSound = this.game.add.audio('chicks', 0.2, true);
        this.backgroundSound.play();

        this.game.add.button(820, 300, 'button', this.switchState, this);

    },

    switchState: function() {
        this.game.state.start('PigState');
        this.backgroundSound.stop();
    }
};