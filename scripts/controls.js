const screen = document.querySelector(".screen");
const playBtn = document.querySelector(".playBtn");
const gameRules = document.querySelector(".start");
const startButton = document.querySelector("#start-game");
const restartButton = document.querySelector("#restart-game");

const backgroundMusic = new createSound("background.mp3");
const battleMusic = new createSound("battleStart.mp3");
const pokemonCaughtMusic = new createSound("pokemonCaught.mp3");
const pokemonScapeMusic = new createSound("pokemonScape.mp3");
const finishMusic = new createSound("finish.mp3");
const clickSound = new createSound("click.wav");

playBtn.onclick = () => {
  const screenBorders = document.querySelector(".border-screen");
  const screenMain = document.querySelector(".main-screen");
  clickSound.play();

  setTimeout(() => {
    screen.style = "width: 39rem; border: none; background: transparent";
    screenBorders.classList.toggle("visible");
    screenMain.classList.toggle("visible");
    playBtn.style.display = "none";
    gameRules.style.opacity = 1;
    backgroundMusic.play();
  }, 300);
};

startButton.onclick = () => {
  clickSound.play();
  gameRules.style.display = "none";
};
restartButton.onclick = () => {
  clickSound.play();
  setTimeout(() => {
    window.location.reload();
  }, 500);
};
function createSound(name) {
  const src = "./assets/sounds/" + name;

  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  if (name.split(".")[0] === "background") {
    this.sound.volume = 0.1;
    this.sound.loop = true;
  } else this.sound.volume = 0.3;

  document.body.appendChild(this.sound);

  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
    if (name !== "background") this.sound.currentTime = 0;
  };
}

const leftButtons = document.querySelectorAll(".leftButton");
const rightButtons = document.querySelectorAll(".rightButton");
const upButtons = document.querySelectorAll(".upButton");
const downButtons = document.querySelectorAll(".downButton");

for (const i of leftButtons) {
  i.onmousedown = () => handleButtonClick("left");
  i.ontouchstart = () => handleButtonClick("left");

  i.onmouseup = () => handleButtonRelease("left");
  i.ontouchend = () => handleButtonRelease("left");
}

for (const i of rightButtons) {
  i.onmousedown = () => handleButtonClick("right");
  i.ontouchstart = () => handleButtonClick("right");

  i.onmouseup = () => handleButtonRelease("right");
  i.ontouchend = () => handleButtonRelease("right");
}

for (const i of upButtons) {
  i.onmousedown = () => handleButtonClick("up");
  i.ontouchstart = () => handleButtonClick("up");

  i.onmouseup = () => handleButtonRelease("up");
  i.ontouchend = () => handleButtonRelease("up");
}

for (const i of downButtons) {
  i.onmousedown = () => handleButtonClick("down");
  i.ontouchstart = () => handleButtonClick("down");

  i.onmouseup = () => handleButtonRelease("down");
  i.ontouchend = () => handleButtonRelease("down");
}

function handleButtonClick(button) {
  keys[button].pressed = true;
  lastKey = button;
}

function handleButtonRelease(button) {
  keys[button].pressed = false;
}
