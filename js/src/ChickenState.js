
ChickenState = function(game) {
    this.game = game;
};

ChickenState.prototype =  {

    rooster: null,

    preload: function() {

    },

    create: function()  {
        this.game.stage.backgroundColor = '#ffffff';

        var sky = this.game.add.sprite(-100, -100, 'sky');
        var ground = this.game.add.sprite(-100, 250, 'ground');
        var henHouse = this.game.add.sprite(100, 300, 'henHouse');

        this.rooster = this.game.add.sprite(130, 150, 'rooster');

        this.rooster.animations.add('scream', [0,0,1,2,1,2,1,0,1,2,2,2,2,2,2,2,2,2,2,1,0], 7, false, true);
        this.rooster.animations.add('stand', [0], 10, false, true);
        this.rooster.animations.add('sway', [3, 0, 4, 0], 1, true, true);

        this.rooster.animations.play('stand', 1, true);

        //enables all kind of input actions on this image (click, etc)
        this.rooster.inputEnabled=true;
        this.rooster.events.onInputDown.add(this.playRooster,this);

        this.sun = new Sun(this.game, 650, 170);
    },

    playRooster: function() {
        this.rooster.animations.play('scream');
        var scream = this.game.add.audio('scream', 1, false);
        scream.play('', 0);
    }
};