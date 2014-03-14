
Chicken = function(game, x, y, scale) {
    var that = this;

    Phaser.Sprite.call(this, game, x, y, 'chicken');
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.highPitchedPeep = this.game.add.audio('highPitchedPeep', 1, false);

    // Set rotation point
    this.anchor.setTo(0.5, 0.5);

    this.scale.x = scale;
    this.scale.y = scale;

    this.left = false;
    this.anims = [
        { name: 'walk', weight: 0.01, speed: 30, random: true, frameRate: 7, sequence: [0,1,2,3], loop: true },
        { name: 'revert', weight: 0.01, speed: 30, random: true, frameRate: 7, sequence: [0,1,2,3], loop: true  },
        { name: 'pick', weight: 0.01, speed: 0, random: true, frameRate: 10, sequence: [4,5], loop: true },
        { name: 'sleep', weight: 0.01, speed: 0, random: true, frameRate: 5, sequence: [6,7], loop: false },
        { name: 'run', weight: 0.005, speed: 150, random: false, frameRate: 20, sequence: [0,1,2,3], loop: true },
        { name: 'jump', weight: 0.01, speed: 100, random: false, frameRate: 20, sequence: [8,8,8,9,10,11,12,13,12,11,10,9,8], loop: true }
    ];

    this.anims.forEach(function(anim) {
        that.animations.add(anim.name, anim.sequence, anim.frameRate, anim.loop, true);
    });

    this.anim = this.getAnimationByName('walk');
    this.playAnimation(this.anim);

    // Enable input actions
    this.inputEnabled = true;
    this.events.onInputDown.add(this.jump, this);

    this.frameCount = 0;
    this.jumpFrameCount = 0;

    // Add to game
    game.add.existing(this);
};

Chicken.prototype = Object.create(Phaser.Sprite.prototype);
Chicken.prototype.constructor = Chicken;

/**
 * Called by World.update
 */
Chicken.prototype.update = function() {

    this.frameCount++;

    this.verifyDirection();

    if (this.anim.name === "jump") {
        this.jumpFrameCount++;
        if (this.jumpFrameCount >= 10) {
            this.jumpFrameCount = 0;
            this.frameCount = 0;
            this.playAnimation(this.getAnimationByName('run'));
        }
    }

    if (this.anim.name == "revert") {
        this.left = !this.left;
        this.anim = this.getAnimationByName('walk');
    }

    this.changeAnimationAtRandomTime();
};

Chicken.prototype.verifyDirection = function() {
    if ((this.left && this.body.velocity.x > 0) || (! this.left && this.body.velocity.x <= 0)) {
        this.body.velocity.x = this.body.velocity.x * -1;
    }
    if ((this.left && this.scale.x < 0) || (!this.left && this.scale.x > 0)) {
        this.scale.x = (-1 * this.scale.x);
    }

    // Chicken change direction at boundary
    if(this.body.x > 700 && ! this.left) {
        this.left = true;
    }
    else if(this.body.x < 50 && this.left) {
        this.left = false;
        this.body.angle = 0;
    }
};

Chicken.prototype.changeAnimationAtRandomTime = function() {
    if (this.frameCount > 20) {
        var randomNumber = Math.random();

        if (randomNumber < this.anim.weight) {
            this.playAnimation();
        }
    }
};

Chicken.prototype.jump = function() {
    this.highPitchedPeep.play();
    this.playAnimation(this.getAnimationByName('jump'));
};

Chicken.prototype.playAnimation = function(animation) {
    if (animation) {
        this.anim = animation;
    }
    else {
        this.anim = this.getRandomAnimation();
    }
    this.animations.play(this.anim.name);
    this.body.velocity.x = this.anim.speed;
    this.frameCount = 0;
};

Chicken.prototype.getRandomAnimation = function() {
    var randomNumber = Math.random();

    var key = Math.round(randomNumber * 4) - 1;
    if (key < 0) {
        key = 0;
    }
    return this.anims[key];
};

Chicken.prototype.getAnimationByName = function(name) {
    for (var i = 0; i < this.anims.length; i++) {
        if (name === this.anims[i].name) {
            return this.anims[i];
        }
    }
    return null;
};