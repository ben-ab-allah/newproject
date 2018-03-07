const assert = require('assert');

function isNumber(number) {
	return typeof number === 'number';
}
// Should return x + y
function add(x, y, precision=3) {
	assert.equal(isNumber(x) && isNumber(y), true);
	// YOUR CODE HERE
	return parseFloat((x + y).toFixed(precision));
}

// We can add properties to functions !!
add.options = {
	x: {
		describe: 'First operand',
		demand: true
	},
	y: {
		describe: 'Second operand',
		demand: true,
		default: 1
	},
	p: {
		describe: 'Result decimal places',
		default: 3,
		alias: 'precision'
	}
};

// Should return x - y
function sub(x, y, precision=3) {
	assert.equal(isNumber(x) && isNumber(y), true);
	return Number((x - y).toFixed(precision));
}

sub.options = add.options;

// Should return x * y
function mul(x, y, precision=3) {
	assert.equal(isNumber(x) && isNumber(y), true);
	return Number((x * y).toFixed(precision));
}

mul.options = {};

// Should return natural logarithm of x
function ln(x, precision=3) {
	assert.equal(isNumber(x), true);
	return Number(Math.log(x).toFixed(precision));

}

ln.options = {};

// Should return logarithm base 2 of x
function log(x, precision=3) {
	assert.equal(isNumber(x), true);
	return Number(Math.log2(x).toFixed(precision));

}

log.options = {};

module.exports = {
	add: add,
	sub: sub,
	mul: mul,
	ln: ln,
	log: log
}