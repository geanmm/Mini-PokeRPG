const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
//350%
canvas.width = 504;
canvas.height = 288;

//Imagens
const backgroundImage = new Image();
backgroundImage.src = "./assets/GameMap.png";

const foregroundImage = new Image();
foregroundImage.src = "./assets/ForegroundObjects.png";

const playerDownImage = new Image();
playerDownImage.src = "./assets/MoveDown.png";
const playerUpImage = new Image();
playerUpImage.src = "./assets/MoveUp.png";
const playerLeftImage = new Image();
playerLeftImage.src = "./assets/MoveLeft.png";
const playerRightImage = new Image();
playerRightImage.src = "./assets/MoveRight.png";

const offset = {
  x: -280,
  y: -370,
};

//Mapa 40x60 tiles
const collisionsMap = [];
const battleAreaMap = [];
const finishAreaMap = [];
//Separar todas as 60 linhas (40 colunas)
for (let i = 0; i < collisions.length; i += 40) {
  collisionsMap.push(collisions.slice(i, i + 40));
  battleAreaMap.push(battleAreaData.slice(i, i + 40));
  finishAreaMap.push(finishArea.slice(i, i + 40));
}

const boundaries = [];
collisionsMap.forEach((row, i) => {
  row.forEach((item, j) => {
    if (item === 1)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

const battleAreas = [];
battleAreaMap.forEach((row, i) => {
  row.forEach((item, j) => {
    if (item === 1)
      battleAreas.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

const gameEndArea = [];
finishAreaMap.forEach((row, i) => {
  row.forEach((item, j) => {
    if (item === 1)
      gameEndArea.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});
//Sprite 240x80
const player = new Sprite({
  position: {
    x: canvas.width / 2 - 240 / 4 / 2,
    y: canvas.height / 2 - 80 / 2,
  },
  image: playerDownImage,
  frames: {
    max: 4,
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    down: playerDownImage,
    right: playerRightImage,
  },
});

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: backgroundImage,
});

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: foregroundImage,
});

const keys = {
  up: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
  right: {
    pressed: false,
  },
};
const movables = [
  background,
  foreground,
  ...boundaries,
  ...battleAreas,
  ...gameEndArea,
];
function rectangularCollision({ object1, object2 }) {
  return (
    object1.position.x + object1.width - 10 >= object2.position.x &&
    object1.position.x + 10 <= object2.position.x + object2.width &&
    object1.position.y + 35 <= object2.position.y + object2.height &&
    object1.position.y + object1.height >= object2.position.y
  );
}

const playerStatus = {
  fighting: false,
  finish: false,
};
// console.log(imageLoading);

function animate() {
  window.requestAnimationFrame(animate);

  // console.log(imageLoading);

  background.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
  battleAreas.forEach((zone) => {
    zone.draw();
  });
  gameEndArea.forEach((tile) => {
    tile.draw();
  });
  player.draw();
  foreground.draw();

  let moving = true;
  player.moving = false;

  if (playerStatus.fighting || playerStatus.finish) return;
  //BattleZones
  if (
    keys.up.pressed ||
    keys.left.pressed ||
    keys.down.pressed ||
    keys.right.pressed
  ) {
    for (let i = 0; i < battleAreas.length; i++) {
      const battleArea = battleAreas[i];

      const overlappingWidth =
        Math.min(
          player.position.x + player.width,
          battleArea.position.x + battleArea.width
        ) - Math.max(player.position.x, battleArea.position.x);

      const overlappingHeight =
        Math.min(
          player.position.y + player.height,
          battleArea.position.y + battleArea.height
        ) - Math.max(player.position.y, battleArea.position.y);

      const overlappingArea = overlappingWidth * overlappingHeight;
      if (
        rectangularCollision({
          object1: player,
          object2: battleArea,
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 0.02
      ) {
        console.log("battle");
        playerStatus.fighting = true;
        startBattle();
        break;
      }
    }
    for (let i = 0; i < gameEndArea.length; i++) {
      const finish = gameEndArea[i];

      const overlappingWidth =
        Math.min(
          player.position.x + player.width,
          finish.position.x + finish.width
        ) - Math.max(player.position.x, finish.position.x);

      const overlappingHeight =
        Math.min(
          player.position.y + player.height,
          finish.position.y + finish.height
        ) - Math.max(player.position.y, finish.position.y);

      const overlappingArea = overlappingWidth * overlappingHeight;
      if (
        rectangularCollision({
          object1: player,
          object2: finish,
        }) &&
        overlappingArea > (player.width * player.height) / 2
      ) {
        playerStatus.finish = true;
        finishGame();
        break;
      }
    }
  }

  if (keys.up.pressed && lastKey === "up") {
    player.image = player.sprites.up;
    player.moving = true;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          object1: player,
          object2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3;
      });
  } else if (keys.left.pressed && lastKey === "left") {
    player.image = player.sprites.left;
    player.moving = true;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          object1: player,
          object2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3;
      });
  } else if (keys.down.pressed && lastKey === "down") {
    player.image = player.sprites.down;
    player.moving = true;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          object1: player,
          object2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3;
      });
  } else if (keys.right.pressed && lastKey === "right") {
    player.image = player.sprites.right;
    player.moving = true;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          object1: player,
          object2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3;
      });
  }
}
setTimeout(() => {
  animate();
}, 1000);
let lastKey = "";

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
    case "ArrowUp":
      keys.up.pressed = true;
      lastKey = "up";
      break;
    case "a":
    case "ArrowLeft":
      keys.left.pressed = true;
      lastKey = "left";
      break;
    case "s":
    case "ArrowDown":
      keys.down.pressed = true;
      lastKey = "down";
      break;
    case "d":
    case "ArrowRight":
      keys.right.pressed = true;
      lastKey = "right";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
    case "ArrowUp":
      keys.up.pressed = false;
      break;
    case "a":
    case "ArrowLeft":
      keys.left.pressed = false;
      break;
    case "s":
    case "ArrowDown":
      keys.down.pressed = false;
      break;
    case "d":
    case "ArrowRight":
      keys.right.pressed = false;
      break;
  }
});

function finishGame() {
  backgroundMusic.stop();
  finishMusic.play();
  console.log("gg");
}
