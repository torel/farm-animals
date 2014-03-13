
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
                    {name: 'stand',         sequence: [0],  frameRate: 1,   loop: false},
                    {name: 'walk',          sequence: [0,5,6,5,0,7,8,7],  frameRate: 20,   loop: true},
                    {name: 'run',           sequence: [0,5,6,5,0,7,8,7,0],  frameRate: 60,  loop: true},
                    {name: 'wriggleHead',   sequence: [0,23,24,23,0,25,26,25,23,24,23,0,25,26,25,0],  frameRate: 10,  loop: false},
                    {name: 'straightTail',  sequence: [0,19,20,21,22,22,22,21,20,19,0],  frameRate: 10,  loop: false},
                    {name: 'jump',          sequence: [0,9,10,11,12,13,13,13,13,13,13,13,13,13,12,11,10,9,0],  frameRate: 20,  loop: false},
                    {name: 'limp',          sequence: [0,1,2,1,0,3,4,3],  frameRate: 20,  loop: true},
                    {name: 'sit',           sequence: [0,14,15,16,17,18],  frameRate: 20,  loop: false},
                    {name: 'raise',         sequence: [18,17,16,15,14,0],  frameRate: 20,  loop: false}

    ];

    this.anims.forEach(function(anim) {
        that.animations.add(anim.name, anim.sequence, anim.frameRate, anim.loop, true);
    });

    this.animations.play('walk');

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