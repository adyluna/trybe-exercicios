// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, pokeMessage } = require("./ex8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const theError = new Error('Não temos esse pokémon para você :(');

    function callback(err, result) {
      try
      {
      expect(err).toEqual(theError);
      done();
    } catch (error) {
      done(error);
    }

    };

    getPokemonDetails(({ name }) => name === 'Charmander', callback);
    
  });
});