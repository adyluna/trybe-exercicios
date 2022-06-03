const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Teste da função uppercase', () => {
  const expected = 'TESTANDO';
  const actual = 'testando';
  it('Testa se retorna uma string em caixa alta', (done) => {
    uppercase(actual, (result) => {
      try {
        expect(result).toBe(expected);
        done();
      } catch (error) {
        done(error);
      }
    })
});})