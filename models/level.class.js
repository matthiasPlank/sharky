class Level{

    enemies; 
    backgroundObjects; 
    coins; 
    level_end_x = 2500; 

    constructor(enemies, backgroundObjects, coins){
        this.enemies = enemies; 
        this.backgroundObjects = backgroundObjects; 
        this.coins = coins; 
    }
}