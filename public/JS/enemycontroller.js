/**
 * Created by B00265222/MWilliams on 18/05/2017.
 */

var enemydir = 1;
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6 ,enemy7, enemy8;
var enemy9, enemy10, enemy11, enemy12, enemy13, enemy14, enemy15, enemy16;
var enemy17, enemy18 ,enemy19, enemy20, enemy21, enemy22, enemy23, enemy24;
var enemy25, enemy26, enemy27, enemy28, enemy29,enemy30, enemy31, enemy32;
var enemy33, enemy34, enemy35, enemy36, enemy37, enemy38, enemy39, enemy40;

function createEnemies(){
    enemywave1();
    enemywave2();
    enemywave3();
    enemywave4();
    enemywave5();
};

function enemywave1(){          /** Creates the First line of the Aliens */

    /***** Example of original code behind each enemy, before Constructors were developed
     *
    enemy1 = game.add.sprite(scaleRatio * 800 * 3, scaleRatio * 800 * 3, 'Enemies');
    enemy1.scale.setTo(scaleRatio * 2, scaleRatio * 2);
    enemy1.animations.add('fly1', [0, 1, 2, 3, 1]);
    enemy1.play('fly1', 10, true);
    game.physics.arcade.enable(enemy1);
    enemy1.body.bounce.set(1);
    enemy1.body.collideWorldBounds = true;
    enemy1.body.onWorldBounds = new Phaser.Signal();
    enemy1.body.onWorldBounds.add(changedir,this);
     *
     *
     */

    enemy1 = new enemy1construct(game, scaleRatio*800*3, scaleRatio*700*3);     // constructs declared in enemyconstructors.js
    enemy2 = new enemy1construct(game, scaleRatio*700*3, scaleRatio*700*3);
    enemy3 = new enemy1construct(game, scaleRatio*600*3, scaleRatio*700*3);
    enemy4 = new enemy1construct(game, scaleRatio*500*3, scaleRatio*700*3);
    enemy5 = new enemy1construct(game, scaleRatio*400*3, scaleRatio*700*3);
    enemy6 = new enemy1construct(game, scaleRatio*300*3, scaleRatio*700*3);
    enemy7 = new enemy1construct(game, scaleRatio*200*3, scaleRatio*700*3);
    enemy8 = new enemy1construct(game, scaleRatio*100*3, scaleRatio*700*3);
}   // rows of enemies seperated into seperate lines to aid in quickly scrolling through the code by hiding the code within a finished waves function
    //not really necessary anymore as the code has been condensed into the constructors

function enemywave2(){          /** Creates the second line of the Aliens */
    enemy9 = new enemy2construct(game, scaleRatio*800*3, scaleRatio*600*3);
    enemy10 = new enemy2construct(game, scaleRatio*700*3, scaleRatio*600*3);
    enemy11 = new enemy2construct(game, scaleRatio*600*3, scaleRatio*600*3);
    enemy12 = new enemy2construct(game, scaleRatio*500*3, scaleRatio*600*3);
    enemy13 = new enemy2construct(game, scaleRatio*400*3, scaleRatio*600*3);
    enemy14 = new enemy2construct(game, scaleRatio*300*3, scaleRatio*600*3);
    enemy15 = new enemy2construct(game, scaleRatio*200*3, scaleRatio*600*3);
    enemy16 = new enemy2construct(game, scaleRatio*100*3, scaleRatio* 600*3);
}

function enemywave3(){          /** Creates the third line of the Aliens */

    enemy17 = new enemy3construct(game, scaleRatio*800*3, scaleRatio*500*3);
    enemy18 = new enemy3construct(game, scaleRatio*700*3, scaleRatio*500*3);
    enemy19 = new enemy3construct(game, scaleRatio*600*3, scaleRatio*500*3);
    enemy20 = new enemy3construct(game, scaleRatio*500*3, scaleRatio*500*3);
    enemy21 = new enemy3construct(game, scaleRatio*400*3, scaleRatio*500*3);
    enemy22 = new enemy3construct(game, scaleRatio*300*3, scaleRatio*500*3);
    enemy23 = new enemy3construct(game, scaleRatio*200*3, scaleRatio*500*3);
    enemy24 = new enemy3construct(game, scaleRatio*100*3, scaleRatio* 500*3);

}

function enemywave4(){          /** Creates the fourth line of the Aliens */

    enemy25 = new enemy4construct(game, scaleRatio*800*3, scaleRatio*400*3);
    enemy26 = new enemy4construct(game, scaleRatio*700*3, scaleRatio*400*3);
    enemy27 = new enemy4construct(game, scaleRatio*600*3, scaleRatio*400*3);
    enemy28 = new enemy4construct(game, scaleRatio*500*3, scaleRatio*400*3);
    enemy29 = new enemy4construct(game, scaleRatio*400*3, scaleRatio*400*3);
    enemy30 = new enemy4construct(game, scaleRatio*300*3, scaleRatio*400*3);
    enemy31 = new enemy4construct(game, scaleRatio*200*3, scaleRatio*400*3);
    enemy32 = new enemy4construct(game, scaleRatio*100*3, scaleRatio*400*3);

}

function enemywave5() {         /** Creates the fifth line of the Aliens */

    enemy33 = new enemy5construct(game, scaleRatio*800*3, scaleRatio*300*3);
    enemy34 = new enemy5construct(game, scaleRatio*700*3, scaleRatio*300*3);
    enemy35 = new enemy5construct(game, scaleRatio*600*3, scaleRatio*300*3);
    enemy36 = new enemy5construct(game, scaleRatio*500*3, scaleRatio*300*3);
    enemy37 = new enemy5construct(game, scaleRatio*400*3, scaleRatio*300*3);
    enemy38 = new enemy5construct(game, scaleRatio*300*3, scaleRatio*300*3);
    enemy39 = new enemy5construct(game, scaleRatio*200*3, scaleRatio*300*3);
    enemy40 = new enemy5construct(game, scaleRatio*100*3, scaleRatio*300*3);

}

function moveEnemies(){         //I attempted to integrate this into the constructors however it simply broke the constructors



    switch(enemydir){
        case 1:
            enemy1.body.velocity.x =  +enemyspeed;      //set velocity of all enemies
            enemy2.body.velocity.x =  +enemyspeed;
            enemy3.body.velocity.x =  +enemyspeed;
            enemy4.body.velocity.x =  +enemyspeed;
            enemy5.body.velocity.x =  +enemyspeed;
            enemy6.body.velocity.x =  +enemyspeed;
            enemy7.body.velocity.x =  +enemyspeed;
            enemy8.body.velocity.x =  +enemyspeed;
            enemy9.body.velocity.x =  +enemyspeed;
            enemy10.body.velocity.x =  +enemyspeed;
            enemy11.body.velocity.x =  +enemyspeed;
            enemy12.body.velocity.x =  +enemyspeed;
            enemy13.body.velocity.x =  +enemyspeed;
            enemy14.body.velocity.x =  +enemyspeed;
            enemy15.body.velocity.x =  +enemyspeed;
            enemy16.body.velocity.x =  +enemyspeed;
            enemy17.body.velocity.x =  +enemyspeed;
            enemy18.body.velocity.x =  +enemyspeed;
            enemy19.body.velocity.x =  +enemyspeed;
            enemy20.body.velocity.x =  +enemyspeed;
            enemy21.body.velocity.x =  +enemyspeed;
            enemy22.body.velocity.x =  +enemyspeed;
            enemy23.body.velocity.x =  +enemyspeed;
            enemy24.body.velocity.x =  +enemyspeed;
            enemy25.body.velocity.x =  +enemyspeed;
            enemy26.body.velocity.x =  +enemyspeed;
            enemy27.body.velocity.x =  +enemyspeed;
            enemy28.body.velocity.x =  +enemyspeed;
            enemy29.body.velocity.x =  +enemyspeed;
            enemy30.body.velocity.x =  +enemyspeed;
            enemy31.body.velocity.x =  +enemyspeed;
            enemy32.body.velocity.x =  +enemyspeed;
            enemy33.body.velocity.x =  +enemyspeed;
            enemy34.body.velocity.x =  +enemyspeed;
            enemy35.body.velocity.x =  +enemyspeed;
            enemy36.body.velocity.x =  +enemyspeed;
            enemy37.body.velocity.x =  +enemyspeed;
            enemy38.body.velocity.x =  +enemyspeed;
            enemy39.body.velocity.x =  +enemyspeed;
            enemy40.body.velocity.x =  +enemyspeed;
            break;
        case 2:
            enemy1.body.velocity.x =  -enemyspeed;
            enemy2.body.velocity.x =  -enemyspeed;
            enemy3.body.velocity.x =  -enemyspeed;
            enemy4.body.velocity.x =  -enemyspeed;
            enemy5.body.velocity.x =  -enemyspeed;
            enemy6.body.velocity.x =  -enemyspeed;
            enemy7.body.velocity.x =  -enemyspeed;
            enemy8.body.velocity.x =  -enemyspeed;
            enemy9.body.velocity.x =  -enemyspeed;
            enemy10.body.velocity.x =  -enemyspeed;
            enemy11.body.velocity.x =  -enemyspeed;
            enemy12.body.velocity.x =  -enemyspeed;
            enemy13.body.velocity.x =  -enemyspeed;
            enemy14.body.velocity.x =  -enemyspeed;
            enemy15.body.velocity.x =  -enemyspeed;
            enemy16.body.velocity.x =  -enemyspeed;
            enemy17.body.velocity.x =  -enemyspeed;
            enemy18.body.velocity.x =  -enemyspeed;
            enemy19.body.velocity.x =  -enemyspeed;
            enemy20.body.velocity.x =  -enemyspeed;
            enemy21.body.velocity.x =  -enemyspeed;
            enemy22.body.velocity.x =  -enemyspeed;
            enemy23.body.velocity.x =  -enemyspeed;
            enemy24.body.velocity.x =  -enemyspeed;
            enemy25.body.velocity.x =  -enemyspeed;
            enemy26.body.velocity.x =  -enemyspeed;
            enemy27.body.velocity.x =  -enemyspeed;
            enemy28.body.velocity.x =  -enemyspeed;
            enemy29.body.velocity.x =  -enemyspeed;
            enemy30.body.velocity.x =  -enemyspeed;
            enemy31.body.velocity.x =  -enemyspeed;
            enemy32.body.velocity.x =  -enemyspeed;
            enemy33.body.velocity.x =  -enemyspeed;
            enemy34.body.velocity.x =  -enemyspeed;
            enemy35.body.velocity.x =  -enemyspeed;
            enemy36.body.velocity.x =  -enemyspeed;
            enemy37.body.velocity.x =  -enemyspeed;
            enemy38.body.velocity.x =  -enemyspeed;
            enemy39.body.velocity.x =  -enemyspeed;
            enemy40.body.velocity.x =  -enemyspeed;
            break;
    }

    if(advancetimer == 0){
        advancetimer = advancespeed;    //reset the advance timer and move the enemies closer to the player
        enemy1.y += +enemyspeed/4;
        enemy2.y += +enemyspeed/4;
        enemy3.y += +enemyspeed/4;
        enemy4.y += +enemyspeed/4;
        enemy5.y += +enemyspeed/4;
        enemy6.y += +enemyspeed/4;
        enemy7.y += +enemyspeed/4;
        enemy8.y += +enemyspeed/4;
        enemy9.y += +enemyspeed/4;
        enemy10.y += +enemyspeed/4;
        enemy11.y += +enemyspeed/4;
        enemy12.y += +enemyspeed/4;
        enemy13.y += +enemyspeed/4;
        enemy14.y += +enemyspeed/4;
        enemy15.y += +enemyspeed/4;
        enemy16.y += +enemyspeed/4;
        enemy17.y += +enemyspeed/4;
        enemy18.y += +enemyspeed/4;
        enemy19.y += +enemyspeed/4;
        enemy20.y += +enemyspeed/4;
        enemy21.y += +enemyspeed/4;
        enemy22.y += +enemyspeed/4;
        enemy23.y += +enemyspeed/4;
        enemy24.y += +enemyspeed/4;
        enemy25.y += +enemyspeed/4;
        enemy26.y += +enemyspeed/4;
        enemy27.y += +enemyspeed/4;
        enemy28.y += +enemyspeed/4;
        enemy29.y += +enemyspeed/4;
        enemy30.y += +enemyspeed/4;
        enemy31.y += +enemyspeed/4;
        enemy32.y += +enemyspeed/4;
        enemy33.y += +enemyspeed/4;
        enemy34.y += +enemyspeed/4;
        enemy35.y += +enemyspeed/4;
        enemy36.y += +enemyspeed/4;
        enemy37.y += +enemyspeed/4;
        enemy38.y += +enemyspeed/4;
        enemy39.y += +enemyspeed/4;
        enemy40.y += +enemyspeed/4;
    }

}

function changedir() {


    if (directiontimer == 0) {    //timer ensures this is run only once when multiple enemies collide with the world border simultaneously
        switch (enemydir) {
            case 1:
                enemydir = 2;       //make the enemies move in the opposite direction
                directiontimer = 50; // reset the direction timer
                break;
            case 2:
                enemydir = 1;
                directiontimer = 50;
                break;
        }
    }

}

    /*******     Original code for changing enemy direction, caused bug where second collision wasn't being detected and broke the game   *************
    if(enemydir = 1){
        enemydir=2
    }else if (enemydir = 2) {
        enemydir=1
    }


     **********  Original collision code for when a bullet collided with a enemy   ******************
    switch(ene){
        case enemy1:
            enemy1.loadTexture('Explosion');
            enemy1.animations.add('boom', [0, 1, 2, 3, 4, 5]);
            enemy1.play('boom', 10, false, true);
            break;
        case enemy2:
            enemy2.loadTexture('Explosion');
            enemy2.animations.add('boom', [0, 1, 2, 3, 4, 5]);
            enemy2.play('boom', 10, false, true);
            break;
        case...
    }
    **/


