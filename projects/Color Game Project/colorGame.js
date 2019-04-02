var squaresNum = 6
var colors = [];
var pickedColor;// = colors[pickColor()];
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var result = document.getElementById("result");
var resetButton = document.getElementById("leftBtn");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	addBtnsListeners();
	addSquaresListeners();
	reset();
}

function addBtnsListeners(){
	//buttons event listeners
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? squaresNum = 3: squaresNum = 6;
			reset();
		});
	}
}

function addSquaresListeners(){
	//squares event listeners
	for (var i = 0; i < squares.length; i++) {
		//add click events to squares
		squares[i].addEventListener("click", function(){
			//grabs a color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compares clicked color with displayed
			if(clickedColor===pickedColor){
				result.textContent = "Correct!";
				changeColors(clickedColor)
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "PLAY AGAIN?";
			} else{
				this.style.backgroundColor = "#232323";
				result.textContent = "Try again";
			}
		});
	}
}

function reset(){
	//generate new colors
	colors = generateColors(squaresNum);
	//pick new color
	pickedColor = colors[pickColor()];
	//change color display
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS";
	result.textContent = "";
	//change square colors
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];		
		} else {
			squares[i].style.display = "none";
		}
	}
	//change background color
	h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
	//loop through colors
	for (i = 0; i<squares.length; i++){
		//change color of each square to matched
		squares[i].style.backgroundColor = color;
	}

}

function randomColor() {
	//generate random RGB color
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")"
}

function generateColors(x) {
	//make an array
	var arr = [];
	//add colors to an array
	for (i=0; i<x; i++) {
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function pickColor() {
	//pick color from random square
	return Math.floor(Math.random() * colors.length);
}

resetButton.addEventListener("click", function(){
	reset();
})