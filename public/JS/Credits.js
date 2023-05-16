/**
 * Created by B00265222/MWilliams on 15/05/2017.
 */

var winW = $(window).width();
var winH = $(window).height();

var Credits = function(game){
    console.log("Starting the game");
};

Credits.prototype = {
    preload: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.refresh();

    },

    create: function () {

        game.stage.backgroundColor = "#000000";

        var title = game.add.text(game.world.centerX, scaleRatio*700, "Credits",{font: "500px Arial", fontSize: scaleRatio*500, fill: "#ffffff", align: "center"});
        title.anchor.setTo(0.5,0.5);

        var score1text1 = game.add.text(500,game.world.centerY+scaleRatio+450,"Art:", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});
        var score1text2 = game.add.text(920,game.world.centerY+scaleRatio+410,"Mark Williams", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});
        var score1text3 = game.add.text(920,game.world.centerY+scaleRatio+570,"  B00265222", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});

        var score1text1 = game.add.text(340,game.world.centerY+scaleRatio+120,"Code:", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});
        var score1text2 = game.add.text(920,game.world.centerY+scaleRatio+70,"Mark Williams", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});
        var score1text3 = game.add.text(920,game.world.centerY+scaleRatio+240,"  B00265222", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});

        var score1text1 = game.add.text(100,game.world.centerY+scaleRatio-420,"Buttons:", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});
        var score1text2 = game.add.text(900,game.world.centerY+scaleRatio-420,"DaButtonFactory", {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"});

        var backButton = game.add.sprite(game.world.centerX,game.world.centerY+(scaleRatio*2000), 'back');
        backButton.scale.setTo(scaleRatio*9, scaleRatio*9);
        backButton.anchor.setTo(0.5,0.5);

        backButton.inputEnabled = true;

        backButton.events.onInputDown.add(backlistener,this);
    },

    update: function () {
    }
};

function backlistener() {
    console.log("button clicked");
    game.state.start('menu')
}