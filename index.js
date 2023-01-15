


let buttons = document.querySelectorAll("button");

let buttonsArrayLength = buttons.length;

for (counter = 0; counter < buttonsArrayLength; counter++){
    let button = buttons[counter];
    
    if(counter === 0) {
            button.addEventListener("click", function() {
            playSound("./sounds/crash.mp3");
        });
    } else if (counter === 1) {
            button.addEventListener("click", function() {
            playSound("./sounds/kick-bass.mp3");
        });
    } else if (counter === 2) {
            button.addEventListener("click", function() {
            playSound("./sounds/snare.mp3");
        });
    } else if (counter === 3) {
            button.addEventListener("click", function() {
            playSound("./sounds/tom-1.mp3");
        });
    } else if (counter === 4) {
            button.addEventListener("click", function() {
            playSound("./sounds/tom-2.mp3");
        });
    } else if (counter === 5) {
            button.addEventListener("click", function() {
            playSound("./sounds/tom-3.mp3");
        }); 
        } else if (counter === 6) {
            button.addEventListener("click", function() {
            playSound("./sounds/tom-4.mp3");
        });
    }
}

// events

function playSound(file){
    let audio = new Audio(file);
    audio.play();
}
