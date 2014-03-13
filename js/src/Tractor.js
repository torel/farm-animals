
Tractor = function(game, x, y, scale) {
    Phaser.Sprite.call(this, game, x, y, 'tractor');
    this.scale.x = this.scale.y = scale;

    this.animations.add('still', [0], 1, false, true);
    this.animations.add('drive', [0,1,2], 10, true, true);
    this.animations.add('smoke', [3,4,5], 1, false, true);

    this.animations.play('still', 1, false);
   

    // Enable input actions
    this.inputEnabled = true;
    this.events.onInputDown.add(this.playRandAnimation, this);

    // Add to game
    game.add.existing(this);
};

Tractor.prototype = Object.create(Phaser.Sprite.prototype);
Tractor.prototype.constructor = Tractor;

/**
 * Called by World.update
 */
Tractor.prototype.update = function() {
};
/**
 * Play animation
 */
Tractor.prototype.playRandAnimation = function() {
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
    this.animations.play('drive');
};