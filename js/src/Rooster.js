
Rooster = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'rooster');

    this.animations.add('scream', [0,0,1,2,1,2,1,0,1,2,2,2,2,2,2,2,2,2,2,1,0], 7, false, true);
    this.animations.add('stand', [0], 10, false, true);
    this.animations.add('sway', [3, 0, 4, 0], 1, true, true);

    this.animations.play('stand', 1, true);
    // Enable input actions
    this.inputEnabled = true;
    this.events.onInputDown.add(this.playRooster,this);

    // Add to game
    game.add.existing(this);
};

Rooster.prototype = Object.create(Phaser.Sprite.prototype);
Rooster.prototype.constructor = Rooster;

/**
 * Called by World.update
 */
Rooster.prototype.update = function() {
};
/**
 * Play rooster scream
 */
Rooster.prototype.playRooster = function() {
    this.animations.play('scream');
    var scream = this.game.add.audio('scream', 1, false);
    scream.play('', 0);
};
