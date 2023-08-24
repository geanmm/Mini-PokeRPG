// let array = [];
// //649
// const getPokemon = async (id) => {
//   await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((res) => res.json())
//     .then((data) =>
//       array.push({
//         id: id,
//         name: data.name,
//         sprite:
//           data.sprites.versions["generation-v"]["black-white"]["animated"][
//             "front_default"
//           ],
//         types: data.types.map((types) => {
//           return types.type.name;
//         }),
//       })
//     );
// };

// for (let i = 1; i <= 649; i++) {
//   getPokemon(i);
//   if (i == 649) console.log(array);
// }
