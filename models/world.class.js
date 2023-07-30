class World{

    canvas; 
    character = new Character(); 
    level = level1;
    ctx; 
    keyboard; 
    camera_x = 0; 
    statusBar_Life = new StatusBar("LIFE"); 
    statusBar_Coin =  new StatusBar("COIN"); 
    statusBar_Poison = new StatusBar("POISON"); 
    statusBar_Endboss= new StatusBar("ENDBOSS"); 
    bubbles = []; 
    bubbleCounter = 0; 
    endbossFromLevel; 
    characterisAtEndboss = false; 
    pause = false; 
    coin_sound = new Audio('./audio/coin.mp3'); 
    collect_sound = new Audio ('audio/collectItem.mp3'); 

    /**
     * Creates a new instace world. 
     * @param {canvas} canvas - canvas for gameplay.
     * @param {Keyboard} keyboard - Keyboard for the gameplay. 
     */
    constructor(canvas , keyboard){
        this.canvas = canvas; 
        this.keyboard = keyboard; 
        this.ctx = canvas.getContext("2d");
        this.draw(); 
        this.checkCollision(); 
        this.checkEndBossDistance(); 
        this.setWorld(); 
    }

    /**
     * Set these world to character and endboss to have a relation back. 
     */
    setWorld(){
        this.character.world = this; 
        this.endbossFromLevel.world = this; 
    }

    /**
     * Sets interval to check collisions of enemy and character. 
     */
    checkCollision(){
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                this.checkCollisionFinAttack(enemy); 
                this.checkCollisionBubbleAttack(enemy); 
                this.checkCollisionCharacterisHit(enemy);
            }); 
          this.checkCollisionCoin();
          this.checkCollisionPoison();              
        }, 200);
    }

    /**
     * Checks is the fin attack of the character hits an instance of enemy
     * @param {Enemy} enemy - instance of an enemy
     */
    checkCollisionFinAttack(enemy){
        if(this.character.currentFinAttack && this.character.isInAttackRange(enemy) && !enemy.isDeadFlag){
            if(enemy instanceof Pufferfish){
                enemy.die(); 
            }
            if(enemy instanceof Endboss){
                this.endbossFromLevel.isHitbyFin();
            }
        }
    }

    /**
     * Checks is the bubble attack of the character hits an instance of enemy
     * @param {Enemy} enemy - instance of an enemy
     */
    checkCollisionBubbleAttack(enemy){
        this.bubbleCounter = 0; 
        this.bubbles.forEach(bubble => {
            if (bubble.isColliding(enemy) && enemy instanceof Jellyfish && !enemy.isDeadFlag){
                enemy.dieBubbleAnimation(); 
                this.removeBubble(this.bubbleCounter); 
            }
            if( bubble.isColliding(enemy) && enemy instanceof Endboss && !enemy.isDeadFlag){
                this.endbossFromLevel.isHitbyBubble(bubble); 
                this.removeBubble(this.bubbleCounter); 
            }
            this.bubbleCounter++; 
        });
    }

    /**
     * Checks if the enemy is collding/hit the character. 
     * @param {Enemy} enemy - instance of an enemy
     */
    checkCollisionCharacterisHit(enemy){
        if(this.character.isColliding(enemy) && !enemy.isDeadFlag){
            this.character.lastHitBy = enemy.constructor.name; 
            this.character.isHit(); 
        }
    }

    /**
     * Check for each coin if the character is colliding with it. 
     */
    checkCollisionCoin(){
        let iterationCountCoin = 0;
        this.level.coins.forEach((coin) => { 
            if(this.character.isColliding(coin)){
                this.playCollectSound(this.coin_sound);      
                this.level.coins.splice(iterationCountCoin, 1);
                this.character.collectedCoins ++; 
                this.statusBar_Coin.setPercentage( (this.character.collectedCoins / ( this.level.coins.length + this.character.collectedCoins) ) * 100);                 
            }
            iterationCountCoin++; 
        }); 
    }

    /**
     * Check for each poison if the character is colliding with it. 
     */
    checkCollisionPoison(){
        let iterationCountPoison = 0;
        this.level.poisons.forEach((poison) => { 
            if(this.character.isColliding(poison)){
                this.playCollectSound(this.collect_sound); 
                this.level.poisons.splice(iterationCountPoison, 1);
                this.character.collectedPoisons ++; 
                this.statusBar_Poison.setPercentage(this.character.calcPosionPercentage()); 
            }
            iterationCountPoison++; 
        }); 
    }

    /**
     * Draw all objects to the canvas. 
     */
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x , 0); 
        this.drawMoveableObjects(); 
        this.ctx.translate(-this.camera_x , 0); 
        this.drawStatusBarObjects(); 
        let self = this; 
        requestAnimationFrame(function (){
            if(!self.pause){
                self.draw();
            }
        })
    }
    
    /**
     * Draw the moveableObjects on the canvas. 
     */
    drawMoveableObjects(){
        this.addObjectArrayToMap(this.level.backgroundObjects); 
        this.drawOnMap(this.character); 
        this.addObjectArrayToMap(this.bubbles); 
        this.addObjectArrayToMap(this.level.coins); 
        this.addObjectArrayToMap(this.level.poisons); 
        this.addObjectArrayToMap(this.level.enemies); 
    }

    /**
     * Draw the statusbar objects on the canvas. 
     */
    drawStatusBarObjects(){
        this.drawOnMap(this.statusBar_Life); 
        this.drawOnMap(this.statusBar_Coin); 
        this.drawOnMap(this.statusBar_Poison); 
        if(this.characterisAtEndboss){
            this.drawOnMap(this.statusBar_Endboss); 
        } 
    }

    /**
     * Draws an array of drawableObjects on the canvas. 
     * @param {DrawableObjects[]} object - array of drawable objects.
     */
    addObjectArrayToMap(object){
        object.forEach(object => {
            this.drawOnMap(object); 
        });
    }
    
    /**
     * Draws an specific object on the canvas. 
     * @param {DrawableObjects} object 
     */
    drawOnMap(object){
        /* Kommentare in diesem Bereich werden vor Finaler abgabe nochmal entfernt.*/
        try{
            if(object.otherDirection){
               this.flipImage(object); 
            }
            object.draw(this.ctx);
            //object.drawFrame(this.ctx);
            if (object instanceof MovableObjects){
                //object.drawFrameWithOffset(this.ctx); 
                //object.drawFrameWithOffsetAndRange(this.ctx);
            }
            if(object.otherDirection){
               this.flipImageBack(object);
            }
        }
        catch(e){
            debugger; 
            console.warn("Could not load Image"); 
        }
    }

    /**
     * Flips the canvas context before drawing image on canvas.  
     * @param {DrawableObjects} object 
     */
    flipImage(object){
        this.ctx.save(); 
        this.ctx.translate(object.width, 0); 
        this.ctx.scale(-1, 1);
        object.posX = object.posX * -1; 
    }

    /**
     * Sets the canvas context back. 
     * @param {DrawableObjects} object 
     */
    flipImageBack(object){
        object.posX = object.posX * -1; 
        this.ctx.restore();
    }

    /**
     * Checks if the chrarcter is nearly at the endboss.
     */
    checkEndBossDistance(){
        let enemies = this.level.enemies; 
        enemies.forEach(enemie => {
            if(enemie instanceof Endboss){
                this.endbossFromLevel = enemie; 
            }
        });
        setInterval(() => {
                if( ( ( this.character.posX + 600) > this.endbossFromLevel.posX ) && !this.endbossFromLevel.introPlayed && !this.characterisAtEndboss){
                    this.endbossFromLevel.playIntro(); 
                    this.characterisAtEndboss = true;                   
                }
        }, 200);
    }

    /**
     * Removes an bubble at specific index, when hit an enemy.
     * @param {number} index - index of bubble array.
     */
    removeBubble(index){
        setTimeout(() => {
            this.bubbles.splice(index, 1);
        }, 300);
    }

    /**
     * Plays a sound for collectable Item. 
     * @param {Audio} sound 
     */
    playCollectSound(sound){
        var newCoinAudio = sound.cloneNode(true);
        newCoinAudio.play();
    }
}