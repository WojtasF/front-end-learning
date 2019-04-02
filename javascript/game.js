var secretNum = 30;

var guess = prompt("Guess a number: ")

if(guess<secretNum) {
	alert("Too low")
}

else if(guess>secretNum) {
	alert("Too high")
}

else if(guess==secretNum) {
	alert("You guessed!")
}