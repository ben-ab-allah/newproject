const calculator = require('./calculator');
const expect = require('expect');

describe('add()', () => {
	it('Should throw an error', () => {
		try {
			calculator.add('10', 17);
		} catch (e) {
			return;
		}

		throw new Error('add should throw an error');
	})

	it('Should add two numbers with 3 decimal precision', () => {
		let result = parseFloat((1+1).toFixed(3))
		expect(calculator.add(1, 1)).toBe(2);

		result = parseFloat((1+1.25).toFixed(3))
		expect(calculator.add(1, 1.25)).toBe(result);

		result = parseFloat((1+1.251).toFixed(3))
		expect(calculator.add(1, 1.251)).toBe(result);

		result = parseFloat((1+1.255).toFixed(3))
		expect(calculator.add(1, 1.255)).toBe(result);

		result = parseFloat((1+1.2553).toFixed(3))
		expect(calculator.add(1, 1.2553)).toBe(result);

		result = parseFloat((1+1.25555).toFixed(3))
		expect(calculator.add(1, 1.2555)).toBe(result);

		result = parseFloat((1+1.2577).toFixed(3))
		expect(calculator.add(1, 1.2577)).toBe(result);
	})

	it('Should add two numbers with 4 decimal precision', () => {
		let result = parseFloat((1+1).toFixed(4))
		expect(calculator.add(1, 1, 4)).toBe(result);

		result = parseFloat((1+1.255).toFixed(4))
		expect(calculator.add(1, 1.255, 4)).toBe(result);

		result = parseFloat((1+1.2551).toFixed(4))
		expect(calculator.add(1, 1.2551, 4)).toBe(result);

		result = parseFloat((1+1.2552).toFixed(4))
		expect(calculator.add(1, 1.2552, 4)).toBe(result);

		result = parseFloat((1+1.25535).toFixed(4))
		expect(calculator.add(1, 1.25535, 4)).toBe(result);

		result = parseFloat((1+1.2555789).toFixed(4))
		expect(calculator.add(1, 1.2555789, 4)).toBe(result);

		result = parseFloat((1+1.2577125).toFixed(4))
		expect(calculator.add(1, 1.2577125, 4)).toBe(result);
	})
});

describe('sub()', () => {
	it('Should throw an error', () => {
		try {
			calculator.sub('10', 17);
		} catch (e) {
			return;
		}

		throw new Error('add should throw an error');
	})

	it('Should substract two numbers with 3 decimal precision', () => {
		let result = parseFloat((1-1).toFixed(3))
		expect(calculator.sub(1, 1)).toBe(result);

		result = parseFloat((1-1.25).toFixed(3))
		expect(calculator.sub(1, 1.25)).toBe(result);

		result = parseFloat((1-1.251).toFixed(3))
		expect(calculator.sub(1, 1.251)).toBe(result);

		result = parseFloat((1-1.255).toFixed(3))
		expect(calculator.sub(1, 1.255)).toBe(result);

		result = parseFloat((1-1.2553).toFixed(3))
		expect(calculator.sub(1, 1.2553)).toBe(result);

		result = parseFloat((1-1.25555).toFixed(3))
		expect(calculator.sub(1, 1.2555)).toBe(result);

		result = parseFloat((1-1.2577).toFixed(3))
		expect(calculator.sub(1, 1.2577)).toBe(result);
	})

	it('Should substract two numbers with 4 decimal precision', () => {
		let result = parseFloat((1-1).toFixed(4))
		expect(calculator.sub(1, 1, 4)).toBe(result);

		result = parseFloat((1-1.255).toFixed(4))
		expect(calculator.sub(1, 1.255, 4)).toBe(result);

		result = parseFloat((1-1.2551).toFixed(4))
		expect(calculator.sub(1, 1.2551, 4)).toBe(result);

		result = parseFloat((1-1.2552).toFixed(4))
		expect(calculator.sub(1, 1.2552, 4)).toBe(result);

		result = parseFloat((1-1.25535).toFixed(4))
		expect(calculator.sub(1, 1.25535, 4)).toBe(result);

		result = parseFloat((1-1.2555789).toFixed(4))
		expect(calculator.sub(1, 1.2555789, 4)).toBe(result);

		result = parseFloat((1-1.2577125).toFixed(4))
		expect(calculator.sub(1, 1.2577125, 4)).toBe(result);
	})
})

describe('mul()', () => {
	it('Should throw an error', () => {
		try {
			calculator.mul('10', 17);
		} catch (e) {
			return;
		}

		throw new Error('mul should throw an error');
	})

	it('Should multply two numbers with 3 decimal precision', () => {
		let result = parseFloat((1 * 1).toFixed(3));
		expect(calculator.mul(1, 1)).toBe(result)

		result = parseFloat((9 * 13.1442).toFixed(3));
		expect(calculator.mul(9, 13.1442)).toBe(result)

		result = parseFloat((9 * 2.7182).toFixed(3));
		expect(calculator.mul(9, 2.7182)).toBe(result)
	})

	it('Should multply two numbers with 4 decimal precision', () => {
		let result = parseFloat((1 * 1).toFixed(4));
		expect(calculator.mul(1, 1, 4)).toBe(result)

		result = parseFloat((9 * 13.1442).toFixed(4));
		expect(calculator.mul(9, 13.1442, 4)).toBe(result)

		result = parseFloat((9 * 2.7182).toFixed(4));
		expect(calculator.mul(9, 2.7182, 4)).toBe(result)
	})
})

describe('ln()', () => {
	it('Should throw an error', () => {
		try {
			calculator.ln('10');
		} catch (e) {
			return;
		}

		throw new Error('ln should throw an error');
	})

	it('Should compute the natural logarithm of x with 3 decimal precision', () => {
		let result = parseFloat((Math.log(1)).toFixed(3));
		expect(calculator.ln(1)).toBe(result)

		result = parseFloat((Math.log(13.1442)).toFixed(3));
		expect(calculator.ln(13.1442)).toBe(result)

		result = parseFloat((Math.log(2.1782)).toFixed(3));
		expect(calculator.ln(2.1782)).toBe(result)
	})

	it('Should compute the natural logarithm of x with 4 decimal precision', () => {
		let result = parseFloat((Math.log(1)).toFixed(4));
		expect(calculator.ln(1, 4)).toBe(result)

		result = parseFloat((Math.log(13.1442)).toFixed(4));
		expect(calculator.ln(13.1442, 4)).toBe(result)

		result = parseFloat((Math.log(2.1782)).toFixed(4));
		expect(calculator.ln(2.1782, 4)).toBe(result)
	})
})

describe('log()', () => {
	it('Should throw an error', () => {
		try {
			calculator.log('10');
		} catch (e) {
			return;
		}

		throw new Error('log should throw an error');
	})

	it('Should compute the base 2 logarithm of x with 3 decimal precision', () => {
		let result = parseFloat((Math.log2(1)).toFixed(3));
		expect(calculator.log(1)).toBe(result)

		result = parseFloat((Math.log2(13.1442)).toFixed(3));
		expect(calculator.log(13.1442)).toBe(result)

		result = parseFloat((Math.log2(2.1782)).toFixed(3));
		expect(calculator.log(2.1782)).toBe(result)
	})

	it('Should compute the natural logarithm of x with 4 decimal precision', () => {
		let result = parseFloat((Math.log2(1)).toFixed(4));
		expect(calculator.log(1, 4)).toBe(result)

		result = parseFloat((Math.log2(13.1442)).toFixed(4));
		expect(calculator.log(13.1442, 4)).toBe(result)

		result = parseFloat((Math.log2(2.1782)).toFixed(4));
		expect(calculator.log(2.1782, 4)).toBe(result)
	})
})