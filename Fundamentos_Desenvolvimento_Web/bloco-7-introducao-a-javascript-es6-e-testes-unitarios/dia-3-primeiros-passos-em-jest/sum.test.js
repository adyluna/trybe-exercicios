const sum = require('./sum');

describe('Função soma', () => {
    it('A função recebe 4 e 5 e retorna 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('A função recebe 0 e 0 e retorna 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('A função retorna um erro quando recebe uma string', () => {
        expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
    });
})
