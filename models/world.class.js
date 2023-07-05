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
    bubbles = []; 

    constructor(canvas , keyboard){
        this.canvas = canvas; 
        this.keyboard = keyboard; 
        this.ctx = canvas.getContext("2d");
        this.draw(); 
        this.setWorld(); 
        this.checkCollision(); 
    }

    setWorld(){
        this.character.world = this; 
    }

    checkCollision(){
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                /* console.log(this.character); 
                console.log(enemy);  */
                if(this.character.currentFinAttack && this.character.isInAttackRange(enemy) && !enemy.isDead){
                    console.log("Character is attack " + enemy.constructor.name); 
                    if(enemy instanceof Pufferfish){
                        enemy.die(); 
                    }
                }
                this.bubbles.forEach(bubble => {
                    if (bubble.isColliding(enemy) && enemy instanceof Jellyfish){
                        console.log("Bubble colliding with enemy"); 
                        enemy.dieBubbleAnimation(); 
                    }
                });
                if(this.character.isColliding(enemy) && !enemy.isDead){
                    console.log("Character is colliding with: " + enemy.constructor.name); 
                    this.character.lastHitBy = enemy.constructor.name; 
                    this.character.isHit(); 
                    console.log("Charcter Engery: " + this.character.energy) 
                }
                else{
                    //console.log("No collision"); 
                }
            }); 
            let iterationCount = 0;
            this.level.coins.forEach((coin) => { 
                if(this.character.isColliding(coin)){
                    console.log("Character is colliding with: " + coin.constructor.name); 
                    this.character.collectedCoins ++; 
                    this.statusBar_Coin.setPercentage( (this.character.collectedCoins / ( this.level.coins.length + this.character.collectedCoins) ) * 100); 
                    //console.log("Collected Coins:" +  this.character.collectedCoins) ;   
                    //console.log("All Level Coins:" +  this.level.coins.length) ;   
                    //console.log("Percentage:" + (this.character.collectedCoins / this.level.coins.length)  * 100 );                    
                    this.level.coins.splice(iterationCount, 1);
                }
                iterationCount++; 
                //console.log(this.level.coins); 
            }); 
        }, 200);
    }

    draw(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x , 0); 

        this.addObjectArrayToMap(this.level.backgroundObjects); 
        this.drawOnMap(this.character); 
        this.addObjectArrayToMap(this.bubbles); 
        this.addObjectArrayToMap(this.level.coins); 
        this.addObjectArrayToMap(this.level.enemies); 
      

        this.ctx.translate(-this.camera_x , 0); 
        this.drawOnMap(this.statusBar_Life); 
        this.drawOnMap(this.statusBar_Coin); 
        this.drawOnMap(this.statusBar_Poison); 
        
        let self = this; 
        requestAnimationFrame(function (){
            self.draw();
        })
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
            console.log("Could not load Image"); 
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
}