const decode = require('./decode');

describe('Função decode', () => {
    it('A função existe', () => {
        expect(typeof decode).toBe('function');
    });
    it('A função recebe números e retorna letras', () => {
        expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
    });
    it('A função recebe uma string de números e letras e retorna apenas os números de 1 à 5 como vogais letras', () => {
        expect(decode('1dy')).toBe('ady');
    });
    it('A string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(decode('1dy').length).toBe(3);
    });
})
