class MovableObjects{
    posX = 100; 
    posY = 100;
    img; 
    height = 100; 
    width = 100; 
    imageCache = {}; 
    currentImage = 0 ; 
    speed = 0.15;  
    otherDirection = false; 

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

    loadImages(imgPaths){
        imgPaths.forEach(path => {
            let img = new Image();
            img.src = path; 
            this.imageCache[path] = img ;  
        });

    }

    moveRight(){

    }

    moveLeft(){
        setInterval(()=>{
           this.posX -= this.speed;  
        }, 1000/60 )
    }
}