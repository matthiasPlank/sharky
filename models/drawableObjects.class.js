class DrawableObjects{

    posX = 100; 
    posY = 100;
    img; 
    height = 100; 
    width = 100; 
    imageCache = {}; 
    currentImage = 0 ; 

    constructor(){}

    /**
     * Sets the image of the Object.
     * @param {string} path - Path to loading image.
     */
    loadImage(path){
        this.img = new Image(); 
        this.img.src = path; 
    }

    /**
     * Sets the an array of images for the object. E.g for an "swim animation". 
     * @param {string[]} imgPaths- Array of path to the images of the object.
     */
    loadImages(imgPaths){
        imgPaths.forEach(path => {
            let img = new Image();
            img.src = path; 
            this.imageCache[path] = img ;  
        });
    }

    /**
     * Draw an image on the canvas.
     * @param {any} ctx - Context of the canvas. 
     */
    draw(ctx){
        ctx.drawImage(this.img , this.posX , this.posY, this.width , this.height) ; 
    }

    /**
     * Draw the drame of the Object on the canvas.
     * @param {any} ctx - Context of the canvas. 
     */
    drawFrame(ctx){
        if(this instanceof Character || this instanceof Enemy ){
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "red";
            ctx.rect( this.posX , this.posY ,  this.width , this.height); 
            ctx.stroke(); 
        }
    }

    /**
     * Draw the frame with an offset of the Object on the canvas.
     * @param {any} ctx - Context of the canvas. 
     */
    drawFrameWithOffset(ctx){
        if(this instanceof Character || this instanceof Enemy || this instanceof Bubble ){
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "blue";
            ctx.rect( this.posX + this.offset.left , this.posY + this.offset.top , this.width - this.offset.right - this.offset.left , this.height - this.offset.top - this.offset.bottom); 
            ctx.stroke(); 
        }
    }

    /**
     * Draws the frame with an offset and the attack range of the Object on the canvas.
     * @param {any} ctx - Context of the canvas. 
     */
    drawFrameWithOffsetAndRange(ctx){
        if(this instanceof Character || this instanceof Enemy || this instanceof Bubble  ){
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "red";
            ctx.rect( this.posX + this.offset.left - this.attackRange , this.posY + this.offset.top - this.attackRange, this.width - this.offset.right - this.offset.left + 2*this.attackRange , this.height - this.offset.top - this.offset.bottom + 2*this.attackRange); 
            ctx.stroke(); 
        }
    }
}

