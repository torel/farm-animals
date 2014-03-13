
Pig = function(game, x, y, scale) {
    Phaser.Sprite.call(this, game, x, y, 'pig');


    var that = this;

    this.scaler = scale
    this.ratio = this.game.world._container.scale.x
    this.body.velocity.x = -100;
    this.left = true;
    this.framecount = 0;
    this.leftBoundary = 50 * this.ratio;
    this.rightBoundary = 950 * this.ratio;

    this.scale.x = this.scale.y = this.scaler;
    
    this.anims = [
                    {name: 'stand',         sequence: [],  frameRate: 1,   loop: true},
                    {name: 'walk',          sequence: [],  frameRate: 1,   loop: true},
                    {name: 'run',           sequence: [],  frameRate: 10,  loop: true},
                    {name: 'wriggleHead',   sequence: [],  frameRate: 10,  loop: true},
                    {name: 'straightTail',  sequence: [],  frameRate: 10,  loop: true},
                    {name: 'jump',          sequence: [],  frameRate: 10,  loop: true},
                    {name: 'limp',          sequence: [],  frameRate: 10,  loop: true},
                    {name: 'sit',           sequence: [],  frameRate: 10,  loop: true}

    ];

    this.anims.forEach(function(anim) {
        that.animations.add(anim.name, anim.sequence, anim.frameRate, anim.loop, true);
    });

    this.animations.play('drive');

    // Enable input actions
    this.inputEnabled = true;
    this.events.onInputDown.add(this.playRandAnimation, this);

    // Add to game
    game.add.existing(this);
};

Pig.prototype = Object.create(Phaser.Sprite.prototype);
Pig.prototype.constructor = Pig;

/**
 * Called by World.update
 */
Pig.prototype.update = function() {

};
/**
 * Play animation
 */
Pig.prototype.playRandAnimation = function() {


};