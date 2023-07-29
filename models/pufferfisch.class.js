class Pufferfish extends Enemy{

    height = 50; 
    width = 50; 
    SWIM_IMAGES = [
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png", 
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png"
    ] ; 
    offset = {
        top: 0, 
        right: 5, 
        left: 0, 
        bottom: 10
    }
 
    /**
     * Creates a new instance of a pufferfish. 
     */
    constructor(){
        super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
        this.posX = ( Math.random() * 2300 ) + 300; 
        this.posY = Math.random() * 400; 
        this.speed += Math.random() * 0.25;
        this.loadImages(this.SWIM_IMAGES); 
        this.swimLeft(); 
    }

    /**
    * Plays the died animation for the pufferfish and it swim up outside of the game.     
    */
    die(){
        this.isDeadFlag = true; 
        this.dieAniamtionCounter = 0; 
        this.clearIntervalls();
        this.dieInterval = setInterval(()=>{
            if(this.dieAniamtionCounter < 3){
                this.playAnimation(this.DIE_IMAGES);
                this.dieAniamtionCounter++; 
            }
            else{
                clearInterval(this.dieInterval); 
                this.moveUp();  
            }
        }, 300 )
    }  

}