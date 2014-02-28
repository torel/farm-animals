
PreLoader = function(game) {
    this.game = game;
};

PreLoader.prototype = {

    preload: function() {
        // Images
        this.game.load.image('sky', 'assets/img/chicken/sky.png');
        this.game.load.image('ground', 'assets/img/chicken/ground.png');
        this.game.load.image('henHouse', 'assets/img/chicken/hen_house.png');
        this.game.load.atlasJSONHash('rooster', 'assets/img/chicken/rooster_sprite.png', 'assets/img/chicken/rooster.json');
        this.game.load.spritesheet('sun', 'assets/img/generic/sun_sprite.png', 100, 100, 25);

        // Audio
        this.game.load.audio('scream', ['assets/sound/rooster.mp3', 'assets/sound/rooster.wav'], true);
    },

    create: function() {
        this.game.state.start('ChickenState');
    }
};
