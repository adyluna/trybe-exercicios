const searchEmployee = require('./searchEmployee');

describe('Função searchEmployee', () => {
    it('A função existe', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('A função retorna a informação corretamente de acordo com o ID', () => {
        expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    });
    it('A função retorna um erro se a informação não existir', () => {
        expect(() => {searchEmployee('1256-4', 'name')}).toThrowError(Error('Informação indisponível'));
    });
})