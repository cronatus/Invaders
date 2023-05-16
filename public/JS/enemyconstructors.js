/**
 * Created by B00265222/MWilliams on 19/05/2017.
 */


var enemy1construct, enemy2construct, enemy3construct, enemy4construct, enemy5construct;

/*********************       Enemy Constructor 1       *************************/

enemy1construct = function (game, x, y){
    Phaser.Sprite.call(this, game, x, y, "Enemies");    //Call the sprite to be used for this object
    this.scale.setTo(scaleRatio * 2, scaleRatio * 2);   //Set its scale appropriately
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.animations.add('fly', [0, 1, 2, 3]);           //Add the sprites animation
    this.play('fly', 10, true);                         //Play the animation
    game.add.existing(this);                            //Add this object to the game

    this.game.physics.arcade.enable(this);              //Enable arcade physics on the object
    this.body.collideWorldBounds = true;                //Make this object collide with the world bounds
    this.body.onWorldBounds = new Phaser.Signal();      //When it collides with world bounds create a signal
    this.body.onWorldBounds.add(changedir,this);        //and call this function

    this.shoot = game.rnd.integerInRange(300,1400);     //set the shoot timer

    this.canshoot = false;   //to inform the object whether it is allowed to shoot or not, essentially a check to see if it is alive or not as the objects update continues to run after it is killed.

};

enemy1construct.prototype = Object.create(Phaser.Sprite.prototype);
enemy1construct.prototype.constructor = enemy1construct;

enemy1construct.prototype.update = function(){          //Internal update function for the object, run whenever the games update function is run
    game.physics.arcade.collide(bullet,this, this.death, null, this);       //Detect collision between this object and the players bullet
    game.physics.arcade.collide(barrier,this, this.breach, null, this);     //Detect collision between this object and the Planet barrier

    this.shoot--;       //decrease the shoot timer
    if(this.shoot == 0 && this.canshoot == true){   //if the shoot timer hits 0 and this object can shoot create a enemy bullet and reset the shoot timer
        new enemybulletconstruct(game, this.x, this.y);
        this.shoot = game.rnd.integerInRange(300,2000);
    }

    if (lives == 0){this.shoot  = 999999;}          // if the player runs out of lives set the shoot timer to a high number to stop it playing before it resets to the main menu

};

enemy1construct.prototype.breach = function (enem, barrier){    console.log("endgame called");     player.reset(game.world.centerX, scaleRatio * 1300 * 3);    lives = 0;  };

enemy1construct.prototype.death = function (bullet, enem) {
    bullet.body.x = -500;
    bullet.body.y = -500;
    bullettimer = 5;
    new explosionconstruct(game, this.x, this.y);
    this.kill();
    totalScore += 10;
    this.canshoot = false;
    wavekilled += 1;

};

/*********************       Enemy Constructor 2       *************************/

enemy2construct = function (game, x, y){
    Phaser.Sprite.call(this, game, x, y, "Enemies");
    this.scale.setTo(scaleRatio * 2, scaleRatio * 2);
    this.anchor.x = 0.4;
    this.anchor.y = 0.5;
    this.animations.add('fly', [4, 5, 6, 7]);
    this.play('fly', 10, true);
    game.add.existing(this);

    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.onWorldBounds = new Phaser.Signal();
    this.body.onWorldBounds.add(changedir,this);

    this.shoot = game.rnd.integerInRange(300,2000);

    this.canshoot = true;


};

enemy2construct.prototype = Object.create(Phaser.Sprite.prototype);
enemy2construct.prototype.constructor = enemy2construct;

enemy2construct.prototype.update = function(){

    game.physics.arcade.collide(bullet,this, this.death, null, this);
    game.physics.arcade.collide(barrier,this, this.breach, null, this);

    this.shoot--;
    if(this.shoot == 0 && this.canshoot == true){
        new enemybulletconstruct(game, this.x, this.y);
        this.shoot = game.rnd.integerInRange(300,2000);
    }

    if (lives == 0){this.shoot  = 999999;}

};

enemy2construct.prototype.breach = function (enem, barrier){ player.reset(game.world.centerX, scaleRatio * 1300 * 3);  lives = 0;  };

enemy2construct.prototype.death = function (bullet, enem) {
    bullet.body.x = -500;
    bullet.body.y = -500;
    bullettimer = 5;
    new explosionconstruct(game, this.x, this.y);
    this.kill();
    totalScore += 20;
    this.canshoot = false;
    wavekilled += 1;
};

/*********************       Enemy Constructor 3       *************************/

enemy3construct = function (game, x, y){
    Phaser.Sprite.call(this, game, x, y, "Enemies");
    this.scale.setTo(scaleRatio * 2, scaleRatio * 2);
    this.anchor.x = 0.4;
    this.anchor.y = 0.5;
    this.animations.add('fly', [8, 9, 10, 11]);
    this.play('fly', 10, true);
    game.add.existing(this);

    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.onWorldBounds = new Phaser.Signal();
    this.body.onWorldBounds.add(changedir,this);

    this.shoot = game.rnd.integerInRange(300,1400);

    this.canshoot = false;


};

enemy3construct.prototype = Object.create(Phaser.Sprite.prototype);
enemy3construct.prototype.constructor = enemy3construct;

enemy3construct.prototype.update = function(){

    game.physics.arcade.collide(bullet,this, this.death, null, this);
    game.physics.arcade.collide(barrier,this, this.breach, null, this);

    this.shoot--;
    if(this.shoot == 0 && this.canshoot == true){
        new enemybulletconstruct(game, this.x, this.y);
        this.shoot = game.rnd.integerInRange(300,2000);
    }

    if (lives == 0){this.shoot  = 999999;}

};

enemy3construct.prototype.breach = function (enem, barrier){ player.reset(game.world.centerX, scaleRatio * 1300 * 3);  lives = 0;  };

enemy3construct.prototype.death = function (bullet, enem) {
    bullet.body.x = -500;
    bullet.body.y = -500;
    bullettimer = 5;
    new explosionconstruct(game, this.x, this.y);
    this.kill();
    totalScore += 30;
    this.canshoot = false;
    wavekilled += 1;
};

/*********************       Enemy Constructor 4       *************************/

enemy4construct = function (game, x, y){
    Phaser.Sprite.call(this, game, x, y, "Enemies");
    this.scale.setTo(scaleRatio * 2, scaleRatio * 2);
    this.anchor.x = 0.4;
    this.anchor.y = 0.5;
    this.animations.add('fly', [12, 13, 14, 15]);
    this.play('fly', 10, true);
    game.add.existing(this);

    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.onWorldBounds = new Phaser.Signal();
    this.body.onWorldBounds.add(changedir,this);

    this.shoot = game.rnd.integerInRange(700,3500);

    this.canshoot = true;


};

enemy4construct.prototype = Object.create(Phaser.Sprite.prototype);
enemy4construct.prototype.constructor = enemy4construct;

enemy4construct.prototype.update = function(){

    game.physics.arcade.collide(bullet,this, this.death, null, this);
    game.physics.arcade.collide(barrier,this, this.breach, null, this);

    this.shoot--;
    if(this.shoot == 0 && this.canshoot == true){
        new enemybulletconstruct(game, this.x, this.y);
        this.shoot = game.rnd.integerInRange(700,3500);
    }

    if (lives == 0){this.shoot  = 999999;}

};

enemy4construct.prototype.breach = function (enem, barrier){ player.reset(game.world.centerX, scaleRatio * 1300 * 3);  lives = 0;  };

enemy4construct.prototype.death = function (bullet, enem) {
    bullet.body.x = -500;
    bullet.body.y = -500;
    bullettimer = 5;
    new explosionconstruct(game, this.x, this.y);
    this.kill();
    totalScore += 40;
    this.canshoot = false;
    wavekilled += 1;
};

/*********************       Enemy Constructor 5       *************************/

enemy5construct = function (game, x, y){
    Phaser.Sprite.call(this, game, x, y, "Enemies");
    this.scale.setTo(scaleRatio * 2, scaleRatio * 2);
    this.anchor.x = 0.4;
    this.anchor.y = 0.5;
    this.animations.add('fly', [16, 17, 18, 19]);
    this.play('fly', 10, true);
    game.add.existing(this);

    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.onWorldBounds = new Phaser.Signal();
    this.body.onWorldBounds.add(changedir,this);

    this.shoot = game.rnd.integerInRange(1000,3000);

    this.canshoot = true;


};

enemy5construct.prototype = Object.create(Phaser.Sprite.prototype);
enemy5construct.prototype.constructor = enemy5construct;

enemy5construct.prototype.update = function(){

    game.physics.arcade.collide(bullet,this, this.death, null, this);
    game.physics.arcade.collide(barrier,this, this.breach, null, this);

    this.shoot--;
    if(this.shoot == 0 && this.canshoot == true){
        new enemybulletconstruct(game, this.x, this.y);
        this.shoot = game.rnd.integerInRange(1000,3000);
    }

    if (lives == 0){this.shoot  = 999999;}

};

enemy5construct.prototype.breach = function (enem, barrier){ player.reset(game.world.centerX, scaleRatio * 1300 * 3);  lives = 0;  };

enemy5construct.prototype.death = function (bullet, enem) {
    bullet.body.x = -500;
    bullet.body.y = -500;
    bullettimer = 5;
    new explosionconstruct(game, this.x, this.y);
    this.kill();
    totalScore += 50;
    this.canshoot = false;
    wavekilled += 1;
};

/*********************       Enemy Bullet Constructor       *************************/

enemybulletconstruct = function (game, x, y){
    Phaser.Sprite.call(this, game, x, y, "Bullets");
    this.scale.setTo(scaleRatio * 4, scaleRatio * 4);
    this.animations.add('shoot', [3, 4]);
    this.play('shoot', 10, true);
    game.add.existing(this);
    this.game.physics.arcade.enable(this);
    this.checkWorldBounds = true;
    this.events.onOutOfBounds.add(this.kil,this);
};

enemybulletconstruct.prototype = Object.create(Phaser.Sprite.prototype);
enemybulletconstruct.prototype.constructor = enemybulletconstruct;

enemybulletconstruct.prototype.update = function(){

    this.y += scaleRatio*20;
    game.physics.arcade.collide(player,this, this.dest, null, this);

};



enemybulletconstruct.prototype.kil = function (bull) {bull.kill();};

enemybulletconstruct.prototype.dest = function (player, bull) {

    bull.kill(bull);
    new explosionconstruct(game, player.x, player.y);
    player.reset(game.world.centerX, scaleRatio * 1300 * 3);
    lives--;

};