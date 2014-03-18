
Sheep = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'sheep');

    this.animations.add('stand', [0], 1, false, true);

    this.animations.play('stand', 1, false);

    // Enable input actions
    this.inputEnabled = true;
    this.events.onInputDown.add(this.playRandAnimation, this);

    // Add to game
    game.add.existing(this);
};

Sheep.prototype = Object.create(Phaser.Sprite.prototype);
Sheep.prototype.constructor = Sheep;

/**
 * Called by World.update
 */
Sheep.prototype.update = function() {
};
/**
 * Play animation
 */
Sheep.prototype.playRandAnimation = function() {
    var sound = this.game.add.audio('sheep', 1, false);
    sound.play('', 0);
};
