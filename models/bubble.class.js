class Bubble extends MovableObjects{

    BUBBLE_IMAGE = ["img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"]; 
    POISONED_BUBBLE_IMAGE = ["img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"]; 
    visible = false; 
    width=40;
    height=40; 
    speed=1.5; 
    speedUp=0.5;
    direction = "R"; 
    offset = {
        top: 0, 
        right: 0, 
        left: 0, 
        bottom: 0
    }
    isPoisoned; 

    constructor(posX, posY, direction , isPoisoned){
        if(!isPoisoned){
            super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        }
        else{
            super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        }
        this.loadImages(this.BUBBLE_IMAGE);
        this.loadImages(this.POISONED_BUBBLE_IMAGE);
        this.posX = posX; 
        this.posY = posY; 
        this.direction = direction; 
        this.isPoisoned = isPoisoned; 
        this.animateBubble(); 
    }

    animateBubble(){
        this.direction == "R" ? this.moveRight() : this.moveLeft(); 
        this.moveUpWitCustomSpeed(this.speedUp);
        setInterval(()=>{
            if(this.isPoisoned){
                this.playAnimation(this.POISONED_BUBBLE_IMAGE);
            }
            else{
                this.playAnimation(this.BUBBLE_IMAGE); 
            }
        }, 300 )
    }
}