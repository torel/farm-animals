
Pig = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'pig');

    // this.animations.add('walk', [0,5,6,5,0,7,8,7], 20, true);
    this.animations.add('stand', [0], 1, false, true);

    this.animations.play('stand', 1, false);

    // // Enable input actions
    // this.inputEnabled = true;
    // this.events.onInputDown.add(this.playRandAnimation, this);

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
    // var rand = Math.random();
    // if (rand < 0.7) {
    //     this.animations.play('cluck');
    //     var cluck = this.game.add.audio('cluck', 1, false);
    //     cluck.play('', 0);
    // }
    // else {
    //     this.animations.play('egg');
    //     var eggSound = this.game.add.audio('egg', 1, false);
    //     eggSound.play('', 0);
    // }
    // this.animations.play('walk');
};