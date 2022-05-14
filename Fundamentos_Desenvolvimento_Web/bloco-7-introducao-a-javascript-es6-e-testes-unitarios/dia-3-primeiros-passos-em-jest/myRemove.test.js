const myRemove = require('./myRemove');

describe('Função myRemove', () => {
    it('A função recebe [1, 2, 3, 4] e retorna [1, 2, 4]', () => {
        const myArr = [1, 2, 3, 4]
        expect(myRemove(myArr, 3)).not.toContain(3);
    });
    it('A função recebe [1, 2, 3, 4] e retorna [1, 2, 4]', () => {
        const myArr = [1, 2, 3, 4]
        expect(myRemove(myArr, 5)).not.toContain(5);
    });
    it('A função recebe [1, 2, 3, 4] e retorna [1, 2, 4]', () => {
        const myArr = [1, 2, 3, 4]
        expect(myRemove(myArr, 3)).not.toEqual(myArr);
    });
})