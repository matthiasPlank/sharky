let level1; 

function initLevel(){
    level1 = new Level(
        [
            new Pufferfish(), 
            new Pufferfish(), 
            new Pufferfish(), 
            new Jellyfish(), 
            new Endboss()
        ], 
        [
                new BackgroundObject("./img/3. Background/Layers/5. Water/D.png", 0),
                new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D.png", 0), 
                new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D.png", 0), 
                new BackgroundObject("./img/3. Background/Layers/2. Floor/D.png", 0), 
                new BackgroundObject("./img/3. Background/Layers/1. Light/COMPLETO.png", 0), 
                new BackgroundObject("./img/3. Background/Layers/5. Water/D.png", 1440),
                new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D.png", 1440), 
                new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D.png", 1440), 
                new BackgroundObject("./img/3. Background/Layers/2. Floor/D.png", 1440), 
                new BackgroundObject("./img/3. Background/Layers/1. Light/COMPLETO.png", 1440), 
                new BackgroundObject("./img/3. Background/Layers/5. Water/D.png", 2880),
                new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D.png", 2880), 
                new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D.png", 2880), 
                new BackgroundObject("./img/3. Background/Layers/2. Floor/D.png", 2880), 
                new BackgroundObject("./img/3. Background/Layers/1. Light/COMPLETO.png", 2880)  
        ], 
        [
            new Coin(400, 80), 
            new Coin(450, 90), 
            new Coin(500, 100), 
            new Coin(550, 90), 
            new Coin(600, 80)
        ], 
        [
            new Poison(250, 350), 
            new Poison(600, 340), 
            new Poison(1000, 350), 
            new Poison(2000, 350) 
        ] 
    );
}