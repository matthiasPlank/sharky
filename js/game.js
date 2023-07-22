let world;
let canvas; 
let keyboard = new Keyboard(); 


function init(){
  
  
}

function startGame(){
    document.getElementById("startScreen").classList.add("dsp-none"); 
    let canvas = document.getElementById("canvas");
    initLevel(); 
    world = new World(canvas , keyboard); 
}
function restartGame(){
    document.getElementById("GameOverScreen").classList.add("dsp-none");  
    document.getElementById("winScreen").classList.add("dsp-none");    
    startGame();
}

window.addEventListener("keydown", (event) => {
    //console.log(event); 
    switch (event.code) {
        case 'ArrowUp':
          keyboard.UP = true; 
          break;
        case 'ArrowDown':
            keyboard.DOWN = true; 
            break;
        case 'ArrowLeft':
            keyboard.LEFT = true; 
            break;  
        case 'ArrowRight':
            keyboard.RIGHT = true; 
            break;
        case 'Space':
            keyboard.SPACE = true; 
            break;
        case 'KeyD':
            keyboard.KeyD = true; 
            //console.log(event); 
        break;
        default:
            break; 
      }
});

window.addEventListener("keyup", (event) => {
    //console.log(event); 
    switch (event.code) {
        case 'ArrowUp':
          keyboard.UP = false; 
          break;
        case 'ArrowDown':
            keyboard.DOWN = false; 
            break;
        case 'ArrowLeft':
            keyboard.LEFT = false; 
            break;  
        case 'ArrowRight':
            keyboard.RIGHT = false; 
            break;
        case 'Space':
            keyboard.SPACE = false; 
            break;
        case 'KeyD':
            keyboard.KeyD = false; 
            //console.log(event); 
        break;
        default:
            break; 
      }
});