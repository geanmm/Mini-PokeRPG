const pokemonData = [
  {
    id: 1,
    name: "bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
    types: ["grass", "poison"],
  },
  {
    id: 2,
    name: "ivysaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
    types: ["grass", "poison"],
  },
  {
    id: 3,
    name: "venusaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif",
    types: ["grass", "poison"],
  },
  {
    id: 4,
    name: "charmander",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
    types: ["fire"],
  },
  {
    id: 5,
    name: "charmeleon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif",
    types: ["fire"],
  },
  {
    id: 6,
    name: "charizard",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
    types: ["fire", "flying"],
  },
  {
    id: 7,
    name: "squirtle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
    types: ["water"],
  },
  {
    id: 8,
    name: "wartortle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif",
    types: ["water"],
  },
  {
    id: 9,
    name: "blastoise",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif",
    types: ["water"],
  },
  {
    id: 10,
    name: "caterpie",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif",
    types: ["bug"],
  },
  {
    id: 11,
    name: "metapod",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif",
    types: ["bug"],
  },
  {
    id: 12,
    name: "butterfree",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
    types: ["bug", "flying"],
  },
  {
    id: 13,
    name: "weedle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif",
    types: ["bug", "poison"],
  },
  {
    id: 14,
    name: "kakuna",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif",
    types: ["bug", "poison"],
  },
  {
    id: 15,
    name: "beedrill",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif",
    types: ["bug", "poison"],
  },
  {
    id: 16,
    name: "pidgey",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif",
    types: ["normal", "flying"],
  },
  {
    id: 17,
    name: "pidgeotto",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif",
    types: ["normal", "flying"],
  },
  {
    id: 18,
    name: "pidgeot",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif",
    types: ["normal", "flying"],
  },
  {
    id: 19,
    name: "rattata",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif",
    types: ["normal"],
  },
  {
    id: 20,
    name: "raticate",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/20.gif",
    types: ["normal"],
  },
  {
    id: 21,
    name: "spearow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/21.gif",
    types: ["normal", "flying"],
  },
  {
    id: 22,
    name: "fearow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/22.gif",
    types: ["normal", "flying"],
  },
  {
    id: 23,
    name: "ekans",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/23.gif",
    types: ["poison"],
  },
  {
    id: 24,
    name: "arbok",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/24.gif",
    types: ["poison"],
  },
  {
    id: 25,
    name: "pikachu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
    types: ["electric"],
  },
  {
    id: 26,
    name: "raichu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif",
    types: ["electric"],
  },
  {
    id: 27,
    name: "sandshrew",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/27.gif",
    types: ["ground"],
  },
  {
    id: 28,
    name: "sandslash",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/28.gif",
    types: ["ground"],
  },
  {
    id: 29,
    name: "nidoran-f",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/29.gif",
    types: ["poison"],
  },
  {
    id: 30,
    name: "nidorina",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/30.gif",
    types: ["poison"],
  },
  {
    id: 31,
    name: "nidoqueen",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/31.gif",
    types: ["poison", "ground"],
  },
  {
    id: 32,
    name: "nidoran-m",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/32.gif",
    types: ["poison"],
  },
  {
    id: 33,
    name: "nidorino",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/33.gif",
    types: ["poison"],
  },
  {
    id: 34,
    name: "nidoking",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/34.gif",
    types: ["poison", "ground"],
  },
  {
    id: 35,
    name: "clefairy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif",
    types: ["fairy"],
  },
  {
    id: 36,
    name: "clefable",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/36.gif",
    types: ["fairy"],
  },
  {
    id: 37,
    name: "vulpix",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/37.gif",
    types: ["fire"],
  },
  {
    id: 38,
    name: "ninetales",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/38.gif",
    types: ["fire"],
  },
  {
    id: 39,
    name: "jigglypuff",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/39.gif",
    types: ["normal", "fairy"],
  },
  {
    id: 40,
    name: "wigglytuff",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/40.gif",
    types: ["normal", "fairy"],
  },
  {
    id: 41,
    name: "zubat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/41.gif",
    types: ["poison", "flying"],
  },
  {
    id: 42,
    name: "golbat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/42.gif",
    types: ["poison", "flying"],
  },
  {
    id: 43,
    name: "oddish",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/43.gif",
    types: ["grass", "poison"],
  },
  {
    id: 44,
    name: "gloom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/44.gif",
    types: ["grass", "poison"],
  },
  {
    id: 45,
    name: "vileplume",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/45.gif",
    types: ["grass", "poison"],
  },
  {
    id: 46,
    name: "paras",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/46.gif",
    types: ["bug", "grass"],
  },
  {
    id: 47,
    name: "parasect",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/47.gif",
    types: ["bug", "grass"],
  },
  {
    id: 48,
    name: "venonat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/48.gif",
    types: ["bug", "poison"],
  },
  {
    id: 49,
    name: "venomoth",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/49.gif",
    types: ["bug", "poison"],
  },
  {
    id: 50,
    name: "diglett",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/50.gif",
    types: ["ground"],
  },
  {
    id: 51,
    name: "dugtrio",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/51.gif",
    types: ["ground"],
  },
  {
    id: 52,
    name: "meowth",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/52.gif",
    types: ["normal"],
  },
  {
    id: 53,
    name: "persian",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/53.gif",
    types: ["normal"],
  },
  {
    id: 54,
    name: "psyduck",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif",
    types: ["water"],
  },
  {
    id: 55,
    name: "golduck",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/55.gif",
    types: ["water"],
  },
  {
    id: 56,
    name: "mankey",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/56.gif",
    types: ["fighting"],
  },
  {
    id: 57,
    name: "primeape",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/57.gif",
    types: ["fighting"],
  },
  {
    id: 58,
    name: "growlithe",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/58.gif",
    types: ["fire"],
  },
  {
    id: 59,
    name: "arcanine",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/59.gif",
    types: ["fire"],
  },
  {
    id: 60,
    name: "poliwag",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/60.gif",
    types: ["water"],
  },
  {
    id: 61,
    name: "poliwhirl",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/61.gif",
    types: ["water"],
  },
  {
    id: 62,
    name: "poliwrath",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/62.gif",
    types: ["water", "fighting"],
  },
  {
    id: 63,
    name: "abra",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/63.gif",
    types: ["psychic"],
  },
  {
    id: 64,
    name: "kadabra",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/64.gif",
    types: ["psychic"],
  },
  {
    id: 65,
    name: "alakazam",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/65.gif",
    types: ["psychic"],
  },
  {
    id: 66,
    name: "machop",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/66.gif",
    types: ["fighting"],
  },
  {
    id: 67,
    name: "machoke",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/67.gif",
    types: ["fighting"],
  },
  {
    id: 68,
    name: "machamp",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/68.gif",
    types: ["fighting"],
  },
  {
    id: 69,
    name: "bellsprout",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/69.gif",
    types: ["grass", "poison"],
  },
  {
    id: 70,
    name: "weepinbell",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/70.gif",
    types: ["grass", "poison"],
  },
  {
    id: 71,
    name: "victreebel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/71.gif",
    types: ["grass", "poison"],
  },
  {
    id: 72,
    name: "tentacool",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/72.gif",
    types: ["water", "poison"],
  },
  {
    id: 73,
    name: "tentacruel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/73.gif",
    types: ["water", "poison"],
  },
  {
    id: 74,
    name: "geodude",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/74.gif",
    types: ["rock", "ground"],
  },
  {
    id: 75,
    name: "graveler",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/75.gif",
    types: ["rock", "ground"],
  },
  {
    id: 76,
    name: "golem",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/76.gif",
    types: ["rock", "ground"],
  },
  {
    id: 77,
    name: "ponyta",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/77.gif",
    types: ["fire"],
  },
  {
    id: 78,
    name: "rapidash",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/78.gif",
    types: ["fire"],
  },
  {
    id: 79,
    name: "slowpoke",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/79.gif",
    types: ["water", "psychic"],
  },
  {
    id: 80,
    name: "slowbro",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/80.gif",
    types: ["water", "psychic"],
  },
  {
    id: 81,
    name: "magnemite",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/81.gif",
    types: ["electric", "steel"],
  },
  {
    id: 82,
    name: "magneton",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/82.gif",
    types: ["electric", "steel"],
  },
  {
    id: 83,
    name: "farfetchd",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/83.gif",
    types: ["normal", "flying"],
  },
  {
    id: 84,
    name: "doduo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/84.gif",
    types: ["normal", "flying"],
  },
  {
    id: 85,
    name: "dodrio",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/85.gif",
    types: ["normal", "flying"],
  },
  {
    id: 86,
    name: "seel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/86.gif",
    types: ["water"],
  },
  {
    id: 87,
    name: "dewgong",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/87.gif",
    types: ["water", "ice"],
  },
  {
    id: 88,
    name: "grimer",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/88.gif",
    types: ["poison"],
  },
  {
    id: 89,
    name: "muk",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/89.gif",
    types: ["poison"],
  },
  {
    id: 90,
    name: "shellder",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/90.gif",
    types: ["water"],
  },
  {
    id: 91,
    name: "cloyster",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/91.gif",
    types: ["water", "ice"],
  },
  {
    id: 92,
    name: "gastly",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif",
    types: ["ghost", "poison"],
  },
  {
    id: 93,
    name: "haunter",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/93.gif",
    types: ["ghost", "poison"],
  },
  {
    id: 94,
    name: "gengar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif",
    types: ["ghost", "poison"],
  },
  {
    id: 95,
    name: "onix",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/95.gif",
    types: ["rock", "ground"],
  },
  {
    id: 96,
    name: "drowzee",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/96.gif",
    types: ["psychic"],
  },
  {
    id: 97,
    name: "hypno",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/97.gif",
    types: ["psychic"],
  },
  {
    id: 98,
    name: "krabby",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/98.gif",
    types: ["water"],
  },
  {
    id: 99,
    name: "kingler",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/99.gif",
    types: ["water"],
  },
  {
    id: 100,
    name: "voltorb",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif",
    types: ["electric"],
  },
  {
    id: 101,
    name: "electrode",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/101.gif",
    types: ["electric"],
  },
  {
    id: 102,
    name: "exeggcute",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/102.gif",
    types: ["grass", "psychic"],
  },
  {
    id: 103,
    name: "exeggutor",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/103.gif",
    types: ["grass", "psychic"],
  },
  {
    id: 104,
    name: "cubone",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/104.gif",
    types: ["ground"],
  },
  {
    id: 105,
    name: "marowak",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/105.gif",
    types: ["ground"],
  },
  {
    id: 106,
    name: "hitmonlee",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/106.gif",
    types: ["fighting"],
  },
  {
    id: 107,
    name: "hitmonchan",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/107.gif",
    types: ["fighting"],
  },
  {
    id: 108,
    name: "lickitung",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/108.gif",
    types: ["normal"],
  },
  {
    id: 109,
    name: "koffing",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/109.gif",
    types: ["poison"],
  },
  {
    id: 110,
    name: "weezing",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/110.gif",
    types: ["poison"],
  },
  {
    id: 111,
    name: "rhyhorn",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/111.gif",
    types: ["ground", "rock"],
  },
  {
    id: 112,
    name: "rhydon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/112.gif",
    types: ["ground", "rock"],
  },
  {
    id: 113,
    name: "chansey",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/113.gif",
    types: ["normal"],
  },
  {
    id: 114,
    name: "tangela",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/114.gif",
    types: ["grass"],
  },
  {
    id: 115,
    name: "kangaskhan",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/115.gif",
    types: ["normal"],
  },
  {
    id: 116,
    name: "horsea",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/116.gif",
    types: ["water"],
  },
  {
    id: 117,
    name: "seadra",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/117.gif",
    types: ["water"],
  },
  {
    id: 118,
    name: "goldeen",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/118.gif",
    types: ["water"],
  },
  {
    id: 119,
    name: "seaking",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/119.gif",
    types: ["water"],
  },
  {
    id: 120,
    name: "staryu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/120.gif",
    types: ["water"],
  },
  {
    id: 121,
    name: "starmie",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/121.gif",
    types: ["water", "psychic"],
  },
  {
    id: 122,
    name: "mr-mime",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/122.gif",
    types: ["psychic", "fairy"],
  },
  {
    id: 123,
    name: "scyther",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/123.gif",
    types: ["bug", "flying"],
  },
  {
    id: 124,
    name: "jynx",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/124.gif",
    types: ["ice", "psychic"],
  },
  {
    id: 125,
    name: "electabuzz",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/125.gif",
    types: ["electric"],
  },
  {
    id: 126,
    name: "magmar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/126.gif",
    types: ["fire"],
  },
  {
    id: 127,
    name: "pinsir",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/127.gif",
    types: ["bug"],
  },
  {
    id: 128,
    name: "tauros",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/128.gif",
    types: ["normal"],
  },
  {
    id: 129,
    name: "magikarp",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/129.gif",
    types: ["water"],
  },
  {
    id: 130,
    name: "gyarados",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/130.gif",
    types: ["water", "flying"],
  },
  {
    id: 131,
    name: "lapras",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/131.gif",
    types: ["water", "ice"],
  },
  {
    id: 132,
    name: "ditto",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
    types: ["normal"],
  },
  {
    id: 133,
    name: "eevee",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif",
    types: ["normal"],
  },
  {
    id: 134,
    name: "vaporeon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/134.gif",
    types: ["water"],
  },
  {
    id: 135,
    name: "jolteon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/135.gif",
    types: ["electric"],
  },
  {
    id: 136,
    name: "flareon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/136.gif",
    types: ["fire"],
  },
  {
    id: 137,
    name: "porygon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/137.gif",
    types: ["normal"],
  },
  {
    id: 138,
    name: "omanyte",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/138.gif",
    types: ["rock", "water"],
  },
  {
    id: 139,
    name: "omastar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/139.gif",
    types: ["rock", "water"],
  },
  {
    id: 140,
    name: "kabuto",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/140.gif",
    types: ["rock", "water"],
  },
  {
    id: 141,
    name: "kabutops",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/141.gif",
    types: ["rock", "water"],
  },
  {
    id: 142,
    name: "aerodactyl",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/142.gif",
    types: ["rock", "flying"],
  },
  {
    id: 143,
    name: "snorlax",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif",
    types: ["normal"],
  },
  {
    id: 144,
    name: "articuno",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/144.gif",
    types: ["ice", "flying"],
  },
  {
    id: 145,
    name: "zapdos",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/145.gif",
    types: ["electric", "flying"],
  },
  {
    id: 146,
    name: "moltres",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/146.gif",
    types: ["fire", "flying"],
  },
  {
    id: 147,
    name: "dratini",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/147.gif",
    types: ["dragon"],
  },
  {
    id: 148,
    name: "dragonair",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/148.gif",
    types: ["dragon"],
  },
  {
    id: 149,
    name: "dragonite",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/149.gif",
    types: ["dragon", "flying"],
  },
  {
    id: 150,
    name: "mewtwo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif",
    types: ["psychic"],
  },
  {
    id: 151,
    name: "mew",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif",
    types: ["psychic"],
  },
  {
    id: 152,
    name: "chikorita",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/152.gif",
    types: ["grass"],
  },
  {
    id: 153,
    name: "bayleef",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/153.gif",
    types: ["grass"],
  },
  {
    id: 154,
    name: "meganium",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/154.gif",
    types: ["grass"],
  },
  {
    id: 155,
    name: "cyndaquil",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/155.gif",
    types: ["fire"],
  },
  {
    id: 156,
    name: "quilava",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/156.gif",
    types: ["fire"],
  },
  {
    id: 157,
    name: "typhlosion",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/157.gif",
    types: ["fire"],
  },
  {
    id: 158,
    name: "totodile",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/158.gif",
    types: ["water"],
  },
  {
    id: 159,
    name: "croconaw",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/159.gif",
    types: ["water"],
  },
  {
    id: 160,
    name: "feraligatr",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/160.gif",
    types: ["water"],
  },
  {
    id: 161,
    name: "sentret",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/161.gif",
    types: ["normal"],
  },
  {
    id: 162,
    name: "furret",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/162.gif",
    types: ["normal"],
  },
  {
    id: 163,
    name: "hoothoot",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/163.gif",
    types: ["normal", "flying"],
  },
  {
    id: 164,
    name: "noctowl",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/164.gif",
    types: ["normal", "flying"],
  },
  {
    id: 165,
    name: "ledyba",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/165.gif",
    types: ["bug", "flying"],
  },
  {
    id: 166,
    name: "ledian",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/166.gif",
    types: ["bug", "flying"],
  },
  {
    id: 167,
    name: "spinarak",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/167.gif",
    types: ["bug", "poison"],
  },
  {
    id: 168,
    name: "ariados",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/168.gif",
    types: ["bug", "poison"],
  },
  {
    id: 169,
    name: "crobat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/169.gif",
    types: ["poison", "flying"],
  },
  {
    id: 170,
    name: "chinchou",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/170.gif",
    types: ["water", "electric"],
  },
  {
    id: 171,
    name: "lanturn",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/171.gif",
    types: ["water", "electric"],
  },
  {
    id: 172,
    name: "pichu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/172.gif",
    types: ["electric"],
  },
  {
    id: 173,
    name: "cleffa",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/173.gif",
    types: ["fairy"],
  },
  {
    id: 174,
    name: "igglybuff",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/174.gif",
    types: ["normal", "fairy"],
  },
  {
    id: 175,
    name: "togepi",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/175.gif",
    types: ["fairy"],
  },
  {
    id: 176,
    name: "togetic",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/176.gif",
    types: ["fairy", "flying"],
  },
  {
    id: 177,
    name: "natu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/177.gif",
    types: ["psychic", "flying"],
  },
  {
    id: 178,
    name: "xatu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/178.gif",
    types: ["psychic", "flying"],
  },
  {
    id: 179,
    name: "mareep",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/179.gif",
    types: ["electric"],
  },
  {
    id: 180,
    name: "flaaffy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/180.gif",
    types: ["electric"],
  },
  {
    id: 181,
    name: "ampharos",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/181.gif",
    types: ["electric"],
  },
  {
    id: 182,
    name: "bellossom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/182.gif",
    types: ["grass"],
  },
  {
    id: 183,
    name: "marill",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/183.gif",
    types: ["water", "fairy"],
  },
  {
    id: 184,
    name: "azumarill",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/184.gif",
    types: ["water", "fairy"],
  },
  {
    id: 185,
    name: "sudowoodo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/185.gif",
    types: ["rock"],
  },
  {
    id: 186,
    name: "politoed",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/186.gif",
    types: ["water"],
  },
  {
    id: 187,
    name: "hoppip",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/187.gif",
    types: ["grass", "flying"],
  },
  {
    id: 188,
    name: "skiploom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/188.gif",
    types: ["grass", "flying"],
  },
  {
    id: 189,
    name: "jumpluff",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/189.gif",
    types: ["grass", "flying"],
  },
  {
    id: 190,
    name: "aipom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/190.gif",
    types: ["normal"],
  },
  {
    id: 191,
    name: "sunkern",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/191.gif",
    types: ["grass"],
  },
  {
    id: 192,
    name: "sunflora",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/192.gif",
    types: ["grass"],
  },
  {
    id: 193,
    name: "yanma",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/193.gif",
    types: ["bug", "flying"],
  },
  {
    id: 194,
    name: "wooper",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/194.gif",
    types: ["water", "ground"],
  },
  {
    id: 195,
    name: "quagsire",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/195.gif",
    types: ["water", "ground"],
  },
  {
    id: 196,
    name: "espeon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/196.gif",
    types: ["psychic"],
  },
  {
    id: 197,
    name: "umbreon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/197.gif",
    types: ["dark"],
  },
  {
    id: 198,
    name: "murkrow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/198.gif",
    types: ["dark", "flying"],
  },
  {
    id: 199,
    name: "slowking",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/199.gif",
    types: ["water", "psychic"],
  },
  {
    id: 200,
    name: "misdreavus",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/200.gif",
    types: ["ghost"],
  },
  {
    id: 201,
    name: "unown",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/201.gif",
    types: ["psychic"],
  },
  {
    id: 202,
    name: "wobbuffet",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/202.gif",
    types: ["psychic"],
  },
  {
    id: 203,
    name: "girafarig",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/203.gif",
    types: ["normal", "psychic"],
  },
  {
    id: 204,
    name: "pineco",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/204.gif",
    types: ["bug"],
  },
  {
    id: 205,
    name: "forretress",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/205.gif",
    types: ["bug", "steel"],
  },
  {
    id: 206,
    name: "dunsparce",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/206.gif",
    types: ["normal"],
  },
  {
    id: 207,
    name: "gligar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/207.gif",
    types: ["ground", "flying"],
  },
  {
    id: 208,
    name: "steelix",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/208.gif",
    types: ["steel", "ground"],
  },
  {
    id: 209,
    name: "snubbull",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/209.gif",
    types: ["fairy"],
  },
  {
    id: 210,
    name: "granbull",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/210.gif",
    types: ["fairy"],
  },
  {
    id: 211,
    name: "qwilfish",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/211.gif",
    types: ["water", "poison"],
  },
  {
    id: 212,
    name: "scizor",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/212.gif",
    types: ["bug", "steel"],
  },
  {
    id: 213,
    name: "shuckle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/213.gif",
    types: ["bug", "rock"],
  },
  {
    id: 214,
    name: "heracross",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/214.gif",
    types: ["bug", "fighting"],
  },
  {
    id: 216,
    name: "teddiursa",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/216.gif",
    types: ["normal"],
  },
  {
    id: 217,
    name: "ursaring",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/217.gif",
    types: ["normal"],
  },
  {
    id: 218,
    name: "slugma",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/218.gif",
    types: ["fire"],
  },
  {
    id: 215,
    name: "sneasel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/215.gif",
    types: ["dark", "ice"],
  },
  {
    id: 219,
    name: "magcargo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/219.gif",
    types: ["fire", "rock"],
  },
  {
    id: 220,
    name: "swinub",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/220.gif",
    types: ["ice", "ground"],
  },
  {
    id: 221,
    name: "piloswine",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/221.gif",
    types: ["ice", "ground"],
  },
  {
    id: 222,
    name: "corsola",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/222.gif",
    types: ["water", "rock"],
  },
  {
    id: 223,
    name: "remoraid",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/223.gif",
    types: ["water"],
  },
  {
    id: 224,
    name: "octillery",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/224.gif",
    types: ["water"],
  },
  {
    id: 225,
    name: "delibird",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/225.gif",
    types: ["ice", "flying"],
  },
  {
    id: 226,
    name: "mantine",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/226.gif",
    types: ["water", "flying"],
  },
  {
    id: 227,
    name: "skarmory",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/227.gif",
    types: ["steel", "flying"],
  },
  {
    id: 228,
    name: "houndour",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/228.gif",
    types: ["dark", "fire"],
  },
  {
    id: 229,
    name: "houndoom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/229.gif",
    types: ["dark", "fire"],
  },
  {
    id: 230,
    name: "kingdra",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/230.gif",
    types: ["water", "dragon"],
  },
  {
    id: 231,
    name: "phanpy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/231.gif",
    types: ["ground"],
  },
  {
    id: 232,
    name: "donphan",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/232.gif",
    types: ["ground"],
  },
  {
    id: 233,
    name: "porygon2",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/233.gif",
    types: ["normal"],
  },
  {
    id: 234,
    name: "stantler",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/234.gif",
    types: ["normal"],
  },
  {
    id: 235,
    name: "smeargle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/235.gif",
    types: ["normal"],
  },
  {
    id: 236,
    name: "tyrogue",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/236.gif",
    types: ["fighting"],
  },
  {
    id: 237,
    name: "hitmontop",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/237.gif",
    types: ["fighting"],
  },
  {
    id: 238,
    name: "smoochum",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/238.gif",
    types: ["ice", "psychic"],
  },
  {
    id: 239,
    name: "elekid",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/239.gif",
    types: ["electric"],
  },
  {
    id: 240,
    name: "magby",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/240.gif",
    types: ["fire"],
  },
  {
    id: 241,
    name: "miltank",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/241.gif",
    types: ["normal"],
  },
  {
    id: 243,
    name: "raikou",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/243.gif",
    types: ["electric"],
  },
  {
    id: 244,
    name: "entei",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/244.gif",
    types: ["fire"],
  },
  {
    id: 245,
    name: "suicune",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/245.gif",
    types: ["water"],
  },
  {
    id: 246,
    name: "larvitar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/246.gif",
    types: ["rock", "ground"],
  },
  {
    id: 247,
    name: "pupitar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/247.gif",
    types: ["rock", "ground"],
  },
  {
    id: 242,
    name: "blissey",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/242.gif",
    types: ["normal"],
  },
  {
    id: 248,
    name: "tyranitar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/248.gif",
    types: ["rock", "dark"],
  },
  {
    id: 249,
    name: "lugia",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/249.gif",
    types: ["psychic", "flying"],
  },
  {
    id: 250,
    name: "ho-oh",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/250.gif",
    types: ["fire", "flying"],
  },
  {
    id: 251,
    name: "celebi",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/251.gif",
    types: ["psychic", "grass"],
  },
  {
    id: 252,
    name: "treecko",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/252.gif",
    types: ["grass"],
  },
  {
    id: 253,
    name: "grovyle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/253.gif",
    types: ["grass"],
  },
  {
    id: 254,
    name: "sceptile",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/254.gif",
    types: ["grass"],
  },
  {
    id: 255,
    name: "torchic",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/255.gif",
    types: ["fire"],
  },
  {
    id: 256,
    name: "combusken",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/256.gif",
    types: ["fire", "fighting"],
  },
  {
    id: 257,
    name: "blaziken",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/257.gif",
    types: ["fire", "fighting"],
  },
  {
    id: 258,
    name: "mudkip",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/258.gif",
    types: ["water"],
  },
  {
    id: 259,
    name: "marshtomp",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/259.gif",
    types: ["water", "ground"],
  },
  {
    id: 260,
    name: "swampert",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/260.gif",
    types: ["water", "ground"],
  },
  {
    id: 261,
    name: "poochyena",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/261.gif",
    types: ["dark"],
  },
  {
    id: 262,
    name: "mightyena",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/262.gif",
    types: ["dark"],
  },
  {
    id: 263,
    name: "zigzagoon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/263.gif",
    types: ["normal"],
  },
  {
    id: 264,
    name: "linoone",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/264.gif",
    types: ["normal"],
  },
  {
    id: 265,
    name: "wurmple",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/265.gif",
    types: ["bug"],
  },
  {
    id: 266,
    name: "silcoon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/266.gif",
    types: ["bug"],
  },
  {
    id: 267,
    name: "beautifly",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/267.gif",
    types: ["bug", "flying"],
  },
  {
    id: 268,
    name: "cascoon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/268.gif",
    types: ["bug"],
  },
  {
    id: 269,
    name: "dustox",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/269.gif",
    types: ["bug", "poison"],
  },
  {
    id: 270,
    name: "lotad",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/270.gif",
    types: ["water", "grass"],
  },
  {
    id: 271,
    name: "lombre",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/271.gif",
    types: ["water", "grass"],
  },
  {
    id: 272,
    name: "ludicolo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/272.gif",
    types: ["water", "grass"],
  },
  {
    id: 273,
    name: "seedot",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/273.gif",
    types: ["grass"],
  },
  {
    id: 274,
    name: "nuzleaf",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/274.gif",
    types: ["grass", "dark"],
  },
  {
    id: 275,
    name: "shiftry",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/275.gif",
    types: ["grass", "dark"],
  },
  {
    id: 276,
    name: "taillow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/276.gif",
    types: ["normal", "flying"],
  },
  {
    id: 277,
    name: "swellow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/277.gif",
    types: ["normal", "flying"],
  },
  {
    id: 278,
    name: "wingull",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/278.gif",
    types: ["water", "flying"],
  },
  {
    id: 279,
    name: "pelipper",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/279.gif",
    types: ["water", "flying"],
  },
  {
    id: 280,
    name: "ralts",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/280.gif",
    types: ["psychic", "fairy"],
  },
  {
    id: 281,
    name: "kirlia",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/281.gif",
    types: ["psychic", "fairy"],
  },
  {
    id: 282,
    name: "gardevoir",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/282.gif",
    types: ["psychic", "fairy"],
  },
  {
    id: 283,
    name: "surskit",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/283.gif",
    types: ["bug", "water"],
  },
  {
    id: 284,
    name: "masquerain",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/284.gif",
    types: ["bug", "flying"],
  },
  {
    id: 285,
    name: "shroomish",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/285.gif",
    types: ["grass"],
  },
  {
    id: 286,
    name: "breloom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/286.gif",
    types: ["grass", "fighting"],
  },
  {
    id: 287,
    name: "slakoth",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/287.gif",
    types: ["normal"],
  },
  {
    id: 288,
    name: "vigoroth",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/288.gif",
    types: ["normal"],
  },
  {
    id: 289,
    name: "slaking",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/289.gif",
    types: ["normal"],
  },
  {
    id: 290,
    name: "nincada",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/290.gif",
    types: ["bug", "ground"],
  },
  {
    id: 291,
    name: "ninjask",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/291.gif",
    types: ["bug", "flying"],
  },
  {
    id: 292,
    name: "shedinja",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/292.gif",
    types: ["bug", "ghost"],
  },
  {
    id: 293,
    name: "whismur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/293.gif",
    types: ["normal"],
  },
  {
    id: 294,
    name: "loudred",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/294.gif",
    types: ["normal"],
  },
  {
    id: 295,
    name: "exploud",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/295.gif",
    types: ["normal"],
  },
  {
    id: 296,
    name: "makuhita",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/296.gif",
    types: ["fighting"],
  },
  {
    id: 297,
    name: "hariyama",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/297.gif",
    types: ["fighting"],
  },
  {
    id: 298,
    name: "azurill",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/298.gif",
    types: ["normal", "fairy"],
  },
  {
    id: 299,
    name: "nosepass",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/299.gif",
    types: ["rock"],
  },
  {
    id: 300,
    name: "skitty",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/300.gif",
    types: ["normal"],
  },
  {
    id: 301,
    name: "delcatty",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/301.gif",
    types: ["normal"],
  },
  {
    id: 302,
    name: "sableye",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/302.gif",
    types: ["dark", "ghost"],
  },
  {
    id: 303,
    name: "mawile",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/303.gif",
    types: ["steel", "fairy"],
  },
  {
    id: 304,
    name: "aron",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/304.gif",
    types: ["steel", "rock"],
  },
  {
    id: 305,
    name: "lairon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/305.gif",
    types: ["steel", "rock"],
  },
  {
    id: 306,
    name: "aggron",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/306.gif",
    types: ["steel", "rock"],
  },
  {
    id: 307,
    name: "meditite",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/307.gif",
    types: ["fighting", "psychic"],
  },
  {
    id: 308,
    name: "medicham",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/308.gif",
    types: ["fighting", "psychic"],
  },
  {
    id: 309,
    name: "electrike",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/309.gif",
    types: ["electric"],
  },
  {
    id: 310,
    name: "manectric",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/310.gif",
    types: ["electric"],
  },
  {
    id: 311,
    name: "plusle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/311.gif",
    types: ["electric"],
  },
  {
    id: 312,
    name: "minun",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/312.gif",
    types: ["electric"],
  },
  {
    id: 313,
    name: "volbeat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/313.gif",
    types: ["bug"],
  },
  {
    id: 314,
    name: "illumise",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/314.gif",
    types: ["bug"],
  },
  {
    id: 315,
    name: "roselia",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/315.gif",
    types: ["grass", "poison"],
  },
  {
    id: 316,
    name: "gulpin",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/316.gif",
    types: ["poison"],
  },
  {
    id: 317,
    name: "swalot",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/317.gif",
    types: ["poison"],
  },
  {
    id: 318,
    name: "carvanha",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/318.gif",
    types: ["water", "dark"],
  },
  {
    id: 319,
    name: "sharpedo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/319.gif",
    types: ["water", "dark"],
  },
  {
    id: 320,
    name: "wailmer",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/320.gif",
    types: ["water"],
  },
  {
    id: 321,
    name: "wailord",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/321.gif",
    types: ["water"],
  },
  {
    id: 322,
    name: "numel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/322.gif",
    types: ["fire", "ground"],
  },
  {
    id: 323,
    name: "camerupt",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/323.gif",
    types: ["fire", "ground"],
  },
  {
    id: 324,
    name: "torkoal",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/324.gif",
    types: ["fire"],
  },
  {
    id: 325,
    name: "spoink",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/325.gif",
    types: ["psychic"],
  },
  {
    id: 326,
    name: "grumpig",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/326.gif",
    types: ["psychic"],
  },
  {
    id: 327,
    name: "spinda",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/327.gif",
    types: ["normal"],
  },
  {
    id: 328,
    name: "trapinch",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/328.gif",
    types: ["ground"],
  },
  {
    id: 329,
    name: "vibrava",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/329.gif",
    types: ["ground", "dragon"],
  },
  {
    id: 330,
    name: "flygon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/330.gif",
    types: ["ground", "dragon"],
  },
  {
    id: 331,
    name: "cacnea",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/331.gif",
    types: ["grass"],
  },
  {
    id: 332,
    name: "cacturne",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/332.gif",
    types: ["grass", "dark"],
  },
  {
    id: 333,
    name: "swablu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/333.gif",
    types: ["normal", "flying"],
  },
  {
    id: 334,
    name: "altaria",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/334.gif",
    types: ["dragon", "flying"],
  },
  {
    id: 335,
    name: "zangoose",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/335.gif",
    types: ["normal"],
  },
  {
    id: 336,
    name: "seviper",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/336.gif",
    types: ["poison"],
  },
  {
    id: 337,
    name: "lunatone",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/337.gif",
    types: ["rock", "psychic"],
  },
  {
    id: 338,
    name: "solrock",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/338.gif",
    types: ["rock", "psychic"],
  },
  {
    id: 339,
    name: "barboach",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/339.gif",
    types: ["water", "ground"],
  },
  {
    id: 340,
    name: "whiscash",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/340.gif",
    types: ["water", "ground"],
  },
  {
    id: 341,
    name: "corphish",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/341.gif",
    types: ["water"],
  },
  {
    id: 342,
    name: "crawdaunt",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/342.gif",
    types: ["water", "dark"],
  },
  {
    id: 343,
    name: "baltoy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/343.gif",
    types: ["ground", "psychic"],
  },
  {
    id: 344,
    name: "claydol",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/344.gif",
    types: ["ground", "psychic"],
  },
  {
    id: 345,
    name: "lileep",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/345.gif",
    types: ["rock", "grass"],
  },
  {
    id: 346,
    name: "cradily",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/346.gif",
    types: ["rock", "grass"],
  },
  {
    id: 347,
    name: "anorith",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/347.gif",
    types: ["rock", "bug"],
  },
  {
    id: 348,
    name: "armaldo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/348.gif",
    types: ["rock", "bug"],
  },
  {
    id: 349,
    name: "feebas",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/349.gif",
    types: ["water"],
  },
  {
    id: 350,
    name: "milotic",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/350.gif",
    types: ["water"],
  },
  {
    id: 351,
    name: "castform",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/351.gif",
    types: ["normal"],
  },
  {
    id: 352,
    name: "kecleon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/352.gif",
    types: ["normal"],
  },
  {
    id: 353,
    name: "shuppet",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/353.gif",
    types: ["ghost"],
  },
  {
    id: 354,
    name: "banette",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/354.gif",
    types: ["ghost"],
  },
  {
    id: 355,
    name: "duskull",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/355.gif",
    types: ["ghost"],
  },
  {
    id: 356,
    name: "dusclops",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/356.gif",
    types: ["ghost"],
  },
  {
    id: 357,
    name: "tropius",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/357.gif",
    types: ["grass", "flying"],
  },
  {
    id: 358,
    name: "chimecho",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/358.gif",
    types: ["psychic"],
  },
  {
    id: 359,
    name: "absol",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/359.gif",
    types: ["dark"],
  },
  {
    id: 360,
    name: "wynaut",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/360.gif",
    types: ["psychic"],
  },
  {
    id: 361,
    name: "snorunt",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/361.gif",
    types: ["ice"],
  },
  {
    id: 362,
    name: "glalie",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/362.gif",
    types: ["ice"],
  },
  {
    id: 363,
    name: "spheal",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/363.gif",
    types: ["ice", "water"],
  },
  {
    id: 364,
    name: "sealeo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/364.gif",
    types: ["ice", "water"],
  },
  {
    id: 365,
    name: "walrein",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/365.gif",
    types: ["ice", "water"],
  },
  {
    id: 366,
    name: "clamperl",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/366.gif",
    types: ["water"],
  },
  {
    id: 367,
    name: "huntail",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/367.gif",
    types: ["water"],
  },
  {
    id: 368,
    name: "gorebyss",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/368.gif",
    types: ["water"],
  },
  {
    id: 369,
    name: "relicanth",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/369.gif",
    types: ["water", "rock"],
  },
  {
    id: 370,
    name: "luvdisc",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/370.gif",
    types: ["water"],
  },
  {
    id: 371,
    name: "bagon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/371.gif",
    types: ["dragon"],
  },
  {
    id: 372,
    name: "shelgon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/372.gif",
    types: ["dragon"],
  },
  {
    id: 373,
    name: "salamence",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/373.gif",
    types: ["dragon", "flying"],
  },
  {
    id: 374,
    name: "beldum",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/374.gif",
    types: ["steel", "psychic"],
  },
  {
    id: 375,
    name: "metang",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/375.gif",
    types: ["steel", "psychic"],
  },
  {
    id: 376,
    name: "metagross",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/376.gif",
    types: ["steel", "psychic"],
  },
  {
    id: 377,
    name: "regirock",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/377.gif",
    types: ["rock"],
  },
  {
    id: 378,
    name: "regice",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/378.gif",
    types: ["ice"],
  },
  {
    id: 379,
    name: "registeel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/379.gif",
    types: ["steel"],
  },
  {
    id: 380,
    name: "latias",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/380.gif",
    types: ["dragon", "psychic"],
  },
  {
    id: 381,
    name: "latios",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/381.gif",
    types: ["dragon", "psychic"],
  },
  {
    id: 382,
    name: "kyogre",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/382.gif",
    types: ["water"],
  },
  {
    id: 383,
    name: "groudon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/383.gif",
    types: ["ground"],
  },
  {
    id: 384,
    name: "rayquaza",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/384.gif",
    types: ["dragon", "flying"],
  },
  {
    id: 385,
    name: "jirachi",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/385.gif",
    types: ["steel", "psychic"],
  },
  {
    id: 386,
    name: "deoxys-normal",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/386.gif",
    types: ["psychic"],
  },
  {
    id: 387,
    name: "turtwig",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/387.gif",
    types: ["grass"],
  },
  {
    id: 388,
    name: "grotle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/388.gif",
    types: ["grass"],
  },
  {
    id: 389,
    name: "torterra",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/389.gif",
    types: ["grass", "ground"],
  },
  {
    id: 390,
    name: "chimchar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/390.gif",
    types: ["fire"],
  },
  {
    id: 391,
    name: "monferno",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/391.gif",
    types: ["fire", "fighting"],
  },
  {
    id: 392,
    name: "infernape",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/392.gif",
    types: ["fire", "fighting"],
  },
  {
    id: 393,
    name: "piplup",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/393.gif",
    types: ["water"],
  },
  {
    id: 394,
    name: "prinplup",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/394.gif",
    types: ["water"],
  },
  {
    id: 395,
    name: "empoleon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/395.gif",
    types: ["water", "steel"],
  },
  {
    id: 396,
    name: "starly",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/396.gif",
    types: ["normal", "flying"],
  },
  {
    id: 397,
    name: "staravia",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/397.gif",
    types: ["normal", "flying"],
  },
  {
    id: 398,
    name: "staraptor",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/398.gif",
    types: ["normal", "flying"],
  },
  {
    id: 399,
    name: "bidoof",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/399.gif",
    types: ["normal"],
  },
  {
    id: 400,
    name: "bibarel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/400.gif",
    types: ["normal", "water"],
  },
  {
    id: 401,
    name: "kricketot",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/401.gif",
    types: ["bug"],
  },
  {
    id: 402,
    name: "kricketune",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/402.gif",
    types: ["bug"],
  },
  {
    id: 403,
    name: "shinx",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/403.gif",
    types: ["electric"],
  },
  {
    id: 404,
    name: "luxio",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/404.gif",
    types: ["electric"],
  },
  {
    id: 405,
    name: "luxray",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/405.gif",
    types: ["electric"],
  },
  {
    id: 406,
    name: "budew",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/406.gif",
    types: ["grass", "poison"],
  },
  {
    id: 407,
    name: "roserade",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/407.gif",
    types: ["grass", "poison"],
  },
  {
    id: 408,
    name: "cranidos",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/408.gif",
    types: ["rock"],
  },
  {
    id: 409,
    name: "rampardos",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/409.gif",
    types: ["rock"],
  },
  {
    id: 410,
    name: "shieldon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/410.gif",
    types: ["rock", "steel"],
  },
  {
    id: 411,
    name: "bastiodon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/411.gif",
    types: ["rock", "steel"],
  },
  {
    id: 412,
    name: "burmy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/412.gif",
    types: ["bug"],
  },
  {
    id: 413,
    name: "wormadam-plant",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/413.gif",
    types: ["bug", "grass"],
  },
  {
    id: 414,
    name: "mothim",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/414.gif",
    types: ["bug", "flying"],
  },
  {
    id: 415,
    name: "combee",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/415.gif",
    types: ["bug", "flying"],
  },
  {
    id: 416,
    name: "vespiquen",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/416.gif",
    types: ["bug", "flying"],
  },
  {
    id: 417,
    name: "pachirisu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/417.gif",
    types: ["electric"],
  },
  {
    id: 418,
    name: "buizel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/418.gif",
    types: ["water"],
  },
  {
    id: 419,
    name: "floatzel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/419.gif",
    types: ["water"],
  },
  {
    id: 420,
    name: "cherubi",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/420.gif",
    types: ["grass"],
  },
  {
    id: 421,
    name: "cherrim",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/421.gif",
    types: ["grass"],
  },
  {
    id: 422,
    name: "shellos",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/422.gif",
    types: ["water"],
  },
  {
    id: 423,
    name: "gastrodon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/423.gif",
    types: ["water", "ground"],
  },
  {
    id: 424,
    name: "ambipom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/424.gif",
    types: ["normal"],
  },
  {
    id: 425,
    name: "drifloon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/425.gif",
    types: ["ghost", "flying"],
  },
  {
    id: 426,
    name: "drifblim",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/426.gif",
    types: ["ghost", "flying"],
  },
  {
    id: 427,
    name: "buneary",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/427.gif",
    types: ["normal"],
  },
  {
    id: 428,
    name: "lopunny",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/428.gif",
    types: ["normal"],
  },
  {
    id: 429,
    name: "mismagius",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/429.gif",
    types: ["ghost"],
  },
  {
    id: 430,
    name: "honchkrow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/430.gif",
    types: ["dark", "flying"],
  },
  {
    id: 431,
    name: "glameow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/431.gif",
    types: ["normal"],
  },
  {
    id: 432,
    name: "purugly",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/432.gif",
    types: ["normal"],
  },
  {
    id: 433,
    name: "chingling",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/433.gif",
    types: ["psychic"],
  },
  {
    id: 434,
    name: "stunky",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/434.gif",
    types: ["poison", "dark"],
  },
  {
    id: 435,
    name: "skuntank",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/435.gif",
    types: ["poison", "dark"],
  },
  {
    id: 436,
    name: "bronzor",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/436.gif",
    types: ["steel", "psychic"],
  },
  {
    id: 437,
    name: "bronzong",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/437.gif",
    types: ["steel", "psychic"],
  },
  {
    id: 438,
    name: "bonsly",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/438.gif",
    types: ["rock"],
  },
  {
    id: 439,
    name: "mime-jr",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/439.gif",
    types: ["psychic", "fairy"],
  },
  {
    id: 440,
    name: "happiny",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/440.gif",
    types: ["normal"],
  },
  {
    id: 441,
    name: "chatot",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/441.gif",
    types: ["normal", "flying"],
  },
  {
    id: 442,
    name: "spiritomb",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/442.gif",
    types: ["ghost", "dark"],
  },
  {
    id: 443,
    name: "gible",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/443.gif",
    types: ["dragon", "ground"],
  },
  {
    id: 444,
    name: "gabite",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/444.gif",
    types: ["dragon", "ground"],
  },
  {
    id: 445,
    name: "garchomp",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/445.gif",
    types: ["dragon", "ground"],
  },
  {
    id: 446,
    name: "munchlax",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/446.gif",
    types: ["normal"],
  },
  {
    id: 447,
    name: "riolu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/447.gif",
    types: ["fighting"],
  },
  {
    id: 448,
    name: "lucario",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/448.gif",
    types: ["fighting", "steel"],
  },
  {
    id: 449,
    name: "hippopotas",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/449.gif",
    types: ["ground"],
  },
  {
    id: 450,
    name: "hippowdon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/450.gif",
    types: ["ground"],
  },
  {
    id: 451,
    name: "skorupi",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/451.gif",
    types: ["poison", "bug"],
  },
  {
    id: 452,
    name: "drapion",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/452.gif",
    types: ["poison", "dark"],
  },
  {
    id: 453,
    name: "croagunk",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/453.gif",
    types: ["poison", "fighting"],
  },
  {
    id: 454,
    name: "toxicroak",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/454.gif",
    types: ["poison", "fighting"],
  },
  {
    id: 455,
    name: "carnivine",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/455.gif",
    types: ["grass"],
  },
  {
    id: 456,
    name: "finneon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/456.gif",
    types: ["water"],
  },
  {
    id: 457,
    name: "lumineon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/457.gif",
    types: ["water"],
  },
  {
    id: 458,
    name: "mantyke",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/458.gif",
    types: ["water", "flying"],
  },
  {
    id: 459,
    name: "snover",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/459.gif",
    types: ["grass", "ice"],
  },
  {
    id: 460,
    name: "abomasnow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/460.gif",
    types: ["grass", "ice"],
  },
  {
    id: 461,
    name: "weavile",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/461.gif",
    types: ["dark", "ice"],
  },
  {
    id: 462,
    name: "magnezone",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/462.gif",
    types: ["electric", "steel"],
  },
  {
    id: 463,
    name: "lickilicky",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/463.gif",
    types: ["normal"],
  },
  {
    id: 464,
    name: "rhyperior",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/464.gif",
    types: ["ground", "rock"],
  },
  {
    id: 465,
    name: "tangrowth",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/465.gif",
    types: ["grass"],
  },
  {
    id: 466,
    name: "electivire",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/466.gif",
    types: ["electric"],
  },
  {
    id: 467,
    name: "magmortar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/467.gif",
    types: ["fire"],
  },
  {
    id: 468,
    name: "togekiss",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/468.gif",
    types: ["fairy", "flying"],
  },
  {
    id: 469,
    name: "yanmega",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/469.gif",
    types: ["bug", "flying"],
  },
  {
    id: 470,
    name: "leafeon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/470.gif",
    types: ["grass"],
  },
  {
    id: 471,
    name: "glaceon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/471.gif",
    types: ["ice"],
  },
  {
    id: 472,
    name: "gliscor",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/472.gif",
    types: ["ground", "flying"],
  },
  {
    id: 473,
    name: "mamoswine",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/473.gif",
    types: ["ice", "ground"],
  },
  {
    id: 474,
    name: "porygon-z",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/474.gif",
    types: ["normal"],
  },
  {
    id: 475,
    name: "gallade",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/475.gif",
    types: ["psychic", "fighting"],
  },
  {
    id: 476,
    name: "probopass",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/476.gif",
    types: ["rock", "steel"],
  },
  {
    id: 477,
    name: "dusknoir",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/477.gif",
    types: ["ghost"],
  },
  {
    id: 478,
    name: "froslass",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/478.gif",
    types: ["ice", "ghost"],
  },
  {
    id: 479,
    name: "rotom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/479.gif",
    types: ["electric", "ghost"],
  },
  {
    id: 480,
    name: "uxie",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/480.gif",
    types: ["psychic"],
  },
  {
    id: 481,
    name: "mesprit",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/481.gif",
    types: ["psychic"],
  },
  {
    id: 482,
    name: "azelf",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/482.gif",
    types: ["psychic"],
  },
  {
    id: 483,
    name: "dialga",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/483.gif",
    types: ["steel", "dragon"],
  },
  {
    id: 484,
    name: "palkia",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/484.gif",
    types: ["water", "dragon"],
  },
  {
    id: 485,
    name: "heatran",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/485.gif",
    types: ["fire", "steel"],
  },
  {
    id: 486,
    name: "regigigas",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/486.gif",
    types: ["normal"],
  },
  {
    id: 487,
    name: "giratina-altered",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/487.gif",
    types: ["ghost", "dragon"],
  },
  {
    id: 488,
    name: "cresselia",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/488.gif",
    types: ["psychic"],
  },
  {
    id: 489,
    name: "phione",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/489.gif",
    types: ["water"],
  },
  {
    id: 490,
    name: "manaphy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/490.gif",
    types: ["water"],
  },
  {
    id: 491,
    name: "darkrai",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/491.gif",
    types: ["dark"],
  },
  {
    id: 492,
    name: "shaymin-land",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/492.gif",
    types: ["grass"],
  },
  {
    id: 493,
    name: "arceus",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/493.gif",
    types: ["normal"],
  },
  {
    id: 494,
    name: "victini",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/494.gif",
    types: ["psychic", "fire"],
  },
  {
    id: 495,
    name: "snivy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/495.gif",
    types: ["grass"],
  },
  {
    id: 496,
    name: "servine",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/496.gif",
    types: ["grass"],
  },
  {
    id: 497,
    name: "serperior",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/497.gif",
    types: ["grass"],
  },
  {
    id: 498,
    name: "tepig",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/498.gif",
    types: ["fire"],
  },
  {
    id: 499,
    name: "pignite",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/499.gif",
    types: ["fire", "fighting"],
  },
  {
    id: 500,
    name: "emboar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/500.gif",
    types: ["fire", "fighting"],
  },
  {
    id: 501,
    name: "oshawott",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/501.gif",
    types: ["water"],
  },
  {
    id: 502,
    name: "dewott",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/502.gif",
    types: ["water"],
  },
  {
    id: 503,
    name: "samurott",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/503.gif",
    types: ["water"],
  },
  {
    id: 504,
    name: "patrat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/504.gif",
    types: ["normal"],
  },
  {
    id: 505,
    name: "watchog",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/505.gif",
    types: ["normal"],
  },
  {
    id: 506,
    name: "lillipup",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/506.gif",
    types: ["normal"],
  },
  {
    id: 507,
    name: "herdier",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/507.gif",
    types: ["normal"],
  },
  {
    id: 508,
    name: "stoutland",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/508.gif",
    types: ["normal"],
  },
  {
    id: 509,
    name: "purrloin",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/509.gif",
    types: ["dark"],
  },
  {
    id: 510,
    name: "liepard",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/510.gif",
    types: ["dark"],
  },
  {
    id: 511,
    name: "pansage",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/511.gif",
    types: ["grass"],
  },
  {
    id: 512,
    name: "simisage",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/512.gif",
    types: ["grass"],
  },
  {
    id: 513,
    name: "pansear",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/513.gif",
    types: ["fire"],
  },
  {
    id: 514,
    name: "simisear",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/514.gif",
    types: ["fire"],
  },
  {
    id: 515,
    name: "panpour",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/515.gif",
    types: ["water"],
  },
  {
    id: 516,
    name: "simipour",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/516.gif",
    types: ["water"],
  },
  {
    id: 517,
    name: "munna",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/517.gif",
    types: ["psychic"],
  },
  {
    id: 518,
    name: "musharna",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/518.gif",
    types: ["psychic"],
  },
  {
    id: 519,
    name: "pidove",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/519.gif",
    types: ["normal", "flying"],
  },
  {
    id: 520,
    name: "tranquill",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/520.gif",
    types: ["normal", "flying"],
  },
  {
    id: 521,
    name: "unfezant",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/521.gif",
    types: ["normal", "flying"],
  },
  {
    id: 522,
    name: "blitzle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/522.gif",
    types: ["electric"],
  },
  {
    id: 523,
    name: "zebstrika",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/523.gif",
    types: ["electric"],
  },
  {
    id: 524,
    name: "roggenrola",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/524.gif",
    types: ["rock"],
  },
  {
    id: 525,
    name: "boldore",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/525.gif",
    types: ["rock"],
  },
  {
    id: 526,
    name: "gigalith",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/526.gif",
    types: ["rock"],
  },
  {
    id: 527,
    name: "woobat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/527.gif",
    types: ["psychic", "flying"],
  },
  {
    id: 528,
    name: "swoobat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/528.gif",
    types: ["psychic", "flying"],
  },
  {
    id: 529,
    name: "drilbur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/529.gif",
    types: ["ground"],
  },
  {
    id: 530,
    name: "excadrill",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/530.gif",
    types: ["ground", "steel"],
  },
  {
    id: 531,
    name: "audino",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/531.gif",
    types: ["normal"],
  },
  {
    id: 532,
    name: "timburr",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/532.gif",
    types: ["fighting"],
  },
  {
    id: 533,
    name: "gurdurr",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/533.gif",
    types: ["fighting"],
  },
  {
    id: 534,
    name: "conkeldurr",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/534.gif",
    types: ["fighting"],
  },
  {
    id: 535,
    name: "tympole",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/535.gif",
    types: ["water"],
  },
  {
    id: 536,
    name: "palpitoad",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/536.gif",
    types: ["water", "ground"],
  },
  {
    id: 537,
    name: "seismitoad",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/537.gif",
    types: ["water", "ground"],
  },
  {
    id: 538,
    name: "throh",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/538.gif",
    types: ["fighting"],
  },
  {
    id: 539,
    name: "sawk",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/539.gif",
    types: ["fighting"],
  },
  {
    id: 540,
    name: "sewaddle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/540.gif",
    types: ["bug", "grass"],
  },
  {
    id: 541,
    name: "swadloon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/541.gif",
    types: ["bug", "grass"],
  },
  {
    id: 542,
    name: "leavanny",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/542.gif",
    types: ["bug", "grass"],
  },
  {
    id: 543,
    name: "venipede",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/543.gif",
    types: ["bug", "poison"],
  },
  {
    id: 544,
    name: "whirlipede",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/544.gif",
    types: ["bug", "poison"],
  },
  {
    id: 545,
    name: "scolipede",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/545.gif",
    types: ["bug", "poison"],
  },
  {
    id: 546,
    name: "cottonee",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/546.gif",
    types: ["grass", "fairy"],
  },
  {
    id: 547,
    name: "whimsicott",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/547.gif",
    types: ["grass", "fairy"],
  },
  {
    id: 548,
    name: "petilil",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/548.gif",
    types: ["grass"],
  },
  {
    id: 549,
    name: "lilligant",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/549.gif",
    types: ["grass"],
  },
  {
    id: 550,
    name: "basculin-red-striped",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/550.gif",
    types: ["water"],
  },
  {
    id: 551,
    name: "sandile",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/551.gif",
    types: ["ground", "dark"],
  },
  {
    id: 552,
    name: "krokorok",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/552.gif",
    types: ["ground", "dark"],
  },
  {
    id: 553,
    name: "krookodile",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/553.gif",
    types: ["ground", "dark"],
  },
  {
    id: 554,
    name: "darumaka",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/554.gif",
    types: ["fire"],
  },
  {
    id: 555,
    name: "darmanitan-standard",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/555.gif",
    types: ["fire"],
  },
  {
    id: 556,
    name: "maractus",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/556.gif",
    types: ["grass"],
  },
  {
    id: 557,
    name: "dwebble",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/557.gif",
    types: ["bug", "rock"],
  },
  {
    id: 558,
    name: "crustle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/558.gif",
    types: ["bug", "rock"],
  },
  {
    id: 559,
    name: "scraggy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/559.gif",
    types: ["dark", "fighting"],
  },
  {
    id: 560,
    name: "scrafty",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/560.gif",
    types: ["dark", "fighting"],
  },
  {
    id: 561,
    name: "sigilyph",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/561.gif",
    types: ["psychic", "flying"],
  },
  {
    id: 562,
    name: "yamask",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/562.gif",
    types: ["ghost"],
  },
  {
    id: 563,
    name: "cofagrigus",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/563.gif",
    types: ["ghost"],
  },
  {
    id: 564,
    name: "tirtouga",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/564.gif",
    types: ["water", "rock"],
  },
  {
    id: 565,
    name: "carracosta",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/565.gif",
    types: ["water", "rock"],
  },
  {
    id: 566,
    name: "archen",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/566.gif",
    types: ["rock", "flying"],
  },
  {
    id: 567,
    name: "archeops",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/567.gif",
    types: ["rock", "flying"],
  },
  {
    id: 568,
    name: "trubbish",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/568.gif",
    types: ["poison"],
  },
  {
    id: 569,
    name: "garbodor",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/569.gif",
    types: ["poison"],
  },
  {
    id: 570,
    name: "zorua",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/570.gif",
    types: ["dark"],
  },
  {
    id: 571,
    name: "zoroark",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/571.gif",
    types: ["dark"],
  },
  {
    id: 572,
    name: "minccino",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/572.gif",
    types: ["normal"],
  },
  {
    id: 573,
    name: "cinccino",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/573.gif",
    types: ["normal"],
  },
  {
    id: 574,
    name: "gothita",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/574.gif",
    types: ["psychic"],
  },
  {
    id: 575,
    name: "gothorita",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/575.gif",
    types: ["psychic"],
  },
  {
    id: 576,
    name: "gothitelle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/576.gif",
    types: ["psychic"],
  },
  {
    id: 577,
    name: "solosis",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/577.gif",
    types: ["psychic"],
  },
  {
    id: 578,
    name: "duosion",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/578.gif",
    types: ["psychic"],
  },
  {
    id: 579,
    name: "reuniclus",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/579.gif",
    types: ["psychic"],
  },
  {
    id: 580,
    name: "ducklett",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/580.gif",
    types: ["water", "flying"],
  },
  {
    id: 581,
    name: "swanna",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/581.gif",
    types: ["water", "flying"],
  },
  {
    id: 582,
    name: "vanillite",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/582.gif",
    types: ["ice"],
  },
  {
    id: 583,
    name: "vanillish",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/583.gif",
    types: ["ice"],
  },
  {
    id: 584,
    name: "vanilluxe",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/584.gif",
    types: ["ice"],
  },
  {
    id: 585,
    name: "deerling",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/585.gif",
    types: ["normal", "grass"],
  },
  {
    id: 586,
    name: "sawsbuck",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/586.gif",
    types: ["normal", "grass"],
  },
  {
    id: 587,
    name: "emolga",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/587.gif",
    types: ["electric", "flying"],
  },
  {
    id: 588,
    name: "karrablast",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/588.gif",
    types: ["bug"],
  },
  {
    id: 589,
    name: "escavalier",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/589.gif",
    types: ["bug", "steel"],
  },
  {
    id: 590,
    name: "foongus",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/590.gif",
    types: ["grass", "poison"],
  },
  {
    id: 591,
    name: "amoonguss",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/591.gif",
    types: ["grass", "poison"],
  },
  {
    id: 592,
    name: "frillish",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/592.gif",
    types: ["water", "ghost"],
  },
  {
    id: 593,
    name: "jellicent",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/593.gif",
    types: ["water", "ghost"],
  },
  {
    id: 594,
    name: "alomomola",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/594.gif",
    types: ["water"],
  },
  {
    id: 595,
    name: "joltik",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/595.gif",
    types: ["bug", "electric"],
  },
  {
    id: 596,
    name: "galvantula",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/596.gif",
    types: ["bug", "electric"],
  },
  {
    id: 597,
    name: "ferroseed",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/597.gif",
    types: ["grass", "steel"],
  },
  {
    id: 598,
    name: "ferrothorn",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/598.gif",
    types: ["grass", "steel"],
  },
  {
    id: 599,
    name: "klink",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/599.gif",
    types: ["steel"],
  },
  {
    id: 600,
    name: "klang",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/600.gif",
    types: ["steel"],
  },
  {
    id: 601,
    name: "klinklang",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/601.gif",
    types: ["steel"],
  },
  {
    id: 602,
    name: "tynamo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/602.gif",
    types: ["electric"],
  },
  {
    id: 603,
    name: "eelektrik",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/603.gif",
    types: ["electric"],
  },
  {
    id: 604,
    name: "eelektross",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/604.gif",
    types: ["electric"],
  },
  {
    id: 605,
    name: "elgyem",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/605.gif",
    types: ["psychic"],
  },
  {
    id: 606,
    name: "beheeyem",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/606.gif",
    types: ["psychic"],
  },
  {
    id: 607,
    name: "litwick",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/607.gif",
    types: ["ghost", "fire"],
  },
  {
    id: 608,
    name: "lampent",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/608.gif",
    types: ["ghost", "fire"],
  },
  {
    id: 609,
    name: "chandelure",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/609.gif",
    types: ["ghost", "fire"],
  },
  {
    id: 610,
    name: "axew",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/610.gif",
    types: ["dragon"],
  },
  {
    id: 611,
    name: "fraxure",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/611.gif",
    types: ["dragon"],
  },
  {
    id: 612,
    name: "haxorus",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/612.gif",
    types: ["dragon"],
  },
  {
    id: 613,
    name: "cubchoo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/613.gif",
    types: ["ice"],
  },
  {
    id: 614,
    name: "beartic",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/614.gif",
    types: ["ice"],
  },
  {
    id: 615,
    name: "cryogonal",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/615.gif",
    types: ["ice"],
  },
  {
    id: 616,
    name: "shelmet",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/616.gif",
    types: ["bug"],
  },
  {
    id: 617,
    name: "accelgor",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/617.gif",
    types: ["bug"],
  },
  {
    id: 618,
    name: "stunfisk",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/618.gif",
    types: ["ground", "electric"],
  },
  {
    id: 619,
    name: "mienfoo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/619.gif",
    types: ["fighting"],
  },
  {
    id: 620,
    name: "mienshao",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/620.gif",
    types: ["fighting"],
  },
  {
    id: 621,
    name: "druddigon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/621.gif",
    types: ["dragon"],
  },
  {
    id: 622,
    name: "golett",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/622.gif",
    types: ["ground", "ghost"],
  },
  {
    id: 623,
    name: "golurk",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/623.gif",
    types: ["ground", "ghost"],
  },
  {
    id: 624,
    name: "pawniard",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/624.gif",
    types: ["dark", "steel"],
  },
  {
    id: 625,
    name: "bisharp",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/625.gif",
    types: ["dark", "steel"],
  },
  {
    id: 626,
    name: "bouffalant",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/626.gif",
    types: ["normal"],
  },
  {
    id: 627,
    name: "rufflet",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/627.gif",
    types: ["normal", "flying"],
  },
  {
    id: 628,
    name: "braviary",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/628.gif",
    types: ["normal", "flying"],
  },
  {
    id: 629,
    name: "vullaby",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/629.gif",
    types: ["dark", "flying"],
  },
  {
    id: 630,
    name: "mandibuzz",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/630.gif",
    types: ["dark", "flying"],
  },
  {
    id: 631,
    name: "heatmor",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/631.gif",
    types: ["fire"],
  },
  {
    id: 632,
    name: "durant",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/632.gif",
    types: ["bug", "steel"],
  },
  {
    id: 633,
    name: "deino",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/633.gif",
    types: ["dark", "dragon"],
  },
  {
    id: 634,
    name: "zweilous",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/634.gif",
    types: ["dark", "dragon"],
  },
  {
    id: 635,
    name: "hydreigon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/635.gif",
    types: ["dark", "dragon"],
  },
  {
    id: 636,
    name: "larvesta",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/636.gif",
    types: ["bug", "fire"],
  },
  {
    id: 637,
    name: "volcarona",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/637.gif",
    types: ["bug", "fire"],
  },
  {
    id: 638,
    name: "cobalion",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/638.gif",
    types: ["steel", "fighting"],
  },
  {
    id: 639,
    name: "terrakion",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/639.gif",
    types: ["rock", "fighting"],
  },
  {
    id: 640,
    name: "virizion",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/640.gif",
    types: ["grass", "fighting"],
  },
  {
    id: 641,
    name: "tornadus-incarnate",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/641.gif",
    types: ["flying"],
  },
  {
    id: 642,
    name: "thundurus-incarnate",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/642.gif",
    types: ["electric", "flying"],
  },
  {
    id: 643,
    name: "reshiram",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/643.gif",
    types: ["dragon", "fire"],
  },
  {
    id: 644,
    name: "zekrom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/644.gif",
    types: ["dragon", "electric"],
  },
  {
    id: 645,
    name: "landorus-incarnate",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/645.gif",
    types: ["ground", "flying"],
  },
  {
    id: 646,
    name: "kyurem",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/646.gif",
    types: ["dragon", "ice"],
  },
  {
    id: 647,
    name: "keldeo-ordinary",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/647.gif",
    types: ["water", "fighting"],
  },
  {
    id: 648,
    name: "meloetta-aria",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/648.gif",
    types: ["normal", "psychic"],
  },
  {
    id: 649,
    name: "genesect",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/649.gif",
    types: ["bug", "steel"],
  },
];

const pokeGenderUndefined = [
  81, 82, 83, 100, 101, 120, 121, 137, 233, 292, 337, 338, 343, 344, 374, 375,
  376, 436, 437, 462, 474, 479, 489, 490, 599, 600, 601, 615, 622, 623,
];

const pokemonGender = [
  {
    id: 1,
    name: "male",
    sprite: "./assets/battle/male.png",
  },
  {
    id: 2,
    name: "female",
    sprite: "./assets/battle/female.png",
  },
  {
    id: 3,
    name: "undefined",
    sprite: "./assets/battle/undefined.png",
  },
];
