
Sun = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'sun');

    // Set rotation point
    this.anchor.setTo(0.5, 0.5);

    // Double size
    this.scale.setTo(2, 2);

    // Add and start animation
    this.animations.add('sparkle', [0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24,24,24,24,24,24,24,24,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 7, true, true);
    this.animations.play('sparkle', 25, true);

    // Enable input actions
    this.inputEnabled = true;
    this.events.onInputDown.add(this.displaySmile,this);

    // Add to game
    game.add.existing(this);
};

Sun.prototype = Object.create(Phaser.Sprite.prototype);
Sun.prototype.constructor = Sun;

/**
 * Called by World.create
 */
Sun.prototype.create = function() {

};
/**
 * Called by World.update
 */
Sun.prototype.update = function() {
    this.angle += 0.05;
};
/**
 * Display smile on sun
 */
Sun.prototype.displaySmile = function() {

};
