class Coin extends CollectableObjects{

    COIN_IMAGE = ["img/4. Marcadores/1. Coins/1.png"]; 
    width = 35; 
    height = 35; 

    /**
     *  Creates a new instance of a coin. 
     */
    constructor(posX, posY){
        super(); 
        this.posX = posX; 
        this.posY = posY; 
        this.loadImages(this.COIN_IMAGE); 
        this.playAnimation(this.COIN_IMAGE);
    }
}