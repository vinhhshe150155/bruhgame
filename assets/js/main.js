var game;

game = new Phaser.Game(600, 450, Phaser.AUTO, '');

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);
var hasagi;
var teemo;
var bruh;
var bgrsound;
game.state.start('Menu');
