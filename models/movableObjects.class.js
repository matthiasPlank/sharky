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
    offset = {
        top: 0, 
        right: 0, 
        left: 0, 
        bottom: 0
    }
    offsetY = this.calcOffset(this.offset.top, this.offset.bottom);
    offsetX = this.calcOffset(this.offset.left, this.offset.right);
    

    moveRight(){

    }

    moveLeft(){
        setInterval(()=>{
           this.posX -= this.speed;  
        }, 1000/60 )
    }

    playAnimation(images){
        if (this.currentImage >= images.length){
            this.currentImage = 0; 
        }
        let path = images[this.currentImage]; 
        this.img = this.imageCache[path]; 
        this.currentImage ++ ; 
        if (this.currentImage >= images.length){
            this.currentImage = 0; 
        }
    }

   
    // Bessere Formel zur Kollisionsberechnung (Genauer)
    isColliding(obj) {
        /*
                return  (this.posX + this.width) > obj.posX && 
            (this.posY + this.height) > obj.posY &&
            this.posX < obj.posX && 
            this.posY < (obj.posY + obj.height)
            //obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
          */
         /*
            return  (this.posX + this.width - this.offsetX) > (obj.posX + obj.offsetX) && 
            (this.posY + this.height - this.offsetY) > (obj.posY + obj.offsetY) &&
            (this.posX + this.offsetX )< (obj.posX - obj.offsetX) && 
            (this.posY + this.offsetY) < (obj.posY + obj.height - obj.offsetY)  
        */
        /*
            return (this.posX + this.width) > obj.posX && 
            this.posX > (obj.posX + obj.width) && 
            (this.posY + this.offsetY + this.height) < obj.posY &&
            (this.posY + this.offsetY) < (obj.posY + obj.height)
        */
               /* console.log("try:");
            console.log(this.posX + this.width - this.offset.right > obj.posX + obj.offset.left ); 
            console.log(this.posY + this.height - this.offset.bottom > obj.posY + obj.offset.top); 
            console.log(this.posX + this.offset.left < obj.posX + obj.width - obj.offset.right ); 
            console.log( this.posY + this.offset.top < obj.height - obj.offset.bottom); 
*/
            return this.posX + this.width - this.offset.right > obj.posX + obj.offset.left &&
            this.posY + this.height - this.offset.bottom > obj.posY + obj.offset.top &&
            this.posX + this.offset.left < obj.posX + obj.width - obj.offset.right &&
            this.posY + this.offset.top <obj.posY + obj.height - obj.offset.bottom;
    }
    isHit(){
        if(!this.isDead()){
            this.energy -= 5; 
            this.world.statusBar_Life.setPercentage(this.energy);
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
    calcOffset(x , y){
        if ( x > y){
            return ( y - x ); 
        } else if (x < y){
            return ( x - y ); 
        } else {
            return -x; 
        }
    }
}