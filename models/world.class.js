class World{

    canvas; 
    character = new Character(); 
    level = level1;
    ctx; 
    keyboard; 
    camera_x = 0; 

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

                if(this.character.isColliding(enemy)){
                    console.log("Character is colliding with" + enemy); 
                }
                else{
                    //console.log("No collision"); 
                }
            })
        }, 1000);
    }


    draw(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x , 0); 

        this.addObjectArrayToMap(this.level.backgroundObjects); 
        this.drawOnMap(this.character); 
        this.addObjectArrayToMap(this.level.enemies); 

        this.ctx.translate(-this.camera_x , 0); 
        
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
            object.drawFrame(this.ctx);

            if(object.otherDirection){
               this.flipImageBack(object);
            }
        }
        catch(e){
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