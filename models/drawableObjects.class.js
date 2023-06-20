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
    drawFrameWithOffset(ctx){
        if(this instanceof Character || this instanceof Enemy ){
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "blue";
            ctx.rect( this.posX + this.offset.left , this.posY + this.offset.top , this.width - this.offset.right - this.offset.left , this.height - this.offset.top - this.offset.bottom); 
            //ctx.rect( this.posX - this.offsetX , this.posY - this.offsetY,  this.width - this.offset.right - this.offset.left , this.height - this.offset.top - this.offset.bottom); 
            ctx.stroke(); 
        }
    }
    drawFrameWithOffsetAndRange(ctx){
        if(this instanceof Character || this instanceof Enemy ){
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "red";
            ctx.rect( this.posX + this.offset.left - this.attackRange , this.posY + this.offset.top - this.attackRange, this.width - this.offset.right - this.offset.left + 2*this.attackRange , this.height - this.offset.top - this.offset.bottom + 2*this.attackRange); 
            //ctx.rect( this.posX - this.offsetX , this.posY - this.offsetY,  this.width - this.offset.right - this.offset.left , this.height - this.offset.top - this.offset.bottom); 
            ctx.stroke(); 
        }
    }
}

