
ChickenState = function(game) {
    this.game = game;
};

ChickenState.prototype =  {

    rooster: null,

    preload: function() {
        this.game.load.image('sky', 'assets/img/chicken/sky.png');
        this.game.load.image('ground', 'assets/img/chicken/ground.png');
        this.game.load.image('henHouse', 'assets/img/chicken/hen_house.png');
        this.game.load.atlasJSONHash('rooster', 'assets/img/chicken/rooster_sprite.png', 'assets/img/chicken/rooster.json');

        this.game.load.audio('scream', ['assets/sound/rooster.mp3', 'assets/sound/rooster.wav'], true);
    },

    create: function()  {
        var sky = this.game.add.sprite(0, 0, 'sky');
        var ground = this.game.add.sprite(0, 250, 'ground');
        var henHouse = this.game.add.sprite(100, 300, 'henHouse');

        this.rooster = this.game.add.sprite(130, 150, 'rooster');

        this.rooster.animations.add('scream', [0,0,1,2,1,2,1,0,1,2,2,2,2,2,2,2,2,2,2,1,0], 7, false, true);
        this.rooster.animations.add('stand', [0], 10, false, true);
        this.rooster.animations.add('sway', [3, 0, 4, 0], 1, true, true);

        this.rooster.animations.play('stand', 1, true);

        //enables all kind of input actions on this image (click, etc)
        this.rooster.inputEnabled=true;

        this.rooster.events.onInputDown.add(this.playRooster,this);
    },

    playRooster: function() {
        this.rooster.animations.play('scream');
        var scream = this.game.add.audio('scream', 1, false);
        scream.play('', 0);
    }
};