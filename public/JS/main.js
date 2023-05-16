/**
 * Created by B00265222/MWilliams on 15/05/2017.
 */

var scaleRatio = window.devicePixelRatio / 3;

//var database = firebase.database();

var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio ,Phaser.CANVAS,'APMDInvaders');

//getDBData();
//writeUserData();

game.state.add('menu', MainMenu);
game.state.add('game', Level1);
game.state.add('credits', Credits);


game.state.start('menu');
