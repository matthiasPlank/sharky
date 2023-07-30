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
    LONG_IDLE_IMAGES = [
        "img/1.Sharkie/2.Long_IDLE/i1.png", 
        "img/1.Sharkie/2.Long_IDLE/i2.png", 
        "img/1.Sharkie/2.Long_IDLE/i3.png", 
        "img/1.Sharkie/2.Long_IDLE/i4.png", 
        "img/1.Sharkie/2.Long_IDLE/i5.png", 
        "img/1.Sharkie/2.Long_IDLE/i6.png", 
        "img/1.Sharkie/2.Long_IDLE/i7.png", 
        "img/1.Sharkie/2.Long_IDLE/i8.png", 
        "img/1.Sharkie/2.Long_IDLE/i9.png", 
        "img/1.Sharkie/2.Long_IDLE/i10.png", 
        "img/1.Sharkie/2.Long_IDLE/i11.png", 
        "img/1.Sharkie/2.Long_IDLE/i12.png", 
        "img/1.Sharkie/2.Long_IDLE/i13.png", 
        "img/1.Sharkie/2.Long_IDLE/i14.png"
    ];
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
    hurt_shock_sound = new Audio('./audio/shock.mp3'); 
    hurt_hit_sound = new Audio('./audio/hurt2.mp3'); 
    bubble_sound = new Audio('./audio/bubble.mp3');
    fin_attack_sound = new Audio ('./audio/finAttack.mp3'); 
    lose_sound = new Audio ('./audio/lose.mp3');
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
    animateIntervallMove; 
    animateIntervallAnimation; 
    IDLESpeed = 0.5; 
    currentIDLEValue = this.IDLESpeed;
    timeLastMove= new Date().getTime();  
    longIDLECounter = 0; 
    playHitSound = true; 

    /**
     *  Creates a new instance of a character. 
     */
    constructor(){
          super().loadImage("img/1.Sharkie/3.Swim/1.png");
          this.loadImages(this.IDLE_IMAGES); 
          this.loadImages(this.LONG_IDLE_IMAGES);
          this.loadImages(this.SWIM_IMAGES); 
          this.loadImages(this.SHOCK_IMAGES); 
          this.loadImages(this.DEAD_IMAGES); 
          this.loadImages(this.HURT_IMAGES); 
          this.loadImages(this.ATTACK_IMAGE); 
          this.loadImages(this.BUBBLE_ATTACK_IMAGE);
          this.loadImages(this.BUBBLE_POSION_ATTACK_IMAGE); 
          this.animateMove(); 
          this.animateImage();
    }

    /**
     * Sets the interval that controls the character moves and hurt animation. 
     */
    animateMove(){
        this.animateIntervallMove = setInterval(()=>{
            this.swim_sound.pause(); 
            this.animateMoveHorizontal();
            this.animateMoveVertical();
            this.world.camera_x = -this.posX + 100;
         }, 1000 / 60);
    }

    /**
     * Checks the keys for a horizontal move an change horizintal position of the character. 
     */
    animateMoveHorizontal(){
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
    }

    /**
     * Checks the keys for a vertical move an change vertical position of the character. 
     */
    animateMoveVertical(){
        if( this.world.keyboard.UP ) {
            this.swim_sound.play(); 
            if(this.posY > -70){
                this.posY -= this.speed;
            }
        }
        if( this.world.keyboard.DOWN ) {
            this.swim_sound.play(); 
            if(this.posY < this.world.ctx.canvas.clientHeight - ((this.world.ctx.canvas.clientHeight / 100) * 25)){
                this.posY += this.speed;
            }
        }
    }

    /**
     * Set the interval thats controls the animnation of the character
     */
    animateImage(){
        this.animateIntervallAnimation = setInterval(()=>{
            if(this.isDead()){
                this.animateImageIsDead(); 
            }
            else if(this.isHurt()){
                this.animateImageIsHurt(); 
            }
            else{
                this.animateImageAttacks();
            }
        }, 100 )
    }

    /**
     * Plays the dead animation images of the character. 
     */
    animateImageIsDead(){
        if(this.dieAniamtionCounter < this.DEAD_IMAGES.length && this.isDead()){
            this.playSingleAnimation(this.DEAD_IMAGES , this.dieAniamtionCounter ); 
            this.dieAniamtionCounter++;            
        } 
        else if(this.isDead()){
            this.characterDied(); 
        }
    }

    /**
     * Plays the hurt animation images of the character. 
     */
    animateImageIsHurt(){
        if(this.lastHitBy == "Pufferfish"){
            this.playHitSound ? this.playhitSound(this.hurt_hit_sound) : ""; 
            this.playAnimation(this.HURT_IMAGES); 
        }
        else if(this.lastHitBy == "Jellyfish"){
            this.playHitSound ? this.playhitSound(this.hurt_shock_sound) : ""; 
            this.playAnimation(this.SHOCK_IMAGES); 
        }
        else{
            this.playHitSound ? this.playhitSound(this.hurt_hit_sound) : ""; 
            this.playAnimation(this.HURT_IMAGES); 
        }
    }

    /**
     * Checks the keys for a attack or move and plays the images of the action. With no action the character goes in IDLE mode. 
     */
    animateImageAttacks(){
        if (this.world.keyboard.SPACE && !this.currentFinAttack){
            this.currentFinAttack = true; 
            this.finAttack(); 
            this.timeLastMove = new Date().getTime();   
        }
        if(this.world.keyboard.KeyD && !this.currentBubbleAttack){
            this.currentBubbleAttack = true; 
            this.bubbleAttack(); 
            this.timeLastMove = new Date().getTime();   
        }
        if( (this.world.keyboard.RIGHT  || this.world.keyboard.LEFT ||  this.world.keyboard.UP ||  this.world.keyboard.DOWN) && (!this.currentFinAttack && !this.currentBubbleAttack) ) {
            this.playAnimation(this.SWIM_IMAGES); 
            this.timeLastMove = new Date().getTime();   
        }
        else{  
            this.animateImageIDLE(); 
        }
    }

    /**
     * Sets the IDLE Animation for short or long IDLE
     */
    animateImageIDLE(){
        if(this.currentIDLEValue >= 1 && !this.calcLongIDLE()){
            this.playAnimation(this.IDLE_IMAGES);
            this.currentIDLEValue = this.IDLESpeed; 
            this.longIDLECounter = 0;  
        } 
        else if(this.currentIDLEValue >= 1 && this.calcLongIDLE()){
            this.animateImageLongIDLE();
        }
        else{
            this.currentIDLEValue += this.IDLESpeed; 
        }  
    }

    /**
     * Sets the long IDLE animation
     */
    animateImageLongIDLE(){
        if(this.longIDLECounter < this.LONG_IDLE_IMAGES.length){
            this.playSingleAnimation(this.LONG_IDLE_IMAGES , this.longIDLECounter);
            this.longIDLECounter++; 
            this.currentIDLEValue = this.IDLESpeed;  
            if(this.posY < this.world.ctx.canvas.clientHeight - ((this.world.ctx.canvas.clientHeight / 100) * 25)){
                this.posY += this.speed/4;
            }
        } 
        else{
            this.longIDLECounter = 10; 
        }     
    }

    /**
     * 
     * @returns {boolean} if true, IDLE animation should be long.
     */
    calcLongIDLE(){
        const timepassed = new Date().getTime() - this.timeLastMove; 
        return timepassed > 5000; 
    }

    /**
     * Sets the animation during a fin attack.
     */
    finAttack(){
        let finAttackInterval = setInterval(() => {
            if(this.currentFinAttackCounter < 8){
                this.playAnimation(this.ATTACK_IMAGE);   
                this.currentFinAttackCounter++; 
            }
            else{
                this.fin_attack_sound.play()
                this.currentFinAttackCounter = 0;
                this.currentFinAttack = false; 
                this.playAnimation(this.SWIM_IMAGES); 
                clearInterval(finAttackInterval);
            }
        }, 100);
    }

     /**
     * Sets the animation during a bubble attack.
     */
    bubbleAttack(){
        let bubbleAttackInterval = setInterval(() => {
            if(this.currentBubbleAttackCounter < 8){
                this.bubbleAttackCharacterAnimation(); 
            }
            else{
                this.bubbleAttackCreateNewBubble(); 
                this.currentBubbleAttackCounter = 0;
                this.currentBubbleAttack = false; 
                this.playAnimation(this.SWIM_IMAGES); 
                clearInterval(bubbleAttackInterval);
            }
        }, 100);
    }

    /**
     * Sets the character animation befor/during a bubble attack.
     */
    bubbleAttackCharacterAnimation(){
        if(this.collectedPoisons > 0 && this.world.characterisAtEndboss){
            this.playAnimation(this.BUBBLE_POSION_ATTACK_IMAGE);
        }
        else{
            this.playAnimation(this.BUBBLE_ATTACK_IMAGE);  
        }
        this.currentBubbleAttackCounter++; 
    }
    
    /**
     * Creates a new bubble for the bubble attack. The bubble can be "normal" or "poisoned" and can be move left or right. 
     */
    bubbleAttackCreateNewBubble(){
        let isPoisonBubble = (this.collectedPoisons - this.poisonAttacks ) > 0 && this.world.characterisAtEndboss; 
        if(!this.otherDirection){
            this.world.bubbles.push(new Bubble(this.posX + this.width-20, this.posY + (this.height/2) , "R" , isPoisonBubble));
            this.bubbleAttackCheckPoison(isPoisonBubble); 
        }
        else{
            this.world.bubbles.push(new Bubble(this.posX + 20, this.posY + (this.height/2), "L", isPoisonBubble)); 
            this.bubbleAttackCheckPoison(isPoisonBubble); 
        }
        this.bubble_sound.play();
    }

    /**
     * Checks if the new created bubble is poisoned. If true, it counts the used poisions and refreshs the poison status bar. 
     * @param {boolean} isPoisonBubble - Is the bubble "normal" or "poisoned"
     */
    bubbleAttackCheckPoison( isPoisonBubble ){
        if(isPoisonBubble){
            this.poisonAttacks ++; 
            this.world.statusBar_Poison.setPercentage( this.calcPosionPercentage() ); 
        }
    }

    /**
     * Calculates the procentage value of the posion status bar.
     * @returns {number} - percentage value
     */
    calcPosionPercentage(){
        let calc = ((this.collectedPoisons  - this.poisonAttacks) / ( this.world.level.poisons.length + this.collectedPoisons + this.poisonAttacks) ) * 100; 
        return calc; 
    }

    /**
     * Sets the Overlaypanel if the character is died. 
     */
    characterDied(){
        console.log("character Died Funktion");
        document.getElementById("GameOverScreen").classList.remove("dsp-none");
        document.getElementById("gameOverlayButtons").classList.add("dsp-none"); 
        this.lose_sound.play();
        this.clearCharacterInvervals();
        this.world.pause = true; 
    }

    /**
     * Clears the character intervals
     */
    clearCharacterInvervals(){
        clearInterval(this.animateIntervallAnimation);
        clearInterval(this.animateIntervallMove);
    }

    /**
     * Plays a sound when the character is hit. 
     * @param {Audio} sound - sound to play.
     */
    playhitSound(sound){
        this.playHitSound ? sound.play() : "" ; 
        this.playHitSound = false; 
        setTimeout(() => {
            this.playHitSound = true; 
        }, 2000);
    }
}