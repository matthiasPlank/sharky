let world;
let canvas; 
let keyboard = new Keyboard(); 
let isInFullscreen = false; 
let isInInstrction = false; 

function init(){}

function startGame(){
    document.getElementById("startScreen").classList.add("dsp-none"); 
    document.getElementById("gameOverlayButtons").classList.remove("dsp-none");
    let canvas = document.getElementById("canvas");
    initLevel(); 
    world = new World(canvas , keyboard); 
}

function restartGame(){
    document.getElementById("GameOverScreen").classList.add("dsp-none");  
    document.getElementById("winScreen").classList.add("dsp-none");    
    startGame();
}

function fullscreen(){
    console.log("switch to fullscreen"); 
    let myscreen = document.getElementById("canvasPanels");

    if(!isInFullscreen){
        isInFullscreen = true; 
        openFullscreen(myscreen);
        document.getElementById("fullscreenBtn").innerHTML = "Exit Fullscreen"; 
    }
    else{
        console.log("close fullscreen"); 
        isInFullscreen = false; 
        document.getElementById("fullscreenBtn").innerHTML = "Fullscreen"; 
        closeFullscreen(); 
    }
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
}
  
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
}


function instruction(){
    if(!isInInstrction){
        isInInstrction = true; 
        document.getElementById("instructionOverlay").classList.remove("dsp-none"); 
        document.getElementById("gameOverlayButtons").classList.add("dsp-none"); 
    }
    else{
        isInInstrction = false; 
        document.getElementById("instructionOverlay").classList.add("dsp-none"); 
        document.getElementById("gameOverlayButtons").classList.remove("dsp-none"); 
    }
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