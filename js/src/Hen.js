
Hen = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'hen');

    this.animations.add('cluck', [0,1,2,1, 0,1,2,1, 0,1,2,1, 0,1,2,1, 0,1,2,1, 0,1,1,1,2,2,2,2,1,1,1,0 ,0,0,0,0,0,0,0,0,0,0, 0,1,2,1, 0,1,2,1, 0,1,2,1, 0,1,2,1, 0,1,1,1,2,2,2,2,1,1,1,0], 20, false, true);
    this.animations.add('egg', [0,0,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,6,7,8], 20, false, true);
    this.animations.add('stand', [0], 1, false, true);

    this.animations.play('stand', 1, false);

    // Enable input actions
    this.inputEnabled = true;
    this.events.onInputDown.add(this.playRandAnimation, this);

    // Add to game
    game.add.existing(this);
};

Hen.prototype = Object.create(Phaser.Sprite.prototype);
Hen.prototype.constructor = Hen;

/**
 * Called by World.update
 */
Hen.prototype.update = function() {
};
/**
 * Play animation
 */
Hen.prototype.playRandAnimation = function() {
    var rand = Math.random();
    if (rand < 0.7) {
        this.animations.play('cluck');
        var cluck = this.game.add.audio('cluck', 1, false);
        cluck.play('', 0);
    }
    else {
        this.animations.play('egg');
        var eggSound = this.game.add.audio('egg', 1, false);
        eggSound.play('', 0);
    }

};
