const yargs = require('yargs')
const calculator = require('./calculator.js')

let argv = yargs
	.command('add', 'Add 2 numbers x and y', calculator.add.options)
	.command('sub', 'Substract y from x', calculator.sub.options)
	.command('mul', 'Multiply x by y', calculator.mul.options)
	.command('ln',  'Compute the natural logarithm of a number x', calculator.ln.options)
	.command('log', 'Compute the base 2 logarithm of a number x', calculator.log.options)
	.help()
	.alias('help', 'h')
	.argv;

let command = argv._[0]

function main() {
	switch (command) {
		case 'add':
			console.log('result', calculator.add(argv.x, argv.y, argv.p));
			break;
		case 'sub':
		 console.log('result',calculator.sub(argv.x, argv.y, argv.p));
			break;
		case 'mul':
		console.log('result',calculator.mul(argv.x, argv.y, argv.p));
			break;
		case 'ln':
		 console.log('result',calculator.ln(argv.x, argv.y, argv.p));
			break;
		case 'log':
		 console.log('result',calculator.log(argv.x, argv.y, argv.p));
			break;
		default:
			console.log('Unrecognized Command!');
	}
}

main()
