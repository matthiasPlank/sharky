class World{

    canvas; 
    character = new Character(); 
    enemies = [
        new Enemy(), 
        new Enemy( ), 
        new Enemy( )
    ]; 
    backgroundObjects = [
        new BackgroundObject("./img/3. Background/Layers/5. Water/D.png"),
        new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D.png"), 
        new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D.png"), 
        new BackgroundObject("./img/3. Background/Layers/2. Floor/D.png"), 
        new BackgroundObject("./img/3. Background/Layers/1. Light/COMPLETO.png"), 
    ]
    ctx; 
    keyboard; 

    constructor(canvas , keyboard){
        this.canvas = canvas; 
        this.ctx = canvas.getContext("2d");
        this.keyboard = keyboard; 
        this.draw(); 
        this.setWorld(); 
    }

    setWorld(){
        this.character.world = this; 
    }


    draw(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectArrayToMap(this.backgroundObjects); 
        this.drawOnMap(this.character); 
        this.addObjectArrayToMap(this.enemies); 

        
        
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
        this.ctx.drawImage(object.img , object.posX , object.posY, object.width , object.height) ; 
    }
}