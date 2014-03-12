
PreLoader = function(game) {
    this.game = game;
};

PreLoader.prototype = {

    preload: function() {
        // Images
        this.game.load.image('sky', 'assets/img/chicken/sky.png');
        this.game.load.image('ground', 'assets/img/chicken/ground.png');
        this.game.load.image('henHouse', 'assets/img/chicken/hen_house.png');
        this.game.load.image('smile', 'assets/img/generic/smile.png');
        this.game.load.image('button', 'assets/img/generic/button.png');
        this.game.load.atlasJSONHash('rooster', 'assets/img/chicken/rooster_sprite.png', 'assets/img/chicken/rooster.json');
        this.game.load.spritesheet('sun', 'assets/img/generic/sun_sprite.png', 100, 100, 25);
        this.game.load.spritesheet('hen', 'assets/img/chicken/hen_sprite.png', 250, 300, 9);
        this.game.load.spritesheet('chicken', 'assets/img/chicken/chicken_sprite.png', 100, 163, 14);


        this.game.load.image('pigGround', 'assets/img/pig/pig_background.png');
        this.game.load.image('barn', 'assets/img/pig/barn.png');
        this.game.load.image('water', 'assets/img/generic/water.png');
        this.game.load.image('mud', 'assets/img/generic/mud.png');
        this.game.load.image('fence', 'assets/img/generic/fence.png');
        // this.game.load.spritesheet('pig', 'assets/img/pig/pig_sprite.png', 480, 270, 27);
        // this.game.load.spritesheet('tractor', 'assets/img/pig/tractor.png', 517.17, 419, 6);


        // Audio
        this.game.load.audio('scream', ['assets/sound/rooster.mp3', 'assets/sound/rooster.wav'], true);
        this.game.load.audio('cluck', ['assets/sound/clucking.mp3', 'assets/sound/clucking.wav'], true);
        this.game.load.audio('egg', ['assets/sound/lay_egg.mp3', 'assets/sound/lay_egg.wav'], true);
        this.game.load.audio('smile', ['assets/sound/smile.mp3', 'assets/sound/smile.wav'], true);
        this.game.load.audio('highPitchedPeep', ['assets/sound/highpitched_peep.mp3', 'assets/sound/highpitched_peep.wav'], true);
        this.game.load.audio('chicks', ['assets/sound/chicks_peeping.mp3', 'assets/sound/chicks_peeping.wav'], true);
        this.game.load.audio('pigs', ['assets/sound/pigsnort.mp3', 'assets/sound/pigsnort.wav'], true);

    },

    create: function() {
        this.game.state.start('ChickenState');
    }
};
