class MovableObjects{
    posX = 100; 
    posY = 100;
    img; 
    height = 100; 
    width = 100; 

    /*
    constructor(posX , posY){
        this.posX = posX; 
        this.posY = posY; 
    }
    */

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