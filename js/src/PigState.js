PigState = function(game) {
    this.game = game;
};

PigState.prototype =  {


    preload: function() {

    },

    create: function()  {
        var sky= this.game.add.sprite(-100, -100, 'sky');
        new Sun(this.game, 450, 100, 1.2);

        this.game.add.sprite(-100, 50, 'pigGround');

        var barn = this.game.add.sprite(660, 110, 'barn');
        barn.scale.x = barn.scale.y = 0.25;

        new Tractor(this.game, 680, 200, 0.3);
        this.game.add.sprite(-296, 300, 'fence');

        new Pig(this.game, 580, 350, 0.5);
       


        // this.backgroundSound = this.game.add.audio('chicks', 0.2, true);
        // this.backgroundSound.play();

        var button = this.game.add.button(80, 300, 'button', this.switchState, this);
        button.scale.x = -1;
        this.backgroundSound = this.game.add.audio('pigs', 0.2, true);
        this.backgroundSound.play();

    },

    switchState: function() {
        this.game.state.start('ChickenState');
        this.backgroundSound.stop();
    }
};