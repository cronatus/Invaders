/**
 * Created by B00265222/MWilliams on 25/05/2017.
 */

function bosscollision(){
    new explosionconstruct(game, boss.x, boss.y);       //create and explosion at the boss' location
    boss.reset(-scaleRatio*100*3, scaleRatio * 55 * 3); //reset the boss' location to the edge of the screen
    boss.body.velocity.x = 0;                           //reset the boss' velocity to 0 to ensure he doesn't immediately go across the screen again
    bossspawn = game.rnd.integerInRange(1000,5000);     //reset the boss timer to a random num between 1000 and 5000
    totalScore += 100;      //increase the players score by 100
    bullet.body.x = -50;    //reset the location of the bullet to be off screen
    bullet.body.y = -50;
    bullettimer = 5;        //reset the bullet timer to allow the player to shoot

}

function bossoob(){
    boss.reset(-scaleRatio*100*3, scaleRatio * 55 * 3); //reset the boss' location
    bossspawn = game.rnd.integerInRange(1000,2500);     //reset the boss' timer
    boss.body.velocity.x = 0;                           //reset the boss' velocity
}

/*********************       Explosion Constructor        *************************/

explosionconstruct = function (game, x, y){
    Phaser.Sprite.call(this, game, x, y, "Explosion");  //call the explosion sprite for this object
    this.scale.setTo(scaleRatio * 2, scaleRatio * 2);   //scale the explosion
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.animations.add('boom', [0, 1, 2, 3, 4, 5]);
    this.play('boom', 10, false, true);
    game.add.existing(this);

};

explosionconstruct.prototype = Object.create(Phaser.Sprite.prototype);
explosionconstruct.prototype.constructor = explosionconstruct;