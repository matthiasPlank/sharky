class MovableObjects extends DrawableObjects{
    posX = 100; 
    posY = 100;
    img; 
    height = 100; 
    width = 100; 
    imageCache = {}; 
    currentImage = 0 ; 
    speed = 0.15;  
    otherDirection = false; 
    energy = 100; 
    timeLastHit = 0; 


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

   
    // Bessere Formel zur Kollisionsberechnung (Genauer)
    isColliding(obj) {
    return  (this.posX + this.width) > obj.posX && 
            (this.posY + this.height) > obj.posY &&
            this.posX < obj.posX && 
            this.posY < (obj.posY + obj.height)
            //obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }
    isHit(){
        if(!this.isDead()){
            this.energy -= 5; 
            this.timeLastHit = new Date().getTime(); 
        }
    }
    isDead(){
        return this.energy < 0;  
    }
    isHurt(){
        const timepassed = new Date().getTime() - this.timeLastHit; 
        return timepassed < 1000; 
    }
}