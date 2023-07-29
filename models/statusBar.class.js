class StatusBar extends DrawableObjects{


    IMAGES_LIFE = [
        "img/4. Marcadores/green/Life/0_  copia 3.png", 
        "img/4. Marcadores/green/Life/20_ copia 4.png", 
        "img/4. Marcadores/green/Life/40_  copia 3.png", 
        "img/4. Marcadores/green/Life/60_  copia 3.png", 
        "img/4. Marcadores/green/Life/80_  copia 3.png", 
        "img/4. Marcadores/green/Life/100_  copia 2.png"
    ]; 
    IMAGES_COIN = [ 
        "img/4. Marcadores/green/Coin/0_  copia 4.png", 
        "img/4. Marcadores/green/Coin/20_  copia 2.png", 
        "img/4. Marcadores/green/Coin/40_  copia 4.png", 
        "img/4. Marcadores/green/Coin/60_  copia 4.png", 
        "img/4. Marcadores/green/Coin/80_  copia 4.png", 
        "img/4. Marcadores/green/Coin/100_ copia 4.png"
    ]; 
    IMAGES_POISON = [
        "img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png", 
        "img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png", 
        "img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png", 
        "img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png", 
        "img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png", 
        "img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png"
    ]; 
    IMAGES_ENDBOSS = [
        "img/4. Marcadores/Purple/0_ .png", 
        "img/4. Marcadores/Purple/20__1.png", 
        "img/4. Marcadores/Purple/40_ .png",
        "img/4. Marcadores/Purple/60_ .png",
        "img/4. Marcadores/Purple/80_ .png",
        "img/4. Marcadores/Purple/100_ .png"
    ]; 
    percentage = 100; 
    statusBarType; 
    height = 50;
    width = 200;  
    posX = 20; 
    posY = 0; 

    /**
     * Cerates a new statusbar. 
     * @param {string} type - defines the type of the statusbar (LIFE,COIN,POISON or ENDBOSS); 
     */
    constructor(type){
        super();
        if (type == "LIFE"){
            this.setInital("img/4. Marcadores/green/Life/100_  copia 2.png", this.IMAGES_LIFE , 0, this.posX , type);
        }
        else if (type == "COIN"){
            this.setInital("img/4. Marcadores/green/Coin/0_  copia 4.png", this.IMAGES_COIN , 40, this.posX , type);
        }
        else if (type == "POISON"){
            this.setInital("img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png", this.IMAGES_POISON , 80, this.posX , type);
        }
        else if (type == "ENDBOSS"){
            this.setInital("img/4. Marcadores/Purple/100_ .png" , this.IMAGES_ENDBOSS , 0 , 500 , type ); 
        }
    }

    /**
     * 
     * @param {string} imagePath - inital image path. 
     * @param {images[]} imagesArray - array of images for possible fill status.
     * @param {number} posY  -position of the status bar on the y-axis.
     * @param {number} posX - position of the status bar on the x-axis.
     * @param {string} statusBarType - type of the statusbar (LIFE,COIN,POISON or ENDBOSS); 
     */
    setInital( imagePath , imagesArray , posY , posX , statusBarType ){
        this.loadImage(imagePath);
        this.loadImages(imagesArray); 
        this.posY = posY;
        this.posX = posX;  
        this.statusBarType = statusBarType; 
    }

    /**
     * Sets the image for the percentage value of the statusbar.
     * @param {number} percentage - percentage value (0 - 100%).
     */
    setPercentage(percentage){
        this.percentage = percentage; 
        if (this.statusBarType == "LIFE"){
            this.loadImage(this.IMAGES_LIFE[this.getImageNumber()]);
        }
        else if (this.statusBarType == "COIN"){
            this.loadImage(this.IMAGES_COIN[this.getImageNumber()]);
        }
        else if (this.statusBarType == "POISON"){
            this.loadImage(this.IMAGES_POISON[this.getImageNumber()]);
        }
        else if (this.statusBarType == "ENDBOSS"){
            this.loadImage(this.IMAGES_ENDBOSS[this.getImageNumber()]);
        }
    }

    /**
     * Returns the image number for the percentage value of the status bar.  
     * @returns {number} - returns the image number 0 to 5.  
     */
    getImageNumber(){
       if(this.percentage > 99){
        return 5; 
       } else if (this.percentage > 80){
        return 4; 
       }else if (this.percentage > 60){
        return 3; 
       }else if (this.percentage > 20){
        return 2; 
       }else if(this.percentage > 0){
        return 1; 
       } else {
        return 0; 
       }
    }
}