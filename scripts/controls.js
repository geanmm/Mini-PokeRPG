const screen = document.querySelector(".screen");
const playBtn = document.querySelector(".playBtn");

const backgroundMusic = new createSound("background");
const battleMusic = new createSound("battleStart");
const pokemonCaughtMusic = new createSound("pokemonCaught");
const pokemonScapeMusic = new createSound("pokemonScape");
const finishMusic = new createSound("finish");

playBtn.onclick = () => {
  const screenBorders = document.querySelector(".border-screen");
  const screenMain = document.querySelector(".main-screen");

  setTimeout(() => {
    screen.style = "width: 39rem; border: none; background: transparent";
    screenBorders.classList.toggle("visible");
    screenMain.classList.toggle("visible");
    playBtn.style.display = "none";
    backgroundMusic.play();
  }, 300);
};

function createSound(name) {
  const src = `./assets/sounds/${name}.mp3`;

  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  if (name === "background") this.sound.volume = 0.1;
  else this.sound.volume = 0.2;

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
