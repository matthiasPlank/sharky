class Endboss extends Enemy {

    height = 400; 
    width = 400; 
    posY = -5000;
    //posX = 2300; 
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
    INTRO_IMAGES = [
        "img/2.Enemy/3 Final Enemy/1.Introduce/1.png", 
        "img/2.Enemy/3 Final Enemy/1.Introduce/2.png", 
        "img/2.Enemy/3 Final Enemy/1.Introduce/3.png", 
        "img/2.Enemy/3 Final Enemy/1.Introduce/4.png", 
        "img/2.Enemy/3 Final Enemy/1.Introduce/5.png", 
        "img/2.Enemy/3 Final Enemy/1.Introduce/6.png", 
        "img/2.Enemy/3 Final Enemy/1.Introduce/7.png", 
        "img/2.Enemy/3 Final Enemy/1.Introduce/8.png", 
        "img/2.Enemy/3 Final Enemy/1.Introduce/9.png", 
        "img/2.Enemy/3 Final Enemy/1.Introduce/10.png"
    ];
    swimInterval;
    introInterval; 
    introIntervalCounter = 0; 
    introPlayed = false; 
    offset = {
        top: 200, 
        right: 10, 
        left: 10, 
        bottom: 60
    }

    constructor(){
        super().loadImage("img/2.Enemy/3 Final Enemy/2.floating/1.png");
        this.loadImages(this.SWIM_IMAGES); 
        this.loadImages(this.INTRO_IMAGES); 
        this.swim(); 
    
    }

    swim(){
        this.swimInterval = setInterval(()=>{
            this.playAnimation(this.SWIM_IMAGES); 
            console.log("Endboss swim");
        }, 300 )
    }

    playIntro(){
        console.log("playIntro"); 
        clearInterval(this.swimInterval); 
        //clearInterval(this.introInterval); 

        this.introInterval = setInterval(()=>{
            if( ( this.introIntervalCounter < this.INTRO_IMAGES.length ) && !this.introPlayed){
                console.log(this.INTRO_IMAGES.length ); 
                console.log(this.introIntervalCounter ); 
                this.posY = -50;
                this.playAnimation(this.INTRO_IMAGES); 
                this.introIntervalCounter ++; 
            }
            else{
                this.introPlayed = true; 
                console.log("restart swim");   
                this.swim(); 
                clearInterval(this.introInterval);    
            }
        }, 100 )

    }


}