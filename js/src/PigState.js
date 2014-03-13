PigState = function(game) {
    this.game = game;
};

PigState.prototype =  {


    preload: function() {

    },

    create: function()  {
        var sky= this.game.add.sprite(-100, -100, 'sky');
        var sun = new Sun(this.game, 450, 100, 1.5);

        var ground = this.game.add.sprite(-100, 50, 'pigGround');
              
        new Tractor(this.game, 1000, 150, 0.4)

        var fenceFront = this.game.add.sprite(-296, 330, 'fence');

        var barn = this.game.add.sprite(600, 50, 'barn');

        // new Pig(this.game, 80, 400)

        // this.backgroundSound = this.game.add.audio('chicks', 0.2, true);
        // this.backgroundSound.play();

        var button = this.game.add.button(80, 300, 'button', this.switchState, this);
        button.scale.x = -1
        this.backgroundSound = this.game.add.audio('pigs', 0.2, true);
        this.backgroundSound.play();

    },

    switchState: function() {
        this.game.state.start('ChickenState');
        this.backgroundSound.stop();
    }
};