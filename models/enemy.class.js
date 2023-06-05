class Enemy extends MovableObjects{

    height = 50; 
    width = 50; 
 
    constructor(){
        super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
        this.posX = Math.random() * 500; 
    }
}