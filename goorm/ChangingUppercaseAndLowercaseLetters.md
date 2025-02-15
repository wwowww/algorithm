# 문제 설명

A string S consisting of English alphabets and has a length of N is given. Convert this string S to uppercase if the characters are lowercase, or to lowercase if the characters are uppercase, and output it.


``` javascript
// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ 
		input: process.stdin,
		output: process.stdout
	});
	
	let input = [];
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const N = parseInt(input[0]);
	const S = input[1];  
	
	const answer = S.split('').map((str) => 
		str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase()
	).join('')

	console.log(answer);
	rl.close();
	process.exit();
})();
```