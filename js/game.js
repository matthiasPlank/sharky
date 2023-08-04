let world;
let canvas; 
let keyboard = new Keyboard(); 
let isInFullscreen = false; 
let isInInstrction = false; 
let saveSoundStatus = false; 

let mobileUpBtn; 
let mobileDownBtn; 
let mobileLeftBtn;
let mobileRigthBtn; 
let mobileBubbleBtn; 
let mobileFinBtn; 

const soundOnPath = "img/custom/sound-medium-icon.png"; 
const soundOffPath = "img/custom/sound-off-icon.png"; 

let counter = 3; 
let animationPlayed = false; 

/**
 * Initial function
 */
function init(){
    mobileUpBtn = document.getElementById("mobileUpBtn"); 
    mobileDownBtn= document.getElementById("mobileDownBtn"); 
    mobileLeftBtn = document.getElementById("mobileLeftBtn"); 
    mobileRigthBtn = document.getElementById("mobileRigthBtn"); 
    mobileBubbleBtn = document.getElementById("mobileBubbleBtn"); 
    mobileFinBtn = document.getElementById("mobileFinBtn"); 
    mobileUpBtn.addEventListener("contextmenu", e => e.preventDefault());
    mobileDownBtn.addEventListener("contextmenu", e => e.preventDefault());
    mobileLeftBtn.addEventListener("contextmenu", e => e.preventDefault());
    mobileRigthBtn.addEventListener("contextmenu", e => e.preventDefault());
    mobileFinBtn.addEventListener("contextmenu", e => e.preventDefault());
    mobileBubbleBtn.addEventListener("contextmenu", e => e.preventDefault());
    setupMobileEvents(); 
}

/**
 * Creates the world and starts the game. 
 */
function startGame(){
    document.getElementById("startScreen").classList.add("dsp-none"); 
    document.getElementById("loadingScreen").classList.remove("dsp-none");
    let canvas = document.getElementById("canvas");
    initLevel(); 
    world = new World(canvas , keyboard); 
    world.gameIsMuted = saveSoundStatus; 
    if(!animationPlayed){
        countdownAnimation();
    }
    else{
        document.getElementById("loadingScreen").classList.add("dsp-none");
        document.getElementById("gameOverlayButtons").classList.remove("dsp-none");
    }
}

/**
 * Plays an countdown at the first gamestart.
 */
function countdownAnimation(){
    let counterHTML = document.getElementById("counter"); 
    setTimeout(() => {
        if(counter > 0){
            counter--; 
            counter === 0 ? counterHTML.innerHTML = "LOS!" : counterHTML.innerHTML = counter; 
            countdownAnimation(); 
        }
        else{
            animationPlayed = true; 
            document.getElementById("loadingScreen").classList.add("dsp-none");
            document.getElementById("gameOverlayButtons").classList.remove("dsp-none");
        }
    }, 1000);
}

/**
 * Reset Overlays and restarts game.
 */
function restartGame(){
    document.getElementById("GameOverScreen").classList.add("dsp-none");  
    document.getElementById("winScreen").classList.add("dsp-none");    
    world.character.clearCharacterInvervals(); 
    saveSoundStatus = world.gameIsMuted; 
    startGame();
}

/**
 * Toogle fullscreen on button click.
 */
function fullscreen(){
    let myscreen = document.getElementById("canvasPanels");

    if(!isInFullscreen){
        isInFullscreen = true; 
        openFullscreen(myscreen);
    }
    else{
        isInFullscreen = false; 
        closeFullscreen(); 
    }
}

/**
 * Sets the HTMLElement into fullscreen mode. 
 * @param {HTMLElement} elem 
 */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
}
  
/**
 * Close fullscreen mode for an HTMLElement. 
 * @param {HTMLElement} elem 
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
}

/**
 * Open/Close instruction oberlay by button. 
 */
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

/**
 * Intital configuration for the mobile "keyboard"
 */
function setupMobileEvents(){
    //*****UP****/
    mobileUpBtn.addEventListener("touchstart", () => { keyboard.UP = true});
    mobileUpBtn.addEventListener("touchend", () => { keyboard.UP = false});
    //*****DOWN****/
    mobileDownBtn.addEventListener("touchstart", () => {keyboard.DOWN = true});
    mobileDownBtn.addEventListener("touchend", () => { keyboard.DOWN = false});
    //*****LEFT****/
    mobileLeftBtn.addEventListener("touchstart", () => {keyboard.LEFT = true});
    mobileLeftBtn.addEventListener("touchend", () => {keyboard.LEFT = false});
    //*****Rigth****/
    mobileRigthBtn.addEventListener("touchstart", () => { keyboard.RIGHT = true});
    mobileRigthBtn.addEventListener("touchend", () => { keyboard.RIGHT = false});
    //*****FIN****/
    mobileFinBtn.addEventListener("touchstart", () => { keyboard.SPACE = true});
    mobileFinBtn.addEventListener("touchend", () => { keyboard.SPACE = false});
     //*****Bubble****/
    mobileBubbleBtn.addEventListener("touchstart", () => { keyboard.KeyD = true});
    mobileBubbleBtn.addEventListener("touchend", () => { keyboard.KeyD = false });
}

/**
 * Set eventlistener for "normal" Keyboard on the keydown event.
 */
window.addEventListener("keydown", (event) => {
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
        break;
        default:
            break; 
      }
});

/**
 * Manage the game sound and enables or disables the sounds in the game. 
 */
function toggleSound(){
    if(!world.gameIsMuted){
        document.getElementById("soundIcon").src = soundOffPath;
        world.gameIsMuted = true; 
    }
    else{
        document.getElementById("soundIcon").src = soundOnPath;
        world.gameIsMuted = false; 
    }
}

/**
 * Set eventlistener for "normal" Keyboard on the keyup event.
 */
window.addEventListener("keyup", (event) => {
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
        break;
        default:
            break; 
      }
});
