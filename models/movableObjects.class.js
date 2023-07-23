class MovableObjects extends DrawableObjects{
    posX = 120; 
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
    lastHitBy;
    attackRange = 30; 

    moveLeftInterval; 
    moveRigthInterval; 
    moveUpInterval; 
    moveDownInterval; 

    moveRight(){
        this.moveRigthInterval = setInterval(()=>{
            this.posX += this.speed;  
         }, 1000/60 )
    }

    moveLeft(){
        this.moveLeftInterval = setInterval(()=>{
           this.posX -= this.speed;  
        }, 1000/60 )
    }

    moveUp(){
        this.moveUpInterval = setInterval(()=>{
            this.posY -= this.speed;  
         }, 1000/60 )
    }

    moveDown(){
        this.moveDownInterval = setInterval(()=>{
            this.posY += this.speed;  
         }, 1000/60 )
    }
    randomSwimDirection(){
        if(Math.random() < 0.5){
            this.moveLeft(); 
        }
        else{
            this.moveRight();
        }
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

    playSingleAnimation(images , index){
        let path = images[index]; 
        this.img = this.imageCache[path]; 
    }

    isColliding(obj) {
            return this.posX + this.width - this.offset.right > obj.posX + obj.offset.left &&
            this.posY + this.height - this.offset.bottom > obj.posY + obj.offset.top &&
            this.posX + this.offset.left < obj.posX + obj.width - obj.offset.right &&
            this.posY + this.offset.top <obj.posY + obj.height - obj.offset.bottom;
    }

    isInAttackRange(obj){
        return this.posX + this.width - this.offset.right + this.attackRange > obj.posX + obj.offset.left &&
        this.posY + this.height - this.offset.bottom + this.attackRange > obj.posY + obj.offset.top &&
        this.posX + this.offset.left - this.attackRange < obj.posX + obj.width - obj.offset.right &&
        this.posY + this.offset.top - this.attackRange  < obj.posY + obj.height - obj.offset.bottom;
    }

    isHit(){
        if(this instanceof Character){
            if(!this.isDead()){
                this.energy -= 5; 
                this.world.statusBar_Life.setPercentage(this.energy);
                this.timeLastHit = new Date().getTime(); 
            }
        }
        else if(this instanceof Endboss && !this.isDead()){
            console.log("Endboss Hit !!!");
                this.energy -= 5; 
                this.world.statusBar_Endboss.setPercentage(this.energy);
                this.timeLastHit = new Date().getTime();   
        }
    }

    isHitbyBubble(bubble){

      if(this instanceof Endboss && !this.isDead()){
            console.log("Endboss Hit by Bubble!!!");
            if(bubble.isPoisoned){
                this.energy -= 20; 
                console.log("Hit by Poisoned buuble"); 
            }
            else{
                this.energy -= 5;
                console.log("Hit by normal  buuble"); 
            }
               
                this.world.statusBar_Endboss.setPercentage(this.energy);
                this.timeLastHit = new Date().getTime();   
        }
    }

    isHitbyFin(){
        if(this instanceof Endboss && !this.isDead()){
            console.log("Endboss Hit by Fin!!!");
            this.energy -= 5;            
            this.world.statusBar_Endboss.setPercentage(this.energy);
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