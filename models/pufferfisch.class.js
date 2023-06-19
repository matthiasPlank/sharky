class Pufferfish extends Enemy{

    height = 50; 
    width = 50; 
    SWIM_IMAGES = [
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png"
    ] ; 
    offset = {
        top: 0, 
        right: 5, 
        left: 0, 
        bottom: 10
    }
  
 
    constructor(){
        super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
        this.posX = Math.random() * 500; 
        this.speed += Math.random() * 0.25;
        this.loadImages(this.SWIM_IMAGES); 
        this.swimLeft(); 
    }

}