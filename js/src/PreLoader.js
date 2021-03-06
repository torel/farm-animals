
PreLoader = function(game) {
    this.game = game;
};

PreLoader.prototype = {

    preload: function() {
        // Images

        // Generic
        this.game.load.image('smile', 'assets/img/generic/smile.png');
        this.game.load.image('button', 'assets/img/generic/button.png');
        this.game.load.spritesheet('sun', 'assets/img/generic/sun_sprite.png', 100, 100, 25);
        this.game.load.image('sky', 'assets/img/generic/sky.png');
        this.game.load.image('stone', 'assets/img/generic/stone.png');

        // Chicken

        this.game.load.image('ground', 'assets/img/chicken/ground.png');
        this.game.load.image('henHouse', 'assets/img/chicken/hen_house.png');
        this.game.load.atlasJSONHash('rooster', 'assets/img/chicken/rooster_sprite.png', 'assets/img/chicken/rooster.json');
        this.game.load.spritesheet('hen', 'assets/img/chicken/hen_sprite.png', 250, 300, 9);
        this.game.load.spritesheet('chicken', 'assets/img/chicken/chicken_sprite.png', 100, 163, 14);

        // Pig
        this.game.load.image('pigGround', 'assets/img/pig/pig_background.png');
        this.game.load.image('barn', 'assets/img/pig/barn.png');
        this.game.load.image('fence', 'assets/img/generic/fence.png');
        this.game.load.atlasJSONHash('pig', 'assets/img/pig/pig_sprite_3.png', 'assets/img/pig/pig.json');
        this.game.load.spritesheet('tractor', 'assets/img/pig/tractor.png', 518, 420, 6, 0, 0);

        // Sheep
        this.game.load.image('sheepGround', 'assets/img/sheep/ground.png');
        this.game.load.spritesheet('sheep', 'assets/img/sheep/sheep_sprite.png', 240, 255, 1);

        // Audio
        this.game.load.audio('scream', ['assets/sound/rooster.mp3', 'assets/sound/rooster.wav'], true);
        this.game.load.audio('cluck', ['assets/sound/clucking.mp3', 'assets/sound/clucking.wav'], true);
        this.game.load.audio('egg', ['assets/sound/lay_egg.mp3', 'assets/sound/lay_egg.wav'], true);
        this.game.load.audio('smile', ['assets/sound/smile.mp3', 'assets/sound/smile.wav'], true);
        this.game.load.audio('highPitchedPeep', ['assets/sound/highpitched_peep.mp3', 'assets/sound/highpitched_peep.wav'], true);
        this.game.load.audio('chicks', ['assets/sound/chicks_peeping.mp3', 'assets/sound/chicks_peeping.wav'], true);
        this.game.load.audio('pigSnort', ['assets/sound/pigsnort.mp3', 'assets/sound/pigsnort.wav'], true);
        this.game.load.audio('tractor', ['assets/sound/tractor.mp3'], true);
        this.game.load.audio('horn', ['assets/sound/tractor_horn.mp3'], true);
        this.game.load.audio('sheep', ['assets/sound/sheep.mp3', 'assets/sound/sheep.wav'], true);

    },

    create: function() {
        this.game.state.start('ChickenState');
    }
};
