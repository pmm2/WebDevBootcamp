var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var reset = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("h3 span");
let winningScore = 5;

playerOne.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score == winningScore) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;
  }
});

playerTwo.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score == winningScore) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
  }
});

reset.addEventListener("click", resetar);

numInput.addEventListener("change", function () {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  resetar();
});

function resetar() {
  gameOver = false;
  p1Score = 0;
  p1Display.textContent = p1Score;
  p1Display.classList.remove("winner");

  p2Score = 0;
  p2Display.textContent = p2Score;
  p2Display.classList.remove("winner");
}
