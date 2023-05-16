/**
 * Created by B00265222/MWilliams on 16/05/2017.
 */

/**
 *  TODO:
 *  1 - Fully Functional game -- In Progress
 *  1.1 - Basic Prototype -- Complete
 *  1.2 - Full Functional game -- Complete
 *  1.3 - Database integration -- in progress
 *
 *  2 - Player Controller -- Complete
 *  2.1 - player touch controls -- Complete
 *  2.2 - player shooting -- Complete
 *  2.3 - player death -- Complete
 *  2.4 - player Lives -- complete
 *
 *  3 - Alien AI constructor/controller -- Complete
 *  3.1 - Alien Constructor -- Complete
 *  3.2 - Alien Movement -- Complete
 *  3.3 - Alien Firing Mechanism -- Complete
 *  3.4 - Alien Death -- Complete
 *  3.5 - Alien Advancement -- Complete
 *  3.6 - Alien Boss Appearance -- Completed
 *  3.7 - Alien Boss Movement -- Complete
 *  3.8 - Alien Boss Death -- Complete
 *  3.9 - Alien Boss Reset -- Complete
 *
 *  4 - Score Calculator -- Complete
 *
 *  5 - High totalScore list -- Complete
 *  5.1 - link Firebase Database to game -- Complete
 *  5.2 - allow pushing to database from game -- Complete
 *  5.3 - allow recieving data from database for game -- Complete
 *  5.4 - Display recieved data in an ordered list -- Functional, Not pretty
 *
 *  6 - Failure conditions -- Complete
 *
 *  7 - 'victory' conditions -- Complete
 * @type {any}
 */

var winW = $(window).width();
var winH = $(window).height();

var w =true;
var ust = 50; //update start timer, to designate when specified code in the update should begin running
var directiontimer = 0 ;
var bullettimer = 0;
var advancetimer = 1000;
var advancespeed;
var lives = 3;
var gameovertimer = 100;
var livestext, gameovertext, bossspawn,bossspeed, wavekilled, bscollbarrier;
var enemyspeed;

var Level1 = function(game){
    console.log("Starting the game");
    console.log(scaleRatio);
};


var player , boss , bullet , barrier;
var moveleft , moveright , fire;

var totalScore = 0;
var scoretext;

Level1.prototype = {

    preload: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.refresh();

        //fill preloader with games assets
        game.load.spritesheet('Enemies', 'Res/Invaders_Enemies.png', 32*3, 32*3);
        game.load.spritesheet('Boss', 'Res/Invaders_Boss.png', 64*3 ,32*3);
        game.load.spritesheet('Player', 'Res/Invaders_Ship.png', 32*3, 32*3);
        game.load.spritesheet('Bullets', 'Res/Invaders_Bullets.png', 8*3,8*3);
        game.load.spritesheet('Barrier', 'Res/Invaders_Barrier.png', 64*3, 32*3);
        game.load.spritesheet('Explosion', 'Res/Invaders_Explosion.png', 33*3, 33*3);
        game.load.spritesheet('Buttons', 'Res/Invaders_Buttons.png', 32*3, 32*3);

    },



    create: function () {
        game.stage.backgroundColor = "#000000";

        enemyspeed = scaleRatio * 400;

        directiontimer = 0 ;            //set these variables in on create so that if the player fails and clicks start again,
        gameovertimer = 100;            //the variables from the previous game will not still be present and in effect.
        bullettimer = 0;
        wavekilled = 0;
        advancespeed = 1000;
        advancetimer = advancespeed;
        lives = 3;
        totalScore = 0;
        ust = 50;
        bossactivetimer = 50;
        bossspeed = scaleRatio*700;
        bossspawn = game.rnd.integerInRange(1000,5000);

        if(w == true) {
            barrier = game.add.sprite(0, scaleRatio * 1200 * 3, 'Barrier');     //creates the barrier for checking if the aliens have reached the player for failure conditions
            barrier.scale.setTo(scaleRatio * 100, scaleRatio * 3);
            barrier.alpha = 0.2;

            bscollbarrier = game.add.sprite(window.innerWidth * window.devicePixelRatio + 700, scaleRatio * 55 * 3, 'Barrier');

            player = game.add.sprite(game.world.centerX, scaleRatio * 1300 * 3, 'Player');
            player.scale.setTo(scaleRatio * 3, scaleRatio * 3);
            player.anchor.x = 0.5;
            player.anchor.y = 0.5;

            boss = game.add.sprite(-scaleRatio*100*3, scaleRatio * 55 * 3, 'Boss');
            boss.scale.setTo(scaleRatio * 3, scaleRatio * 3);
            boss.anchor.x = 0.5;
            boss.anchor.y = 0.5;

            bullet = game.add.sprite(-500, -500, 'Bullets');
            bullet.scale.setTo(scaleRatio * 3, scaleRatio * 3);

            moveright = game.add.sprite(game.world.centerX + (scaleRatio * 850), game.world.centerY + (scaleRatio * 1900), 'Buttons', 0);
            moveright.scale.setTo(scaleRatio * 5, scaleRatio * 5);

            moveleft = game.add.sprite(game.world.centerX + (scaleRatio * 350), game.world.centerY + (scaleRatio * 1900), 'Buttons', 1);
            moveleft.scale.setTo(scaleRatio * 5, scaleRatio * 5);

            fire = game.add.sprite(game.world.centerX - (scaleRatio * 1350), game.world.centerY + (scaleRatio * 1900), 'Buttons', 2);
            fire.scale.setTo(scaleRatio * 5, scaleRatio * 5);
        } // create & scale singular Sprites

        scoretext = game.add.text(scaleRatio*10, scaleRatio*10, 'Score: 0', {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"}); //display the totalScore text on the screen
        livestext = game.add.text(game.world.centerX+scaleRatio*10, scaleRatio*10, 'Lives: 3', {font: "200px Arial", fontSize: scaleRatio*200, fill: "#ffffff", align: "center"}); //display the totalScore text on the screen

        if(w == true) {
            boss.animations.add('bossani', [0, 1, 2]);
            player.animations.add('idle', [0, 1]);
            player.animations.add('right', [2, 3]);
            player.animations.add('left', [4, 5]);
            bullet.animations.add('playerbullet', [0, 1]);
            boss.animations.play('bossani', 10, true);
            player.animations.play('idle', 15, true);
            bullet.animations.play('playerbullet', 10, true);
        } // Add & play Animations


        createEnemies(); // create the enemies that the player needs to destroy (enemycontroller.js)

        game.physics.arcade.enable([player,boss,bullet,barrier, bscollbarrier]); //enable physics on these objects

        player.body.collideWorldBounds = true;

        bscollbarrier.body.immovable = true;

        moveright.inputEnabled=true;
        moveleft.inputEnabled=true;
        fire.inputEnabled=true;

        game.input.keyboard.addKeyCapture([//ensure these key do not interact with the browser itself when in use for the game
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.SPACEBAR
        ])

    },

    update: function () {

        if(advancetimer >= 1) {         //reduce the advance timer to advance the aliens at appropriate timeframes
            advancetimer--;
        }   if (directiontimer >=1){        //reduce the changedir timer to ensure they can change direction when they hit the next wall.
            directiontimer--
        }   if (bullettimer > 0){          //same as above for the bullet timer to ensure you can only fire once every so often
            bullettimer--
        }
        scoretext.setText('Score: ' + totalScore);   //set the totalScore text to the correct totalScore
        livestext.setText('Lives: ' + lives);   //set the Lives text to the correct lives


        if (lives <= 0){

            gameovertext = game.add.text(player.x, player.y - (scaleRatio * 1900),"GAME OVER",{font: "200px Arial", fontSize: scaleRatio*400, fill: "#ff0000", align: "center"});
            gameovertext.anchor.x = 0.5;
            gameovertext.anchor.y = 0.5;
            bullettimer = 99999;//disable the firing mechanism
            advancetimer = 99999;//disable enemy advancement

            boss.body.velocity.x = 0;
            enemy1.body.velocity.x =  0;        //stop the enemies from moving
            enemy2.body.velocity.x =  0;
            enemy3.body.velocity.x =  0;
            enemy4.body.velocity.x =  0;
            enemy5.body.velocity.x =  0;
            enemy6.body.velocity.x =  0;
            enemy7.body.velocity.x =  0;
            enemy8.body.velocity.x =  0;
            enemy9.body.velocity.x =  0;
            enemy10.body.velocity.x =  0;
            enemy11.body.velocity.x =  0;
            enemy12.body.velocity.x =  0;
            enemy13.body.velocity.x =  0;
            enemy14.body.velocity.x =  0;
            enemy15.body.velocity.x =  0;
            enemy16.body.velocity.x =  0;
            enemy17.body.velocity.x =  0;
            enemy18.body.velocity.x =  0;
            enemy19.body.velocity.x =  0;
            enemy20.body.velocity.x =  0;
            enemy21.body.velocity.x =  0;
            enemy22.body.velocity.x =  0;
            enemy23.body.velocity.x =  0;
            enemy24.body.velocity.x =  0;
            enemy25.body.velocity.x =  0;
            enemy26.body.velocity.x =  0;
            enemy27.body.velocity.x =  0;
            enemy28.body.velocity.x =  0;
            enemy29.body.velocity.x =  0;
            enemy30.body.velocity.x =  0;
            enemy31.body.velocity.x =  0;
            enemy32.body.velocity.x =  0;
            enemy33.body.velocity.x =  0;
            enemy34.body.velocity.x =  0;
            enemy35.body.velocity.x =  0;
            enemy36.body.velocity.x =  0;
            enemy37.body.velocity.x =  0;
            enemy38.body.velocity.x =  0;
            enemy39.body.velocity.x =  0;
            enemy40.body.velocity.x =  0;


            if(gameovertimer == 0){
                window.localStorage.setItem("score",totalScore);
                window.open("submitScore.html");      //Load the highscore submission page.
                game.state.start('menu');           //take the player to the menu

            }else {
                gameovertimer--
            }

        }

        if (wavekilled == 40 ){
            createEnemies();
            wavekilled = 0;
            enemyspeed += (enemyspeed/2);
            if(advancespeed > 100){ advancespeed-=50; } else if (advancespeed > 10) {advancespeed-=5} else {advancespeed = advancespeed};    //reduce the advancetimer speeding up how much the enemies advance
            advancetimer = advancespeed;
        }


        if(ust <= 0 && lives > 0){ //when the update start timer hits 0 begin the game before this number reaches 0, the player controls input will do nothing, the enemies will not move and bullet collision will not be detected

            playercontrols();       //check the players controls for input (playercontroller.js)
            moveEnemies();          //set the velocity of the enemies (enemycontroller.js

            if(bossspawn == 0){boss.body.velocity.x = +bossspeed;} else {bossspawn--;}  //check if the bossspawn counter is equal to zero if it is start moving the boss, otherwise decrease the counter by 1;

            game.physics.arcade.collide(bullet,boss, bosscollision, null, this);    //detect collision between the player's bullet and the boss and call the relevant function
            game.physics.arcade.collide(bscollbarrier,boss, bossoob, null, this);   //detect collision between the out of bounds barrier and the boss and call the relevant function
        } else if (ust >=1){
            ust--;      //decrease the update start timer
        }



    }
};



