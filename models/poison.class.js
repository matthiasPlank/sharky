class Poison extends CollectableObjects{


    POISON_IMAGE = ["img/4. Marcadores/Posiขn/Animada/1.png"]; 
    width = 50; 
    height = 65; 
    
    constructor(posX, posY){
        super(); 
        this.posX = posX; 
        this.posY = posY; 
        this.loadImages(this.POISON_IMAGE); 
        this.playAnimation(this.POISON_IMAGE);

    }
    
}