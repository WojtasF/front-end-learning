var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1SC = document.querySelector("#p1SC");
var p2SC = document.querySelector("#p2SC");
var countSC = document.querySelector("#countSC");
var scoreNum = document.querySelector("#scoreNum");
var reset = document.querySelector("#res");
var p1Score = 0;
var p2Score = 0;
var result = false;

p1Button.addEventListener("click", function(){
	if(!result){
		p1Score++;
		if(p1Score==countSC.textContent){
			result = true;
			p1SC.classList.add("winner");
		}
		p1SC.textContent = p1Score;
	}
})

p2Button.addEventListener("click", function(){
	if(!result){
		p2Score++;
		if(p2Score==countSC.textContent){
			result = true;
			p2SC.classList.add("winner");
		}
		p2SC.textContent = p2Score;
	}
})

scoreNum.addEventListener("change", function(){
	if(!result){
		countSC.textContent = scoreNum.value;
		resetGame();
	}
})

function resetGame(){
	p1Score = 0;
	p2Score = 0;
	p1SC.textContent = 0;
	p2SC.textContent = 0;
	p1SC.classList.remove("winner");
	p2SC.classList.remove("winner");
	result = false;
}

reset.addEventListener("click", function(){
	resetGame();
})