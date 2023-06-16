class Endboss extends MovableObjects {

    height = 400; 
    width = 400; 
    posY = -50;
    posX = 2300; 
    SWIM_IMAGES = [
        "img/2.Enemy/3 Final Enemy/2.floating/1.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/2.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/3.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/4.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/5.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/6.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/7.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/8.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/9.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/10.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/11.png", 
        "img/2.Enemy/3 Final Enemy/2.floating/12.png",
        "img/2.Enemy/3 Final Enemy/2.floating/13.png" 
    ] ; 

    constructor(){
        super().loadImage("img/2.Enemy/3 Final Enemy/2.floating/1.png");
        this.loadImages(this.SWIM_IMAGES); 
        this.swim(); 
    
    }

    swim(){
        setInterval(()=>{
            this.playAnimation(this.SWIM_IMAGES); 
        }, 300 )
    }

}