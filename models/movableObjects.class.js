class MovableObjects{
    posX
    posY;
    img; 

    constructor(){
    
       
    }

    /*
    constructor(posX, posY, imgPath){
        this.posX = posX; 
        this.posY = posY; 
        this.img = loadImage; 
    }
    */

    loadImage(path){
        this.img = new Image(); 
        this.img.src = path; 
    }

    moveRight(){

    }

    moveLeft(){

    }
}