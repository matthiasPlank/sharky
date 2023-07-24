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

    constructor(type){
        super();
        this.height = 50;
        this.width = 200;  
        this.posX = 20; 
        this.posY = 0; 
        if (type == "LIFE"){
            this.loadImage("img/4. Marcadores/green/Life/100_  copia 2.png");
            this.loadImages(this.IMAGES_LIFE); 
            this.posY = 0;  
            this.statusBarType = "LIFE"; 
        }
        else if (type == "COIN"){
            this.loadImage("img/4. Marcadores/green/Coin/0_  copia 4.png");
            this.loadImages(this.IMAGES_COIN); 
            this.posY = 40; 
            this.statusBarType = "COIN"; 
        }
        else if (type == "POISON"){
            this.loadImage("img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png");
            this.loadImages(this.IMAGES_POISON); 
            this.posY = 80; 
            this.statusBarType = "POISON"; 
        }
        else if (type == "ENDBOSS"){
            this.loadImage("img/4. Marcadores/Purple/100_ .png");
            this.loadImages(this.IMAGES_ENDBOSS); 
            this.posY = 0;
            this.posX = 500 
            this.statusBarType = "ENDBOSS"; 
        }
    }

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