class Floor extends MovableObjects{
    height = 300; 
    width = 900;
    
    constructor(posX, posY, floorIndex){
        if( floorIndex == 0 ){
            super(posX, posY).loadImage("./img/3. Background/Layers/2. Floor/D.png");
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
    }

}