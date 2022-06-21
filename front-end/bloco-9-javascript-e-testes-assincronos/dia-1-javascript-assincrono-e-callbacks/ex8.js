const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

const pokeMessage = (param1, param2) => {
  if (param2 === null) {
    return param1;
  } return console.log(param2);
};

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(({ name }) => name === filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(({ name}) => name === filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails('blabla', pokeMessage);

module.exports = {
  getPokemonDetails,
  pokeMessage,
};