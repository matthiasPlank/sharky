class Endboss extends Enemy {

    height = 400; 
    width = 400; 
    posY = -5000;
    posX = 2300; 
    speed = 0.8; 
  
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
    DEAD_ENDBOSS_IMAGES = [
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png", 
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png", 
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png", 
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png", 
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png"
    ];
    HURT_ENDBOSS_IMAGES = [
        "img/2.Enemy/3 Final Enemy/Hurt/1.png", 
        "img/2.Enemy/3 Final Enemy/Hurt/2.png", 
        "img/2.Enemy/3 Final Enemy/Hurt/3.png", 
        "img/2.Enemy/3 Final Enemy/Hurt/4.png"
    ];
    ATTACK_ENDBOSS_IMAGES = [
        "img/2.Enemy/3 Final Enemy/Attack/1.png", 
        "img/2.Enemy/3 Final Enemy/Attack/2.png", 
        "img/2.Enemy/3 Final Enemy/Attack/3.png", 
        "img/2.Enemy/3 Final Enemy/Attack/4.png", 
        "img/2.Enemy/3 Final Enemy/Attack/5.png", 
        "img/2.Enemy/3 Final Enemy/Attack/6.png"
    ];
    world; 
    swimInterval;
    introInterval; 
    introIntervalCounter = 0; 
    attackInterval; 
    attackIntervalCounter = 0; 
    attackIsPlaying = false;
    timeToAttack = false; 
    saveOffsetWhileAttackLeft = 0; 
    saveOffsetWhileAttackRight = 0; 
    savePosXWhileAttacK = this.posX; 
    introPlayed = false; 
    offset = {
        top: 200, 
        right: 10, 
        left: 10, 
        bottom: 60
    }
    dieAniamtionCounter = 0; 
    moveUpAndDownInterval; 

    constructor(){
        super().loadImage("img/2.Enemy/3 Final Enemy/2.floating/1.png");
        this.loadImages(this.SWIM_IMAGES); 
        this.loadImages(this.INTRO_IMAGES); 
        this.loadImages(this.DEAD_ENDBOSS_IMAGES); 
        this.loadImages(this.HURT_ENDBOSS_IMAGES); 
        this.loadImages(this.ATTACK_ENDBOSS_IMAGES); 
        this.swim();     
        this.attackTimeInterval(); 
    }

    swim(){
        this.swimInterval = setInterval(()=>{
            if(this.introPlayed){
                if(this.isDead()){
                    this.isDeadAnimation();
                }
                else if(this.isHurt()){
                    this.playAnimation(this.HURT_ENDBOSS_IMAGES); 
                }
                else if(this.timeToAttack){
                    this.attack();  
                    clearInterval(this.swimInterval); 
                }
                else{
                    this.playAnimation(this.SWIM_IMAGES); 
                }
            }
        }, 300 )
    }

    isDeadAnimation(){
        if(this.dieAniamtionCounter < this.DEAD_ENDBOSS_IMAGES.length){
            this.playSingleAnimation(this.DEAD_ENDBOSS_IMAGES , this.dieAniamtionCounter ); 
            this.dieAniamtionCounter++;               
        } 
        else{
            this.clearEnbossIntervals(); 
            this.clearCharacterIntervals(); 
            document.getElementById("winScreen").classList.remove("dsp-none"); 
            document.getElementById("gameOverlayButtons").classList.add("dsp-none"); 
        }
    }

    playIntro(){
        clearInterval(this.swimInterval); 
        this.introInterval = setInterval(()=>{
            if( ( this.introIntervalCounter < this.INTRO_IMAGES.length ) && !this.introPlayed){
                this.posY = -50;
                this.playAnimation(this.INTRO_IMAGES); 
                this.introIntervalCounter ++; 
            }
            else{
                this.introPlayed = true; 
                this.swim(); 
                this.moveUpAndDown(); 
                clearInterval(this.introInterval);            
            }
        }, 100 )
    }

    moveUpAndDown(){
        this.moveDown(); 
        this.moveUpAndDownInterval = setInterval(() => {
            if(this.posY < -100){
                clearInterval(this.moveUpInterval); 
                this.moveDown(); 
            }
            else if(this.posY > 80){
                clearInterval(this.moveDownInterval); 
                this.moveUp(); 
            }
        }, 300);
    }

    backToOrignalPosition(){
        this.posX = this.savePosXWhileAttacK; 
    }

    attackTimeInterval(){
        setInterval(() => {
            if(!this.timeToAttack){
                this.timeToAttack = true; 
            }
        }, 5000);
    }

    attack(){
        this.attackInterval = setInterval(() => {
            if( ( this.attackIntervalCounter < this.ATTACK_ENDBOSS_IMAGES.length )){
                this.playAnimation(this.ATTACK_ENDBOSS_IMAGES); 
                this.attackIntervalCounter++; 
                this.posX -= 20; }
            else{
                this.attackIsPlaying = true; 
                this.timeToAttack = false; 
                this.attackIntervalCounter = 0;
                this.swim();
                this.backToOrignalPosition(); 
                clearInterval(this.attackInterval);    
            }
        }, 200);
    }

    clearEnbossIntervals(){
        clearInterval(this.swimInterval); 
        clearInterval(this.moveUpAndDownInterval);
        clearInterval(this.moveLeftInterval);
        clearInterval(this.moveRigthInterval);
        clearInterval(this.moveUpInterval);
        clearInterval(this.moveDownInterval);
    }

    clearCharacterIntervals(){
        clearInterval(this.world.character.animateIntervallAnimation);
    }
}