const screen = document.querySelector(".screen");
const playBtn = document.querySelector(".playBtn");

playBtn.onclick = () => {
  const screenBorders = document.querySelector(".border-screen");
  const screenMain = document.querySelector(".main-screen");

  setTimeout(() => {
    screen.style = "width: 39rem; border: none; background: transparent";
    screenBorders.classList.toggle("visible");
    screenMain.classList.toggle("visible");
    playBtn.style.display = "none";
  }, 300);
};

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
