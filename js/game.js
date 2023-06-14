let world;
let canvas; 
let keyboard = new Keyboard(); 

function init(){
    let canvas = document.getElementById("canvas");
    world = new World(canvas , keyboard); 
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
        default:
            break; 
      }
});