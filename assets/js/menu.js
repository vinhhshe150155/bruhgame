var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('menu', './assets/images/menu.png');
        game.load.audio('hasagi', './assets/sound/yasuo-hasaki_hy1D2Yb.mp3');
        game.load.audio('teemo', './assets/sound/teemo_4.mp3');
        game.load.audio('bruh', './assets/sound/movie_1.mp3');
        game.load.audio('bgr', './assets/sound/bgrsound.mp3');
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        this.add.button(0, 0, 'menu', this.startGame, this);
        hasagi = game.add.audio('hasagi');
        teemo = game.add.audio('teemo');
        bruh = game.add.audio('bruh');
        bgrsound = game.add.audio('bgr',0.3);
    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');
    

    }

};