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
 
    constructor(){
        super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
        this.loadImages(this.SWIM_IMAGES); 
        this.loadImages(this.DIE_IMAGES); 
    }

    swimLeft(){
        this.moveLeft();
        this.swimLeftInterval = setInterval(()=>{
            this.playAnimation(this.SWIM_IMAGES); 
        }, 300 )
    }

    swimUp(){
        this.moveUp();
        this.swimUpInterval = setInterval(()=>{
            this.playAnimation(this.SWIM_IMAGES); 
        }, 300 )
    }

    swimAnimationUpAndDown(){
        this.moveUp(); 
        this.swimUpAndDownInterval = setInterval(()=>{
            this.playAnimation(this.SWIM_IMAGES); 
        }, 300 )
    }

    die(){
        this.isDeadFlag = true; 
        this.dieAniamtionCounter = 0; 
        clearInterval(this.swimUpAndDownInterval); 
        clearInterval(this.swimLeftInterval); 
        clearInterval(this.swimUpInterval); 
        clearInterval(this.moveLeftInterval); 
        this.dieInterval = setInterval(()=>{
            if(this.dieAniamtionCounter < 3){
                this.playAnimation(this.DIE_IMAGES);
                this.dieAniamtionCounter++; 
                console.log("die Interval" +  this.dieAniamtionCounter);
            }
            else{
                clearInterval(this.dieInterval); 
               this.moveUp();  
            }
        }, 300 )
    }  
}