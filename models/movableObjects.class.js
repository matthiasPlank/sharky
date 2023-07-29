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

    /**
     *Let's move the object right with the object's speed.
     */
    moveRight(){
        this.moveRigthInterval = setInterval(()=>{
            this.posX += this.speed;  
         }, 1000/60 )
    }

    /**
     *Let's move the object left with the object's speed.
     */
    moveLeft(){
        this.moveLeftInterval = setInterval(()=>{
           this.posX -= this.speed;  
        }, 1000/60 )
    }

    /**
     *Let's move the object up with the object's speed.
     */
    moveUp(){
        this.moveUpInterval = setInterval(()=>{
            this.posY -= this.speed;  
         }, 1000/60 )
    }

    /**
     * Let's move the object down with the object's speed.
     */
    moveDown(){
        this.moveDownInterval = setInterval(()=>{
            this.posY += this.speed;  
        }, 1000/60 )
    }

    /**
     * Let's move the object down with a custom speed.
     * @param {number} customSpeed 
     */
    moveUpWitCustomSpeed(customSpeed){
        this.moveUpInterval = setInterval(()=>{
            this.posY -= customSpeed;  
         }, 1000/60 )
    }

    /**
     * Sets an random swim direction - left or right.
     */
    randomSwimDirection(){
        if(Math.random() < 0.5){
            this.moveLeft(); 
        }
        else{
            this.moveRight();
        }
    }

    /**
     * Sets the next image of an animation sequence.
     * @param {images[]} images - array of images.
     */
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

    /**
     * Sets an custom image per index. 
     * @param {images[]} images - array of images.
     * @param {number} index - index for the images array
     */
    playSingleAnimation(images , index){
        let path = images[index]; 
        this.img = this.imageCache[path]; 
    }

    /**
     * Checks if a moveableObject is colliding with these object.
     * @param {MovableObjects} obj - moveableObject to check if its colliding with these object.
     * @returns {boolean} - return true if the moveableObject is colliding with these object.
     */
    isColliding(obj) {
            return this.posX + this.width - this.offset.right > obj.posX + obj.offset.left &&
            this.posY + this.height - this.offset.bottom > obj.posY + obj.offset.top &&
            this.posX + this.offset.left < obj.posX + obj.width - obj.offset.right &&
            this.posY + this.offset.top <obj.posY + obj.height - obj.offset.bottom;
    }

    /**
     * Checks if a moveableObject is in attack range of these object.
     * @param {MovableObjects} obj - moveableObject to check if its in attack range of these object.
     * @returns {boolean} - return true if the moveableObject is in attack range of these object.
     */
    isInAttackRange(obj){
        return this.posX + this.width - this.offset.right + this.attackRange > obj.posX + obj.offset.left &&
        this.posY + this.height - this.offset.bottom + this.attackRange > obj.posY + obj.offset.top &&
        this.posX + this.offset.left - this.attackRange < obj.posX + obj.width - obj.offset.right &&
        this.posY + this.offset.top - this.attackRange  < obj.posY + obj.height - obj.offset.bottom;
    }

    /**
     * Decreases object energy and refreshes the status bar.
     */
    isHit(){
        if(this instanceof Character){
            if(!this.isDead()){
                this.energy -= 5; 
                this.world.statusBar_Life.setPercentage(this.energy);
                this.timeLastHit = new Date().getTime(); 
            }
        }
        else if(this instanceof Endboss && !this.isDead()){
                this.energy -= 5; 
                this.world.statusBar_Endboss.setPercentage(this.energy);
                this.timeLastHit = new Date().getTime();   
        }
    }

    /**
     * Checks if instance is dead. 
     * @returns {boolean} - return true if object is dead. 
     */
    isDead(){
        return this.energy < 0;  
    }

    /**
     * Checks if object was hit within the last 1000ms.
     * @returns {boolean} - return true if object was hit in the last second.
     */
    isHurt(){
        const timepassed = new Date().getTime() - this.timeLastHit; 
        return timepassed < 1000; 
    }
}