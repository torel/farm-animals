PigState = function(game) {
    this.game = game;
};


PigState.prototype =  {

    preload: function() {

    },

    create: function()  {
        this.game.animals = {};

        var sky= this.game.add.sprite(-100, -100, 'sky');
        new Sun(this.game, 450, 100, 1.2);

        this.game.add.sprite(-100, 50, 'pigGround');

        var barn = this.game.add.sprite(660, 110, 'barn');
        barn.scale.x = barn.scale.y = 0.25;

        this.game.animals['tractor'] = new Tractor(this.game, 680, 170, 0.4);
        this.game.add.sprite(-296, 300, 'fence');

        this.game.animals['pig'] = new Pig(this.game, 580, 430, 0.5);
       


        // this.backgroundSound = this.game.add.audio('chicks', 0.2, true);
        // this.backgroundSound.play();

        var button = this.game.add.button(80, 300, 'button', this.switchState, this);
        button.scale.x = -1;
        // this.backgroundSound = this.game.add.audio('pigs', 0.2, true);
        // this.backgroundSound.play();

    },

    update: function () {
        //  if (this.game.input.mousePointer.isDown) {
        //     console.log('X:', this.game.input.x*this.game.world.scale.x);
        //     console.log('Y:', this.game.input.y*this.game.world.scale.y);
        // }
    },

    switchState: function() {
        this.game.state.start('SheepState');
        // this.backgroundSound.stop();
    }
};