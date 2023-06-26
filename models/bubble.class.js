class Bubble extends MovableObjects{

    BUBBLE_IMAGE = ["img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"]; 
    visible = false; 
    width=40;
    height=40; 
    speed=1; 

    constructor(posX, posY){
        super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        this.loadImages(this.BUBBLE_IMAGE);
        console.log("Bubble created");
        this.posX = posX; 
        this.posY = posY; 
        this.animateBubble(); 
    }

    animateBubble(){
        this.moveRight();
        this.moveUp();
        setInterval(()=>{
            this.playAnimation(this.BUBBLE_IMAGE); 
            console.log("Bubble Image @" + this.posX + " / " + this.posY); 
        }, 300 )
    }
}