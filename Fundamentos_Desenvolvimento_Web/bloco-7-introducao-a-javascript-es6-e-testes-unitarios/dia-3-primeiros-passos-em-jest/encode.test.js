const encode = require('./encode');

describe('Função decode', () => {
    it('A função existe', () => {
        expect(typeof encode).toBe('function');
    });
    it('A função recebe números e retorna letras', () => {
        expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
    });
    it('A função recebe uma string de números e letras e retorna apenas os números de 1 à 5 como vogais letras', () => {
        expect(encode('bianca')).toBe('b31nc1');
    });
    it('A string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('bianca').length).toBe(6);
    });
})