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

    playAnimation(images){
        let path = images[this.currentImage]; 
        this.img = this.imageCache[path]; 
        this.currentImage ++ ; 
        if (this.currentImage >= images.length){
            this.currentImage = 0; 
        }
    }

    draw(ctx){
        ctx.drawImage(this.img , this.posX , this.posY, this.width , this.height) ; 
    }
    drawFrame(ctx){

        if(this instanceof Character || this instanceof Enemy ){
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "red";
            ctx.rect( this.posX , this.posY ,  this.width , this.height); 
            ctx.stroke(); 
        }
    }
    // Bessere Formel zur Kollisionsberechnung (Genauer)
    isColliding(obj) {
    return  (this.posX + this.width) > obj.posX && 
            (this.posY + this.height) > obj.posY &&
            this.posX < obj.posX && 
            this.posY < (obj.posY + obj.height)
            //obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }
}