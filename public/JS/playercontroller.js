/**
 * Created by B00265222/MWilliams on 18/05/2017.
 */


function playercontrols(){

    if ((game.input.activePointer.isDown && moveright.input.checkPointerOver(game.input.activePointer)) || game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        playermovement(1)
    } else if ((game.input.activePointer.isDown && moveleft.input.checkPointerOver(game.input.activePointer))|| game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        playermovement(2)
    } else {
        playermovement(3)
    }

    fire.events.onInputDown.add(firebullet, this);
    if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
        firebullet();
    }

}

function playermovement(dir){
    switch(dir){
        case 1:
            player.x = player.x +(15);
            player.animations.play('right', 15, true);
            break;
        case 2:
            player.x = player.x -(15);
            player.animations.play('left', 15, true);
            break;
        case 3:
            player.x += 0;
            player.animations.play('idle', 15, true);
            break;
    }
}

function firebullet() {
    if(bullettimer <=0) {
        bullet.reset(player.x, player.y);
        bullet.body.velocity.y = -(scaleRatio * 5000);
        bullettimer = scaleRatio*70;
    }
}