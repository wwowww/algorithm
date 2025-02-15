# 문제 설명

A integer N is given. You want to print the length of the integer N. In this case, the newgative sign - also has a length of 1 character.


``` javascript
// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		console.log(line.length);
		rl.close();
	}
	
	process.exit();
})();

```