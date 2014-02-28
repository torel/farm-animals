
Smile = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'smile');

    // Set rotation point
    this.anchor.setTo(0.5, 0.5);

    // Add to game
    game.add.existing(this);
};

Smile.prototype = Object.create(Phaser.Sprite.prototype);
Smile.prototype.constructor = Smile;

/**
 * Called by World.update
 */
Smile.prototype.update = function() {
};
