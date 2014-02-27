
Boot = function (game) {
    this.game = game;
};

Boot.prototype = {

    getRatio: function (type, w, h) {

        var width = window.innerWidth; // navigator.isCocoonJS ? window.innerWidth : w;
        var height = window.innerHeight; //navigator.isCocoonJS ? window.innerHeight : h;

        var dips = window.devicePixelRatio;
        width = width * dips;
        height = height * dips;

        console.log("width: " + width);
        console.log("height: " + height);

        var scaleX = width / w,
            scaleY = height / h,
            result = {
                x: 1,
                y: 1
            };

        switch (type) {
            case 'all':
                result.x = scaleX > scaleY ? scaleY : scaleX;
                result.y = scaleX > scaleY ? scaleY : scaleX;
                break;
            case 'fit':
                result.x = scaleX > scaleY ? scaleX : scaleY;
                result.y = scaleX > scaleY ? scaleX : scaleY;
                break;
            case 'fill':
                result.x = scaleX;
                result.y = scaleY;
                break;
        }

        return result;
    },

    setupScaling: function () {

        var ratio = this.getRatio('all', 800, 600);
        console.log("X: " + ratio.x + "Y: " + ratio.y);

        this.game.world._container.scale.x = ratio.x;
        this.game.world._container.scale.y = ratio.y;
        this.game.world._container.updateTransform();
        /*
        if (navigator.isCocoonJS) {

            var ratio = this.getRatio('fill', 800, 600);
            console.log(ratio);

            this.game.world._container.scale.x = ratio.x;
            this.game.world._container.scale.y = ratio.y;
            this.game.world._container.updateTransform();

            //this.game.world.scale.x = ratio.x;
            //this.game.world.scale.y = ratio.y;
            //this.game.world.updateTransform();
        }
        else {
            if (this.game.device.desktop) {
                this.game.stage.scale.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
                this.game.stage.scale.pageAlignHorizontally = true;
                this.game.stage.scale.pageAlignVertically = true;
                this.game.stage.scale.setScreenSize(true);
            }
            else {
                this.game.stage.scale.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
                this.game.stage.scale.pageAlignHorizontally = true;
                this.game.stage.scale.pageAlignVertically = true;
                this.game.stage.scale.forceOrientation(false, true, 'orientation');
                this.game.stage.scale.setScreenSize(true);
            }
        }

        this.game.world.setBounds(0, 0, 800, 600);
        */
    },


    create: function () {
        this.setupScaling();
        this.game.state.start('PreLoader');
    }

};