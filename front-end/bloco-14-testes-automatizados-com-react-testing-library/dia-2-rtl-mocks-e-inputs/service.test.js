const service = require('./service');
jest.mock('./service');

describe('Random number generator function Tests', () => {
	it('Should return a random number', () => {
			randomNumber = jest.fn().mockReturnValue(10);
			randomNumber();
	
			expect(randomNumber).toHaveBeenCalled();
			expect(randomNumber()).toBe(10);
			expect(randomNumber).toHaveBeenCalledTimes(2);
	
			randomNumber.mockReset();
			randomNumber = jest.fn().mockImplementation((a, b) => a / b);
	
			expect(randomNumber(40, 10)).toBe(4);
			expect(randomNumber).toHaveBeenCalledTimes(1);
	
			randomNumber.mockReset();
			randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
			randomNumber(2, 3, 5);
	
			expect(randomNumber).toHaveBeenCalledTimes(1);
			expect(randomNumber).toHaveBeenCalledWith(2, 3, 5);
			expect(randomNumber(2, 3, 5)).toBe(30);
	})
})

describe('To UpperCase Tests', () => {
	it('Should return uppercase string', () => {
		service.toUpperFunction = jest.fn().mockImplementation((elem) => elem.toLowerCase());
		expect(service.toUpperFunction('BLABLA')).toEqual('blabla');

		service.firstLetterOf = jest.fn().mockImplementation((elem) => elem[elem.length - 1]);
		expect(service.firstLetterOf('Bianca')).toBe('a');

	});
})

describe('To Concat Tests', () => {
	it('', () => {
		service.concatenateStrings = jest.fn().mockImplementation((a, b, c) => a.concat(b, c));
		expect(service.concatenateStrings('Eu', ' ', 'amo')).toEqual('Eu amo');
	});
})

