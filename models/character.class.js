class Character extends MovableObjects{

    height = 150; 
    width = 150;
    posY = 200;
    speed = 5; 
    IDLE_IMAGES = [
        "img/1.Sharkie/1.IDLE/1.png", 
        "img/1.Sharkie/1.IDLE/2.png", 
        "img/1.Sharkie/1.IDLE/3.png", 
        "img/1.Sharkie/1.IDLE/4.png", 
        "img/1.Sharkie/1.IDLE/5.png", 
        "img/1.Sharkie/1.IDLE/6.png", 
        "img/1.Sharkie/1.IDLE/7.png", 
        "img/1.Sharkie/1.IDLE/8.png", 
        "img/1.Sharkie/1.IDLE/9.png", 
        "img/1.Sharkie/1.IDLE/10.png", 
        "img/1.Sharkie/1.IDLE/11.png", 
        "img/1.Sharkie/1.IDLE/12.png", 
        "img/1.Sharkie/1.IDLE/13.png", 
        "img/1.Sharkie/1.IDLE/14.png", 
        "img/1.Sharkie/1.IDLE/15.png", 
        "img/1.Sharkie/1.IDLE/16.png", 
        "img/1.Sharkie/1.IDLE/17.png", 
        "img/1.Sharkie/1.IDLE/18.png"
    ] ; 
    SWIM_IMAGES = [
        "img/1.Sharkie/3.Swim/1.png", 
        "img/1.Sharkie/3.Swim/2.png", 
        "img/1.Sharkie/3.Swim/3.png", 
        "img/1.Sharkie/3.Swim/4.png", 
        "img/1.Sharkie/3.Swim/5.png", 
        "img/1.Sharkie/3.Swim/6.png" 
    ]; 
    DEAD_IMAGES = [
        "img/1.Sharkie/6.dead/1.Poisoned/1.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/2.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/3.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/4.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/5.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/6.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/7.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/8.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/9.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/10.png", 
        "img/1.Sharkie/6.dead/1.Poisoned/11.png",
        "img/1.Sharkie/6.dead/1.Poisoned/12.png"
    ]; 
    HURT_IMAGES = [
        "img/1.Sharkie/5.Hurt/1.Poisoned/1.png", 
        "img/1.Sharkie/5.Hurt/1.Poisoned/2.png", 
        "img/1.Sharkie/5.Hurt/1.Poisoned/3.png", 
        "img/1.Sharkie/5.Hurt/1.Poisoned/4.png", 
        "img/1.Sharkie/5.Hurt/1.Poisoned/5.png" 
    ]; 
    SHOCK_IMAGES = [
        "img/1.Sharkie/5.Hurt/2.Electric shock/1.png", 
        "img/1.Sharkie/5.Hurt/2.Electric shock/2.png", 
        "img/1.Sharkie/5.Hurt/2.Electric shock/3.png" 
    ];
    ATTACK_IMAGE = [
        "img/1.Sharkie/4.Attack/Fin slap/1.png", 
        "img/1.Sharkie/4.Attack/Fin slap/2.png", 
        "img/1.Sharkie/4.Attack/Fin slap/3.png", 
        "img/1.Sharkie/4.Attack/Fin slap/4.png", 
        "img/1.Sharkie/4.Attack/Fin slap/5.png", 
        "img/1.Sharkie/4.Attack/Fin slap/6.png", 
        "img/1.Sharkie/4.Attack/Fin slap/7.png", 
        "img/1.Sharkie/4.Attack/Fin slap/8.png"
    ]; 
    BUBBLE_ATTACK_IMAGE = [
        "img/1.Sharkie/4.Attack/Bubble trap/op1/1.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/op1/2.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/op1/3.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/op1/4.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/op1/5.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/op1/6.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/op1/7.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/op1/8.png" 
    ]; 
    BUBBLE_POSION_ATTACK_IMAGE  = [
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png", 
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png" 
    ];


   

    world; 
    swim_sound = new Audio('./audio/swim.mp3'); 
    offset = {
        top: 70, 
        right: 25, 
        left: 25, 
        bottom: 35
    }
    currentFinAttack = false; 
    currentFinAttackCounter = 0; 
    currentBubbleAttack = false; 
    currentBubbleAttackCounter = 0; 
    collectedCoins = 0; 
    collectedPoisons = 0; 
    poisonAttacks = 0;
    dieAniamtionCounter = 0;

    constructor(){
          super().loadImage("img/1.Sharkie/3.Swim/1.png");
          this.loadImages(this.IDLE_IMAGES); 
          this.loadImages(this.SWIM_IMAGES); 
          this.loadImages(this.SHOCK_IMAGES); 
          this.loadImages(this.DEAD_IMAGES); 
          this.loadImages(this.HURT_IMAGES); 
          this.loadImages(this.ATTACK_IMAGE); 
          this.loadImages(this.BUBBLE_ATTACK_IMAGE);
          this.loadImages(this.BUBBLE_POSION_ATTACK_IMAGE); 
          this.animate(); 
    }

    animate(){

        setInterval(()=>{
            this.swim_sound.pause(); 
            if( this.world.keyboard.RIGHT && this.posX < this.world.level.level_end_x ) {
                this.swim_sound.play(); 
                this.posX += this.speed; 
                this.otherDirection = false; 
            }
            if( this.world.keyboard.LEFT && this.posX > 100) {
                this.swim_sound.play(); 
                this.posX -= this.speed;
                this.otherDirection = true; 
            }
            if( this.world.keyboard.UP ) {
                this.swim_sound.play(); 
                if(this.posY > -70){
                    this.posY -= this.speed;
                }
            }
            if( this.world.keyboard.DOWN ) {
                this.swim_sound.play(); 
                if(this.posY < this.world.ctx.canvas.clientHeight-200){
                    this.posY += this.speed;
                }
            }
          
            this.world.camera_x = -this.posX + 100; 

         }, 1000 / 60);


        setInterval(()=>{

            if(this.isDead()){
                //this.playAnimation(this.DEAD_IMAGES); 
                if(this.dieAniamtionCounter < this.DEAD_IMAGES.length){
                    this.playAnimation(this.DEAD_IMAGES); 
                    this.dieAniamtionCounter++;
                } 
                else{
                    //clearInterval(this.swimInterval); 
                    console.log("Character is Dead - End of Game"); 
                    this.characterDied(); 
                }
            }
            else if(this.isHurt()){
                if(this.lastHitBy == "Pufferfish"){
                    this.playAnimation(this.HURT_IMAGES); 
                }
                else if(this.lastHitBy == "Jellyfish"){
                    this.playAnimation(this.SHOCK_IMAGES); 
                }
                else{
                    this.playAnimation(this.HURT_IMAGES); 
                }
            }
            else{
                if (this.world.keyboard.SPACE && !this.currentFinAttack){
                    this.currentFinAttack = true; 
                    this.finAttack(); 
                }
                if(this.world.keyboard.KeyD && !this.currentBubbleAttack){
                    console.log("BubbleAttack");
                    this.currentBubbleAttack = true; 
                    this.bubbleAttack(); 
                }
                if( (this.world.keyboard.RIGHT  || this.world.keyboard.LEFT ||  this.world.keyboard.UP ||  this.world.keyboard.DOWN) && (!this.currentFinAttack && !this.currentBubbleAttack) ) {
                    this.playAnimation(this.SWIM_IMAGES); 
                }
            }
        }, 100 )
    }

    finAttack(){

        let finAttackInterval = setInterval(() => {
            if(this.currentFinAttackCounter < 8){
                this.playAnimation(this.ATTACK_IMAGE);   
                this.currentFinAttackCounter++; 
            }
            else{
                this.currentFinAttackCounter = 0;
                this.currentFinAttack = false; 
                this.playAnimation(this.SWIM_IMAGES); 
                clearInterval(finAttackInterval);
            }
        }, 100);
    
       
    }
    bubbleAttack(){
       
        let bubbleAttackInterval = setInterval(() => {
            if(this.currentBubbleAttackCounter < 8){
    
                if(this.collectedPoisons > 0 && this.world.characterisAtEndboss){
                    console.log("Posion > 0" + this.collectedPoisons.length ); 
                    this.playAnimation(this.BUBBLE_POSION_ATTACK_IMAGE);
                }
                else{
                    console.log("Posion < 0"); 
                    this.playAnimation(this.BUBBLE_ATTACK_IMAGE);  
                }
                this.currentBubbleAttackCounter++; 
            }
            else{
                if(!this.otherDirection){
                    this.world.bubbles.push(new Bubble(this.posX + this.width-20, this.posY + (this.height/2) , "R" , ((this.collectedPoisons - this.poisonAttacks ) > 0 && this.world.characterisAtEndboss)));
                    if((this.collectedPoisons - this.poisonAttacks ) > 0 && this.world.characterisAtEndboss){
                        this.poisonAttacks ++; 
                        this.world.statusBar_Poison.setPercentage( this.calcPosionPercentage() ); 
                    }
                }
                else{
                    this.world.bubbles.push(new Bubble(this.posX + 20, this.posY + (this.height/2), "L", ((this.collectedPoisons - this.poisonAttacks ) > 0 && this.world.characterisAtEndboss) )); 
                    if((this.collectedPoisons - this.poisonAttacks ) > 0 && this.world.characterisAtEndboss){
                        this.poisonAttacks ++; 
                        this.world.statusBar_Poison.setPercentage( this.calcPosionPercentage() ); 
                    }
                }
                //this.world.bubble.visible = true; 
                this.currentBubbleAttackCounter = 0;
                this.currentBubbleAttack = false; 
                this.playAnimation(this.SWIM_IMAGES); 
                clearInterval(bubbleAttackInterval);
            }
        }, 100);

    }

    calcPosionPercentage(){
        let calc = ((this.collectedPoisons  - this.poisonAttacks) / ( this.world.level.poisons.length + this.collectedPoisons + this.poisonAttacks) ) * 100; 
        console.log("gesammelt: " + this.collectedPoisons); 
        console.log("attacken: " + this.poisonAttacks); 
        console.log("gesamt in welt: " + this.world.level.poisons.length); 
        console.log("Ergebis: " + calc); 
        return calc; 
    }

    characterDied(){

        document.getElementById("GameOverScreen").classList.remove("dsp-none");
        this.world.pause = true; 

    }


}