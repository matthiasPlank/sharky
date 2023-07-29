class Level{

    enemies; 
    backgroundObjects; 
    coins; 
    poisons; 
    level_end_x = 2500; 

    /**
     * Creates a new instance of a level.
     * @param {Enemy[]} enemies - array of enemies. 
     * @param {BackgroundObject[]} backgroundObjects - array of backgroundobjects
     * @param {Coin[]} coins - array of coins. 
     * @param {Poison[]} poisons - array of poisons
     */
    constructor(enemies, backgroundObjects, coins, poisons){
        this.enemies = enemies; 
        this.backgroundObjects = backgroundObjects; 
        this.coins = coins; 
        this.poisons = poisons; 
    }
}