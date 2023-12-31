const flickeringTransition = document.querySelector(".flickeringScreen");
const hTransition = document.querySelector(".horizontalT");
const vTransition = document
  .querySelector(".verticalT")
  .getElementsByTagName("span");
const battleScreen = document.querySelector(".battleStart");

function startBattle() {
  backgroundMusic.stop();
  battleMusic.play();
  handleBattleRender();
  flickeringTransition.classList.toggle("flicker");

  setTimeout(() => {
    hTransition.classList.toggle("hShow");
    setTimeout(() => {
      for (let i = 0; i < vTransition.length; i++) {
        vTransition[i].style = "opacity: 1; height: 0px";
      }
      battleScreen.classList.toggle("show");
      battleScreen.style.pointerEvents = "all";
      setTimeout(() => {}, 500);
    }, 500);
  }, 1000);
}

function getRandomPokemon() {
  const index = Math.floor(Math.random() * pokemonData.length);
  const pokemon = pokemonData[index];

  return pokemon;
}

const shuffleArray = (array) => {
  let actual = array.length,
    temp,
    random;

  while (0 !== actual) {
    random = Math.floor(Math.random() * actual);
    actual -= 1;

    temp = array[actual];
    array[actual] = array[random];
    array[random] = temp;
  }

  return array;
};

function handleBattleRender() {
  let options = [];

  const pokemonAnswer = getRandomPokemon();
  options.push(pokemonAnswer);

  while (options.length < 4) {
    const pokemon = getRandomPokemon();
    if (options.indexOf(pokemon) === -1) {
      options.push(pokemon);
    }
  }
  renderPokemon(pokemonAnswer, options);
}

const imageContainer = document.querySelector(".pokemon");
const genderContainer = document.querySelector(".gender");
const lvlContainer = document.querySelector(".lvl");
const optionsContainer = document.querySelector(".options");
const nameContainer = document.querySelector(".name");

const nextBtn = document.querySelector(".next");
const retryBtn = document.querySelector(".retry");

let storage = [];

function renderPokemon(pokemon, options) {
  const randomizeGender = (id) => {
    if (pokeGenderUndefined.indexOf(id) === -1) {
      const genderIndex = Math.floor(Math.random() * 2);
      return pokemonGender[genderIndex].sprite;
    }
    return pokemonGender[2].sprite;
  };

  resetInfo();

  imageContainer.style = `background-image: url(${pokemon.sprite})`;
  genderContainer.style = `background-image: url(${randomizeGender(
    pokemon.id
  )})`;
  lvlContainer.innerText = `Lv${Math.floor(Math.random() * 99)}`;

  const randomArray = shuffleArray(options);

  randomArray.forEach((item) => {
    optionsContainer.innerHTML += `<span class="option">${item.name}</span>`;
  });

  const pokemonOption = document.querySelectorAll(".option");

  pokemonOption.forEach((item) => {
    item.addEventListener("click", (e) => {
      const selected = e.target;

      const reveal = () => {
        nameContainer.innerHTML = pokemon.name;
        imageContainer.classList.add("rightAnswer");
      };

      if (selected.innerText.toLowerCase() === pokemon.name) {
        battleMusic.stop();
        pokemonCaughtMusic.play();
        reveal();
        storage.push(pokemon);
        optionsContainer.innerHTML = `<span class="post">You've caught a ${pokemon.name.toUpperCase()}!</span>`;

        nextBtn.classList.add("show");
      } else {
        battleMusic.stop();
        pokemonScapeMusic.play();
        reveal();
        optionsContainer.innerHTML = `<span class="post">Nice try, but the pokemon was a ${pokemon.name}</span>`;
        retryBtn.classList.add("show");
      }
    });
  });

  nextBtn.onclick = () => {
    clickSound.play();
    finishBattle();
  };
  retryBtn.onclick = () => {
    clickSound.play();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  function resetInfo() {
    optionsContainer.innerText = ``;
    nameContainer.innerText = "???";
    imageContainer.classList.remove("rightAnswer");
    nextBtn.classList.remove("show");
    retryBtn.classList.remove("show");
  }
}

function finishBattle() {
  hTransition.classList.toggle("hShow");
  vTransition[0].removeAttribute("style");
  vTransition[1].removeAttribute("style");
  battleScreen.classList.toggle("show");
  battleScreen.style.pointerEvents = "none";

  playerStatus.fighting = false;
  battleMusic.stop();
  pokemonCaughtMusic.stop();
  backgroundMusic.play();
}
