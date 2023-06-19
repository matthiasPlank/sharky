class Jellyfish extends Enemy{

    height = 50; 
    width = 50; 
    SWIM_IMAGES = [
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png", 
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png", 
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png", 
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png"
    ] ; 
    offset = {
        top: 0, 
        right: 5, 
        left: 0, 
        bottom: 10
    }
    speed = 0.05;
  
 
    constructor(){
        super().loadImage("./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
        this.posX = Math.random() * 500; 
        this.posY = ( Math.random() * 300 ) + 100; 
        this.speed += Math.random() * 0.1;
        this.loadImages(this.SWIM_IMAGES); 
        this.SWIM_IMAGES;
        this.swimAnimationUpAndDown(); 
    }

    

}