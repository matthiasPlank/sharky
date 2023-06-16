class Character extends MovableObjects{

    height = 150; 
    width = 150;
    speed = 5; 
    IDLE_IMAGES = [
        "img/1.Sharkie/1.IDLE/1.png", 
        "img/1.Sharkie/1.IDLE/2.png", 
        "img/1.Sharkie/1.IDLE/3.png", 
        "img/1.Sharkie/1.IDLE/4.png", 
        "img/1.Sharkie/1.IDLE/5.png", 
        "img/1.Sharkie/1.IDLE/6.png", 
        "img/1.Sharkie/1.IDLE/7.png", 
        "img/1.Sharkie/1.IDLE/8.png", 
        "img/1.Sharkie/1.IDLE/9.png", 
        "img/1.Sharkie/1.IDLE/10.png", 
        "img/1.Sharkie/1.IDLE/11.png", 
        "img/1.Sharkie/1.IDLE/12.png", 
        "img/1.Sharkie/1.IDLE/13.png", 
        "img/1.Sharkie/1.IDLE/14.png", 
        "img/1.Sharkie/1.IDLE/15.png", 
        "img/1.Sharkie/1.IDLE/16.png", 
        "img/1.Sharkie/1.IDLE/17.png", 
        "img/1.Sharkie/1.IDLE/18.png"
    ] ; 
    SWIM_IMAGES = [
        "img/1.Sharkie/3.Swim/1.png", 
        "img/1.Sharkie/3.Swim/2.png", 
        "img/1.Sharkie/3.Swim/3.png", 
        "img/1.Sharkie/3.Swim/4.png", 
        "img/1.Sharkie/3.Swim/5.png", 
        "img/1.Sharkie/3.Swim/6.png" 
    ]; 
    world; 
    swim_sound = new Audio('./audio/swim.mp3'); 

    constructor(){
          super().loadImage("img/1.Sharkie/3.Swim/1.png");
          this.loadImages(this.SWIM_IMAGES); 
          this.animate(); 

    }

    animate(){

        setInterval(()=>{
            this.swim_sound.pause(); 
            if( this.world.keyboard.RIGHT && this.posX < this.world.level.level_end_x ) {
                this.swim_sound.play(); 
                this.posX += this.speed; 
                this.otherDirection = false; 
            }
            if( this.world.keyboard.LEFT && this.posX > 100) {
                this.swim_sound.play(); 
                this.posX -= this.speed;
                this.otherDirection = true; 
            }
            if( this.world.keyboard.UP ) {
                this.swim_sound.play(); 
                this.posY -= this.speed;
            }
            if( this.world.keyboard.DOWN ) {
                this.swim_sound.play(); 
                this.posY += this.speed;
            }
            this.world.camera_x = -this.posX + 100; 

         }, 1000 / 60);


        setInterval(()=>{

            if( this.world.keyboard.RIGHT  || this.world.keyboard.LEFT ||  this.world.keyboard.UP ||  this.world.keyboard.DOWN ) {
            
                let path = this.SWIM_IMAGES[this.currentImage]; 
                this.img = this.imageCache[path]; 
                this.currentImage ++ ; 
                if (this.currentImage >= this.SWIM_IMAGES.length){
                    this.currentImage = 0; 
                }
            }
        }, 100 )
    }
}