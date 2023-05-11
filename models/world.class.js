class World{

    canvas; 
    character = new Character(50 , 50); 
    enemies = [
        new Enemy( 100, 100), 
        new Enemy( 200, 100), 
        new Enemy( 50, 100)
    ]; 
    ctx; 

    constructor(canvas){
        this.canvas = canvas; 
        this.ctx = canvas.getContext("2d");
        this.draw(); 
    }
    draw(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img , this.character.posX , this.character.posY, this.character.width , this.character.height) ; 
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img , enemy.posX , enemy.posY, enemy.width , enemy.height) ; 
        });
        
        let self = this; 
        requestAnimationFrame(function (){
            self.draw();
        })
    }
}