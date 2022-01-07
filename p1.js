

class p1 extends Phaser.Scene {
    constructor()
    {
        super({key: "p1"});
    }
    preload(){
        this.load.image('knight', 'assets/knight.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('box', 'assets/box.png');
    }

    create(){
        this.bg = this.add.image(400,300,'background');
        this.sprite = this.add.image(400,360,'box');
        //this.ad1 = this.add.image(500,200,'eye');
        //this.ad1.camera.zoom = 0.5;

        this.input.keyboard.on('keyup_D', function(event){
            this.sprite.x+=10;
        },this);

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_spaceBar =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update(delta){
        if(this.key_A.isDown)
            this.sprite.x--;
        if(this.key_D.isDown)
            this.sprite.x++;
        if(this.key_W.isDown) {
            this.sprite.setVelocity(100, -300);
        }
        if(this.key_spaceBar.isDown) {
            this.sprite.setVelocityY(300);
        }
    }
}