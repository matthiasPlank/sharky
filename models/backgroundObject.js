class BackgroundObject extends MovableObjects{

    height = 480; 
    width = 720*2;

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.posX = x; 
        this.posY = 0;

        /*
        if( floorIndex == 0 ){
            super().loadImage("./img/3. Background/Layers/2. Floor/D.png");
        }
        else if(floorIndex == 1){
            super(posX, posY).loadImage("./img/3. Background/Layers/2. Floor/D1.png");
        }
        else if(floorIndex == 2){
            super(posX, posY).loadImage("./img/3. Background/Layers/2. Floor/D2.png");
        }
        else{
            super(posX, posY).loadImage("./img/3. Background/Layers/2. Floor/D.png");
        }
        */
    }

}