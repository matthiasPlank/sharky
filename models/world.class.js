class World{

    character = new Character(); 
    enemies = []; 
    ctx; 

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.draw(); 
    }
    draw(){
        this.ctx.drawImage(this.character.img , 50 , 50, 50, 50); 
        console.log("draw wurde ausgeführt");
    }
}