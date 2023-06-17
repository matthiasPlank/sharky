class DrawableObjects{

    posX = 100; 
    posY = 100;
    img; 
    height = 100; 
    width = 100; 
    imageCache = {}; 
    currentImage = 0 ; 

    constructor(){
        
    }

    loadImage(path){
        this.img = new Image(); 
        this.img.src = path; 
    }

    loadImages(imgPaths){
        imgPaths.forEach(path => {
            let img = new Image();
            img.src = path; 
            this.imageCache[path] = img ;  
        });
    }
    draw(ctx){
        ctx.drawImage(this.img , this.posX , this.posY, this.width , this.height) ; 
    }
    drawFrame(ctx){

        if(this instanceof Character || this instanceof Enemy ){
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "red";
            ctx.rect( this.posX , this.posY ,  this.width , this.height); 
            ctx.stroke(); 
        }
    }
}