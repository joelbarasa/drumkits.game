for (let i = 0; i < document.querySelectorAll(".set .drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClicks);
}
//Handle keyboard clicks..
function handleClicks() {
  playSound(this.innerHTML);
}

function playSound(key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    default:
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  }
  animateButton(key);
}

//Play Animation
function animateButton(value) {
  document.querySelector("." + value).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + value).classList.remove("pressed");
  }, 100);
}

//Handle KeyboardEvents
document.addEventListener("keydown", handleKeyBoard);
function handleKeyBoard(event) {
  playSound(event.key);
}
