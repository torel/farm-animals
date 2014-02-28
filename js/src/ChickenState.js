
ChickenState = function(game) {
    this.game = game;
};

ChickenState.prototype =  {

    rooster: null,

    preload: function() {

    },

    create: function()  {
        var sky = this.game.add.sprite(-100, -100, 'sky');
        this.sun = new Sun(this.game, 650, 170);

        var ground = this.game.add.sprite(-100, 250, 'ground');
        var henHouse = this.game.add.sprite(100, 300, 'henHouse');

        this.rooster = new Rooster(this.game, 130, 150);

        this.hen = new Hen(this.game, 380, 260);
    },

    playRooster: function() {
        this.rooster.animations.play('scream');
        var scream = this.game.add.audio('scream', 1, false);
        scream.play('', 0);
    }
};