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

    constructor(canvas , keyboard){
        this.canvas = canvas; 
        this.keyboard = keyboard; 
        this.ctx = canvas.getContext("2d");
        this.draw(); 
        this.checkCollision(); 
        this.checkEndBossDistance(); 
        this.setWorld(); 
    }

    setWorld(){
        this.character.world = this; 
        this.endbossFromLevel.world = this; 
    }

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
    
    checkCollisionCharacterisHit(enemy){
        if(this.character.isColliding(enemy) && !enemy.isDeadFlag){
            this.character.lastHitBy = enemy.constructor.name; 
            this.character.isHit(); 
        }
    }

    checkCollisionCoin(){
        let iterationCountCoin = 0;
        this.level.coins.forEach((coin) => { 
            if(this.character.isColliding(coin)){
                this.level.coins.splice(iterationCountCoin, 1);
                this.character.collectedCoins ++; 
                this.statusBar_Coin.setPercentage( (this.character.collectedCoins / ( this.level.coins.length + this.character.collectedCoins) ) * 100);                 
            }
            iterationCountCoin++; 
        }); 
    }

    checkCollisionPoison(){
        let iterationCountPoison = 0;
        this.level.poisons.forEach((poison) => { 
            if(this.character.isColliding(poison)){
                this.level.poisons.splice(iterationCountPoison, 1);
                this.character.collectedPoisons ++; 
                this.statusBar_Poison.setPercentage(this.character.calcPosionPercentage()); 
            }
            iterationCountPoison++; 
        }); 
    }

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
    
    drawMoveableObjects(){
        this.addObjectArrayToMap(this.level.backgroundObjects); 
        this.drawOnMap(this.character); 
        this.addObjectArrayToMap(this.bubbles); 
        this.addObjectArrayToMap(this.level.coins); 
        this.addObjectArrayToMap(this.level.poisons); 
        this.addObjectArrayToMap(this.level.enemies); 
    }

    drawStatusBarObjects(){
        this.drawOnMap(this.statusBar_Life); 
        this.drawOnMap(this.statusBar_Coin); 
        this.drawOnMap(this.statusBar_Poison); 
        if(this.characterisAtEndboss){
            this.drawOnMap(this.statusBar_Endboss); 
        } 
    }

    addObjectArrayToMap(object){
        object.forEach(object => {
            this.drawOnMap(object); 
        });
    }
    
    drawOnMap(object){
        try{
            if(object.otherDirection){
               this.flipImage(object); 
            }
            object.draw(this.ctx);
            //object.drawFrame(this.ctx);
            if (object instanceof MovableObjects){
                object.drawFrameWithOffset(this.ctx);
                object.drawFrameWithOffsetAndRange(this.ctx);
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

    flipImage(object){
        this.ctx.save(); 
        this.ctx.translate(object.width, 0); 
        this.ctx.scale(-1, 1);
        object.posX = object.posX * -1; 
    }

    flipImageBack(object){
        object.posX = object.posX * -1; 
        this.ctx.restore();
    }

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

    removeBubble(index){
        setTimeout(() => {
            this.bubbles.splice(index, 1);
        }, 300);
    }
}