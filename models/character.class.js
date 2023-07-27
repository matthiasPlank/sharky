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

    animateMove(){
        this.animateIntervallMove = setInterval(()=>{
            this.swim_sound.pause(); 
            this.animateMoveHorizontal();
            this.animateMoveVertical();
            this.world.camera_x = -this.posX + 100;
         }, 1000 / 60);
    }

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

    animateImageIsDead(){
        if(this.dieAniamtionCounter < this.DEAD_IMAGES.length){
            this.playSingleAnimation(this.DEAD_IMAGES , this.dieAniamtionCounter ); 
            this.dieAniamtionCounter++;            
        } 
        else{
            this.characterDied(); 
        }
    }

    animateImageIsHurt(){
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

    calcLongIDLE(){
        const timepassed = new Date().getTime() - this.timeLastMove; 
        return timepassed > 5000; 
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

    bubbleAttackCharacterAnimation(){
        if(this.collectedPoisons > 0 && this.world.characterisAtEndboss){
            this.playAnimation(this.BUBBLE_POSION_ATTACK_IMAGE);
        }
        else{
            this.playAnimation(this.BUBBLE_ATTACK_IMAGE);  
        }
        this.currentBubbleAttackCounter++; 
    }
    
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
    }

    bubbleAttackCheckPoison( isPoisonBubble ){
        if(isPoisonBubble){
            this.poisonAttacks ++; 
            this.world.statusBar_Poison.setPercentage( this.calcPosionPercentage() ); 
        }
    }

    calcPosionPercentage(){
        let calc = ((this.collectedPoisons  - this.poisonAttacks) / ( this.world.level.poisons.length + this.collectedPoisons + this.poisonAttacks) ) * 100; 
        return calc; 
    }

    characterDied(){
        document.getElementById("GameOverScreen").classList.remove("dsp-none");
        document.getElementById("gameOverlayButtons").classList.add("dsp-none"); 
        this.world.pause = true; 
        clearInterval(this.animateIntervallMove); 
        clearInterval(this.animateIntervallAnimation)
    }
}