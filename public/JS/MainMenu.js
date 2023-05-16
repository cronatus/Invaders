/**
 * Created by B00265222/MWilliams on 15/05/2017.
 */

var winW = $(window).width();
var winH = $(window).height();

var MainMenu = function(game){
    console.log("Starting the game");
};

MainMenu.prototype = {
    preload: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.refresh();

        //fill preloader with games assets
        game.load.image('start', 'Res/button_start.png');
        game.load.image('credits', 'Res/button_credits.png');
        game.load.image('highscorebutt', 'Res/button_high-scores.png');
        game.load.image('back', 'Res/button_back.png');
        game.load.spritesheet('Enemies', 'Res/Invaders_Enemies.png', 32*3, 32*3);
        game.load.spritesheet('Boss', 'Res/Invaders_Boss.png', 64*3 ,32*3);



    },

    create: function () {

        game.stage.backgroundColor = "#000000";

        var title1 = game.add.text(game.world.centerX, scaleRatio*300, "Space",{font: "500px Arial", fontSize: scaleRatio*500, fill: "#ffffff", align: "center"});
        title1.anchor.setTo(0.5,0.5);
        var title2 = game.add.text(game.world.centerX, scaleRatio*700, "Invaders",{font: "500px Arial", fontSize: scaleRatio*500, fill: "#ffffff", align: "center"});
        title2.anchor.setTo(0.5,0.5);

        var ene1 = game.add.sprite(game.world.centerX-500, game.world.centerY+scaleRatio+540, 'Enemies', 0);
        ene1.scale.setTo(scaleRatio*3, scaleRatio*3);
        ene1.anchor.setTo(0.5,0.5);
        var ene1text = game.add.text(game.world.centerX - 200,game.world.centerY+scaleRatio+420,"= 10 points", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});

        var ene2 = game.add.sprite(game.world.centerX-500, game.world.centerY+scaleRatio+230, 'Enemies', 5);
        ene2.scale.setTo(scaleRatio*3, scaleRatio*3);
        ene2.anchor.setTo(0.5,0.5);
        var ene2text = game.add.text(game.world.centerX - 200,game.world.centerY+scaleRatio+100,"= 20 points", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});

        var ene3 = game.add.sprite(game.world.centerX-500, game.world.centerY+scaleRatio-130, 'Enemies', 9);
        ene3.scale.setTo(scaleRatio*3, scaleRatio*3);
        ene3.anchor.setTo(0.5,0.5);
        var ene3text = game.add.text(game.world.centerX - 200,game.world.centerY+scaleRatio-200,"= 30 points", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});

        var ene4 = game.add.sprite(game.world.centerX-500, game.world.centerY+scaleRatio-440, 'Enemies', 12);
        ene4.scale.setTo(scaleRatio*3, scaleRatio*3);
        ene4.anchor.setTo(0.5,0.5);
        var ene4text = game.add.text(game.world.centerX - 200,game.world.centerY+scaleRatio-500,"= 40 points", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});

        var ene5 = game.add.sprite(game.world.centerX-500, game.world.centerY+scaleRatio-740, 'Enemies', 16);
        ene5.scale.setTo(scaleRatio*3, scaleRatio*3);
        ene5.anchor.setTo(0.5,0.5);
        var ene5text = game.add.text(game.world.centerX - 200,game.world.centerY+scaleRatio-800,"= 50 points", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});

        var ene6 = game.add.sprite(game.world.centerX-500, game.world.centerY+scaleRatio-1040, 'Boss', 0);
        ene6.scale.setTo(scaleRatio*3, scaleRatio*3);
        ene6.anchor.setTo(0.5,0.5);
        var ene6text = game.add.text(game.world.centerX - 200,game.world.centerY+scaleRatio-1100,"= 100 points", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});


        var verstext = game.add.text(0,0,"V:0.9", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});


        var startButton = game.add.sprite(game.world.centerX,game.world.centerY+(scaleRatio*1200), 'start');
        startButton.scale.setTo(scaleRatio*9, scaleRatio*9);
        startButton.anchor.setTo(0.5,0.5);

        var highscoreButton = game.add.sprite(game.world.centerX,game.world.centerY+(scaleRatio*1600), 'highscorebutt');
        highscoreButton.scale.setTo(scaleRatio*9, scaleRatio*9);
        highscoreButton.anchor.setTo(0.5,0.5);

        var creditsButton = game.add.sprite(game.world.centerX,game.world.centerY+(scaleRatio*2000), 'credits');
        creditsButton.scale.setTo(scaleRatio*9, scaleRatio*9);
        creditsButton.anchor.setTo(0.5,0.5);

        startButton.inputEnabled = true;
        creditsButton.inputEnabled = true;
        highscoreButton.inputEnabled = true;

        startButton.events.onInputDown.add(Startlistener,this);
        creditsButton.events.onInputDown.add(creditslistener,this);
        highscoreButton.events.onInputDown.add(highScorelistener,this);
    },

    update: function () {
    }
};

function Startlistener() {
    console.log("button clicked");
    game.state.start('game')
}

function creditslistener() {
    console.log("button clicked");
    game.state.start('credits')
}

function highScorelistener() {
    console.log("button clicked");
    window.open("highScore.html")
}