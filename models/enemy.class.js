class Enemy extends MovableObjects{

    height = 50; 
    width = 50; 
    SWIM_IMAGES = [
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png"
    ] ; 
    DIE_IMAGES = [
        "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.1.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.2.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.3.png"
    ];
    offset = {
        top: 0, 
        right: 5, 
        left: 0, 
        bottom: 10
    }
    animationToogle = false; 
    swimUpAndDownInterval; 
    swimUpInterval; 
    swimLeftInterval; 
    dieInterval; 
    isDeadFlag = false; 
    dieAniamtionCounter = 0; 
 
    /**
     *  Creates a new instance of an enemy. 
     */
    constructor(){
        super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
        this.loadImages(this.SWIM_IMAGES); 
        this.loadImages(this.DIE_IMAGES); 
    }

    /**
     * Let the enemy swim left.
     */
    swimLeft(){
        this.moveLeft();
        this.swimLeftInterval = setInterval(()=>{
            this.playAnimation(this.SWIM_IMAGES); 
        }, 300 )
    }

    /**
     * Let the enemy swim up.
     */
    swimUp(){
        this.moveUp();
        this.swimUpInterval = setInterval(()=>{
            this.playAnimation(this.SWIM_IMAGES); 
        }, 300 )
    }

     /**
     * Let the enemy swim up and down inside the game screen.
     */
    swimAnimationUpAndDown(){
        this.moveUp(); 
        this.swimUpAndDownInterval = setInterval(()=>{
            this.playAnimation(this.SWIM_IMAGES); 
            if(this.posY < 0){
                clearInterval(this.moveUpInterval);
                this.moveDown(); 
            }
            else if(this.posY > 400){
                clearInterval(this.moveDownInterval);
                this.moveUp(); 
            }
        }, 300 )
    }

   

    /**
     * Clears the enemy intervals. 
     */
    clearIntervalls(){
        clearInterval(this.swimUpAndDownInterval); 
        clearInterval(this.swimLeftInterval); 
        clearInterval(this.swimUpInterval); 
        clearInterval(this.moveLeftInterval); 
    }
}