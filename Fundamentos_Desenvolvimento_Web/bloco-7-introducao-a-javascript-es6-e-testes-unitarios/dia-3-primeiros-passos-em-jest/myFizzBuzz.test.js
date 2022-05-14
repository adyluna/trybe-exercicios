const myFizzBuzz = require('./myFizzBuzz');

describe('Função myFizzBuzz', () => {
    it('A função recebe um múltiplo de 3 e 5 e retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('A função recebe um múltiplo de 3 e retorna "fizz"', () => {
        expect(myFizzBuzz(3)).toEqual('fizz');
    });
    it('A função recebe um múltiplo de 5 e retorna "buzz"', () => {
        expect(myFizzBuzz(5)).toEqual('buzz');
    });
    it('A função recebe um número não divisível por 3 nem por 5 e retorna o próprio número', () => {
        expect(myFizzBuzz(7)).toEqual(7);
    });
    it('A função recebe algo diferente de um número e retorna false', () => {
        expect(myFizzBuzz('abc')).toEqual(false);
    });
})