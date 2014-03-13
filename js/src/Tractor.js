
Tractor = function(game, x, y, scale) {
    Phaser.Sprite.call(this, game, x, y, 'tractor');
    this.scaler = scale
    this.scale.x = this.scale.y = this.scaler;

    this.animations.add('still', [0], 1, false, true);
    this.animations.add('drive', [0,1,2], 10, true, true);
    this.animations.add('smoke', [3,4,5], 10, true, true);

    this.animations.play('still', 1, false);
    this.left = true;
    this.still = true;

    // Enable input actions
    this.inputEnabled = true;
    this.events.onInputDown.add(this.playRandAnimation, this);
    console.log(this.animations, 'thisanimation')
    // Add to game
    game.add.existing(this);
};

Tractor.prototype = Object.create(Phaser.Sprite.prototype);
Tractor.prototype.constructor = Tractor;

/**
 * Called by World.update
 */
Tractor.prototype.update = function() {

    if (this.left && !this.still) {
        this.body.velocity.x -= 1;

    } else if (!this.left && !this.still) {
        this.body.velocity.x = 100;
    }

    if (this.body.x < 10 && this.left) {
        this.left = false;
        this.scale.x = (-1 * this.scale.x);
    } else if (this.body.x > 200 && !this.left) {
        this.left = true;
        this.scale.x = (-1 * this.scale.x);
    }




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
    this.animations.play('smoke');
    this.still = false;
};