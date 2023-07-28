class BackgroundObject extends MovableObjects{

    height = 480; 
    width = 720*2;
    
    /**
     * Creates a new Instance of a Backgroundobject. 
     * @param {string} imagePath - Path to the Image of the backgroundobject.
     * @param {number} x - Position on the x-axis of the canvas. 
     */
    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.posX = x; 
        this.posY = 0;
    }
}