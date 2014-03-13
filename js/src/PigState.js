PigState = function(game) {
    this.game = game;
};

PigState.prototype =  {


    preload: function() {

    },

    create: function()  {
        var sky= this.game.add.sprite(-100, -100, 'sky');
        new Sun(this.game, 450, 100);

        var ground = this.game.add.sprite(-100, 50, 'pigGround');
        ground.scale.x = 1000/ground.width;
        ground.scale.y = 600/ground.height;
        
        var water = this.game.add.sprite(10, 220, 'water');
        
        var fenceBack = this.game.add.sprite(-296, 330, 'fence');
        new Tractor(this.game, 80, 250, 0.4)

        var fenceFront = this.game.add.sprite(-296, 380, 'fence');
        
        var mud = this.game.add.sprite(0, 485, 'mud');
        mud.scale.x = mud.scale.y = 0.9
        var barn = this.game.add.sprite(453, 230, 'barn');
        barn.scale.x = barn.scale.y = 0.7
        console.log (ground, 'før',sky.width)

        console.log (ground, 'etter',barn.width)

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