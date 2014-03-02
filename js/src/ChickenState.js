
ChickenState = function(game) {
    this.game = game;
};

ChickenState.prototype =  {

    rooster: null,

    preload: function() {

    },

    create: function()  {
        var sky = this.game.add.sprite(-100, -100, 'sky');
        this.sun = new Sun(this.game, 650, 170);

        var ground = this.game.add.sprite(-100, 250, 'ground');
        var henHouse = this.game.add.sprite(100, 300, 'henHouse');

        this.rooster = new Rooster(this.game, 130, 150);

        this.chicken = new Chicken(this.game, 200, 460, 0.7);
        this.chicken2 = new Chicken(this.game, 650, 470, 0.75);
        this.hen = new Hen(this.game, 380, 260);

        this.chicken3 = new Chicken(this.game, 400, 530, 0.85);
    }
};