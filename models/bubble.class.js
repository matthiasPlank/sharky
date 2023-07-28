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

    /**
     * Creates a new instance of a bubble. 
     * @param {number} posX - Position on the x-axis of the canvas. 
     * @param {number} posY - Position on the y-axis of the canvas. 
     * @param {string} direction - In which direction is the bubble moving "L" for left or "R" for right.
     * @param {boolean} isPoisoned - Is the bubble a normal or a posioned bubbel.
     */
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

    /**
     * Set the move intervall an the bubble image. 
     */
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