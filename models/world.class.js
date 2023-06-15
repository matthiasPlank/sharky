class World{

    canvas; 
    character = new Character(); 
    enemies = [
        new Enemy(), 
        new Enemy(), 
        new Enemy()
    ]; 
    backgroundObjects = [
 
            new BackgroundObject("./img/3. Background/Layers/5. Water/D.png", 0),
            new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D.png", 0), 
            new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D.png", 0), 
            new BackgroundObject("./img/3. Background/Layers/2. Floor/D.png", 0), 
            new BackgroundObject("./img/3. Background/Layers/1. Light/COMPLETO.png", 0), 
            new BackgroundObject("./img/3. Background/Layers/5. Water/D.png", 1440),
            new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D.png", 1440), 
            new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D.png", 1440), 
            new BackgroundObject("./img/3. Background/Layers/2. Floor/D.png", 1440), 
            new BackgroundObject("./img/3. Background/Layers/1. Light/COMPLETO.png", 1440), 
            new BackgroundObject("./img/3. Background/Layers/5. Water/D.png", 2880),
            new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D.png", 2880), 
            new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D.png", 2880), 
            new BackgroundObject("./img/3. Background/Layers/2. Floor/D.png", 2880), 
            new BackgroundObject("./img/3. Background/Layers/1. Light/COMPLETO.png", 2880),    
    ];
    ctx; 
    keyboard; 
    camera_x = 0; 

    constructor(canvas , keyboard){
        this.canvas = canvas; 
        this.keyboard = keyboard; 
        this.ctx = canvas.getContext("2d");
        this.draw(); 
        this.setWorld(); 
    }

    setWorld(){
        this.character.world = this; 
    }


    draw(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x , 0); 

        this.addObjectArrayToMap(this.backgroundObjects); 
        this.drawOnMap(this.character); 
        this.addObjectArrayToMap(this.enemies); 

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
                this.ctx.save(); 
                this.ctx.translate(object.width, 0); 
                this.ctx.scale(-1, 1);
                object.posX = object.posX * -1; 
            }
            this.ctx.drawImage(object.img , object.posX , object.posY, object.width , object.height) ; 
            if(object.otherDirection){
                object.posX = object.posX * -1; 
                this.ctx.restore();
            }
        }
        catch(e){
            console.log("Could not load Image"); 
        }
    }
}