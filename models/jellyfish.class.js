class Jellyfish extends Enemy{

    height = 50; 
    width = 50; 
    SWIM_IMAGES = [
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png", 
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png", 
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png", 
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png"
    ] ; 
    DIE_IN_BUBBLE_IMAGES = [
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png", 
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png", 
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png", 
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png"
    ]; 
    offset = {
        top: 0, 
        right: 5, 
        left: 0, 
        bottom: 10
    }
    speed = 0.05;
  
    constructor(){
        super().loadImage("./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
        this.posX = ( Math.random() * 2000 ) + 300; 
        this.posY = ( Math.random() * 300 ) + 100; 
        this.speed += Math.random() * 0.1;
        this.loadImages(this.SWIM_IMAGES); 
        this.loadImages(this.DIE_IN_BUBBLE_IMAGES); 
        this.SWIM_IMAGES;
        this.swimAnimationUpAndDown(); 
    }

    dieBubbleAnimation(){
        this.isDead = true; 
        this.isDeadFlag = true; 
        this.dieAniamtionCounter = 0; 
        clearInterval(this.swimUpAndDownInterval); 
        clearInterval(this.swimLeftInterval); 
        clearInterval(this.swimUpInterval); 
        clearInterval(this.moveLeftInterval); 
        this.dieInterval = setInterval(()=>{
            if(this.dieAniamtionCounter < 4){
                this.playAnimation(this.DIE_IN_BUBBLE_IMAGES);
                this.dieAniamtionCounter++; 
            }
            else{
                clearInterval(this.dieInterval); 
                this.moveUp();  
            }
        }, 300 )
     
    }

    

}