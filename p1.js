class p1 extends Phaser.Scene {
    constructor()
    {
        super({key: "p1"});
    }
    preload(){
        this.load.image('knight', 'assets/knight.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('eye', 'assets/eye.png');
    }

    create(){
        this.bg = this.add.image(400,300,'background');
        this.image = this.add.image(400,360,'knight');
        this.ad1 = this.add.image(500,200,'eye');
        //this.ad1.camera.zoom = 0.5;

        this.input.keyboard.on('keyup_D', function(event){
            this.image.x+=10;
        },this);

        this.input.keyboard.on('keyup_W', function(event){
            var physicsImage = this.physics.add.image(this.image.x, this.image.y, "knight" );
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100),-300);
        },this);


        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }
    update(delta){

        if(this.key_A.isDown)
            this.image.x--;
        if(this.key_D.isDown)
            this.image.x++;
        if(this.key_W.isDown)
        {
            var physicsImage = this.physics.add.image(this.image.x, this.image.y, "knight" );
            physicsImage.setVelocity(100,-300);
        }
    }
}