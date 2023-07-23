class BackgroundObject extends MovableObjects{

    height = 480; 
    width = 720*2;

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.posX = x; 
        this.posY = 0;
    }

}