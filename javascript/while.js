var numI = -10;
console.log("All numbers between -10 and 19:")
while(numI <= 19) {
	console.log(numI)
	numI++;
}

var numII = 10;
console.log("All even numbers between 10 and 40:")
while(numII <= 40) {
	if(numII % 2 == 0) {
		console.log(numII)
	}
	numII++
}

var numIII = 300;
console.log("All odd numbers between 300 and 333:")
while(numIII <= 333) {
	if(numIII % 2 == 1) {
		console.log(numIII)
	}
	numIII++
}

var numIV = 5;
console.log("All numbers divisible by 5 AND 3 between 5 and 50")
while(numIV <= 50) {
	if((numIV % 3 == 0) && (numIV % 5 == 0)) {
		console.log(numIV)
	}
	numIV++
}