
Pig = function(game, x, y, scale) {
    Phaser.Sprite.call(this, game, x, y, 'pig');
    game.physics.enable(this, Phaser.Physics.ARCADE);
    
    var that = this;

    this.scaler = scale;
    this.ratio = this.game.world.scale.x;
    
    this.body.velocity.x = -100;
    this.left = true;
    this.framecount = 0;
    this.leftBoundary = 300 * this.ratio;
    this.rightBoundary = 850 * this.ratio;

    console.log('left', this.leftBoundary, 'right', this.rightBoundary)

    // Set rotation point
    this.anchor.setTo(0.5, 0.5);

    this.scale.x = this.scale.y = this.scaler;

    //add sounds
    this.pigSnort = this.game.add.audio('pigSnort', 1, false);


    this.anims = [
                    {name: 'stand',        random: true,    sound: this.pigSnort,  speed: 0,   sequence: [0],                   frameRate: 1,   loop: false},
                    {name: 'wriggleHead',  random: true,    sound: this.pigSnort,  speed: 0,   sequence: [0,23,24,23,0,25,26,25,23,24,23,0,25,26,25,0],  frameRate: 10,  loop: false},
                    {name: 'straightTail', random: true,    sound: this.pigSnort,  speed: 0,   sequence: [0,19,20,21,22,22,22,21,20,19,0],  frameRate: 10,  loop: false},
                    {name: 'walk',         random: true,    sound: this.pigSnort,  speed: 30,  sequence: [0,5,6,5,0,7,8,7],     frameRate: 20,   loop: true},
                    {name: 'run',          random: true,    sound: this.pigSnort,  speed: 100, sequence: [0,5,6,5,0,7,8,7,0],   frameRate: 60,  loop: true},
                    {name: 'jump',         random: false,   sound: this.pigSnort,  speed: 0,   sequence: [0,9,10,11,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,12,11,10,9,0],  frameRate: 20,  loop: false},
                    {name: 'sit',          random: true,    sound: this.pigSnort,  speed: 0,   sequence: [0,14,15,16,17,18],    frameRate: 20,  loop: false}/*,
                    {name: 'limp',         speed: 30,  sequence: [0,1,2,1,0,3,4,3],     frameRate: 20,  loop: true},
                    {name: 'raise',        speed: 0,   sequence: [18,17,16,15,14,0],    frameRate: 20,  loop: false}*/
    ];

    this.anims.forEach(function(anim) {
        that.animations.add(anim.name, anim.sequence, anim.frameRate, anim.loop, true);
    });

    this.currentAnim = this.getAnimationByName('walk');
    this.animations.play(this.currentAnim.name);
    this.body.velocity.x = this.currentAnim.speed;

    // Enable input actions

    this.inputEnabled = true;
    this.events.onInputDown.add(this.onClickPig, this);

    // Add to game
    game.add.existing(this);
};

Pig.prototype = Object.create(Phaser.Sprite.prototype);
Pig.prototype.constructor = Pig;

/**
 * Called by World.update
 */
Pig.prototype.update = function() {
        this.move();
};

Pig.prototype.move = function() {

        if ((this.left && this.body.velocity.x > 0) || (! this.left && this.body.velocity.x <= 0)) {
            this.body.velocity.x = this.body.velocity.x * -1;
        }
        if ((this.left && this.scale.x < 0) || (!this.left && this.scale.x > 0)) {
            this.scale.x = (-1 * this.scale.x);
        }

        // change direction at boundary
        if(this.body.x > this.rightBoundary && ! this.left) {
            this.left = true;
        }
        else if(this.body.x < this.leftBoundary && this.left) {
            this.left = false;
            this.body.angle = 0;
        }
};

Pig.prototype.getAnimationByName = function(name) {
    for (var i = 0; i < this.anims.length; i++) {
        if (name === this.anims[i].name) {
            return this.anims[i];
        }
    }
    return null;
};

/**
 * Play animation
 */
Pig.prototype.playAnimation = function(name) {

    if (!name) {
        this.getRandomAnimation();
    } else {
        this.currentAnim = this.getAnimationByName(name);
    }
    
    this.playPigSound();
    this.animations.play(this.currentAnim.name);
    this.body.velocity.x = this.currentAnim.speed;
    this.frameCount = 0;

};

Pig.prototype.playRandomAnimation = function() {
    this.currentAnim = this.getRandomAnimation();
    this.playAnimation();
    
};

Pig.prototype.onClickPig = function() {
    this.playRandomAnimation();
    this.playPigSound();
};

Pig.prototype.playPigSound = function() {
    this.currentAnim.sound.play();
};

Pig.prototype.getRandomAnimation = function() {

    var randomNumber = -1;
    
    do {
        randomNumber = Math.floor(Math.random()*this.anims.length);
    } while (randomNumber === (this.anims.indexOf(this.currentAnim)) || !this.anims[randomNumber].random)

    return this.anims[randomNumber];
};
// Pig.prototype.checkIfHeadIsClicked = function () {
//     this.defindHeadBoundries();
// }

// Pig.prototype.defindHeadBoundries = function () {

// }