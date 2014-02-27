
PreLoader = function(game) {
    this.game = game;
};

PreLoader.prototype = {

    create: function() {
        this.game.state.start('ChickenState');
    }
};
