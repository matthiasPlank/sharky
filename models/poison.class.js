class Poison extends CollectableObjects{

    POISON_IMAGE = ["img/4. Marcadores/Posiขn/Dark - Right.png"]; 
    width = 50; 
    height = 65; 
    
    /**
     * Creates a new instance posion.
     * @param {number} posX - Position on the x-axis of the canvas.
     * @param {number} posY - Position on the y-axis of the canvas.
     */
    constructor(posX, posY){
        super(); 
        this.posX = posX; 
        this.posY = posY; 
        this.loadImages(this.POISON_IMAGE); 
        this.playAnimation(this.POISON_IMAGE);
    }   
}