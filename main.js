var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var p1Diplay = document.querySelector("#p1Display");
var p2Diplay = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var newScore = 0;
var playingTo = document.getElementById("playingTo");

p1Button.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
};

resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	numInput.addEventListener("click", function(){
		newScore++;
	});
	
	playingTo.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});
