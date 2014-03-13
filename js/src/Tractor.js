
Tractor = function(game, x, y, scale) {
    Phaser.Sprite.call(this, game, x, y, 'tractor');
    
    var that = this;
    
    //setting variables for Tractor
    this.scaler = scale
    this.ratio = this.game.world._container.scale.x
    this.body.velocity.x = -100;
    this.left = true;
    this.framecount = 0;
    this.playingTractorSound = false;
    this.leftBoundary = -500 * this.ratio;
    this.rightBoundary = 1100 * this.ratio;

    this.scale.x = this.scale.y = this.scaler;
    
    this.anims = [
                    {name: 'still', sequence: [0],      frameRate: 1,   loop: false},
                    {name: 'drive', sequence: [0,1,2],  frameRate: 10,  loop: true},
                    {name: 'smoke', sequence: [3,4,5],  frameRate: 10,  loop: true}

    ];

    this.anims.forEach(function(anim) {
        that.animations.add(anim.name, anim.sequence, anim.frameRate, anim.loop, true);
    });

    this.animations.play('drive');
    
    //add sounds
    this.tractorSound = this.game.add.audio('tractor', 1, false);
    this.tractorHorn    = this.game.add.audio('horn', 1, false);


    // Enable input actions
    this.inputEnabled = true;
    this.events.onInputDown.add(this.smokeAnimation, this);

    // Add to game
    game.add.existing(this);

    // Set rotation point
    this.anchor.setTo(0.5, 0);
};

Tractor.prototype = Object.create(Phaser.Sprite.prototype);
Tractor.prototype.constructor = Tractor;

/**
 * Called by World.update
 */
Tractor.prototype.update = function() {
    this.framecount++

    this.checkBoundary();
    this.findDirection();

    if (this.framecount >=100) {
        this.framecount = 0;
        this.animations.play('drive')
    }

    if (this.body.x <= this.ratio * 400 && this.body.x >= 50 * this.ratio && !this.playingTractorSound) {
        this.tractorSound.play();
        this.playingTractorSound = true;
    }


};
/**
 * Play animation
 */
Tractor.prototype.smokeAnimation = function() {
    this.framecount = 0;
    this.animations.play('smoke');
};

Tractor.prototype.findDirection = function () {
    
    if (this.left) {
        this.body.velocity.x = -100;

    } else {
        this.body.velocity.x = 100;
    }
};

Tractor.prototype.checkBoundary = function () {
    if (this.body.x < this.leftBoundary && this.left) {
        this.left = false;
        this.scale.x = (-1 * this.scale.x);
        this.playingTractorSound = false;
    } else if (this.body.x > this.rightBoundary && !this.left) {
        this.left = true;
        this.scale.x = (-1 * this.scale.x);
        this.playingTractorSound = false;
    }
};