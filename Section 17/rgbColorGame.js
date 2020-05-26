var colors = generateRandomColor(6);
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("newGame");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var numberOfBlocks = 6;
colorDisplay.textContent = pickedColor;
//Seleciona o modo facil criando 3 novas cores
easyButton.addEventListener("click", function () {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  colors = generateRandomColor(3);
  numberOfBlocks = 3;
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  h1.style.background = "DarkCyan";
  for (let index = 0; index < squares.length; index++) {
    if (index < 3) {
      squares[index].style.background = colors[index];
    } else {
      squares[index].style.display = "none";
    }
  }
});
//Seleciona o modo facil criando 6 novas cores
hardButton.addEventListener("click", function () {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  colors = generateRandomColor(6);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  h1.style.background = "DarkCyan";
  numberOfBlocks = 6;
  for (let index = 0; index < squares.length; index++) {
    if (index < 3) {
      squares[index].style.background = colors[index];
    } else {
      squares[index].style.display = "block";
      squares[index].style.background = colors[index];
    }
  }
});
//Atribui a cor aos quadrados e a função de clique
for (let index = 0; index < squares.length; index++) {
  squares[index].style.background = colors[index];
  squares[index].addEventListener("click", function () {
    console.log(this.style.background, pickedColor);
    if (this.style.background == pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play again?";
      changeColors(this.style.background);
      h1.style.background = this.style.background;
    } else {
      this.style.background = "black";
      messageDisplay.textContent = "try again";
    }
  });
}
//Botão que faz um novo jogo
resetButton.addEventListener("click", function () {
  colors = generateRandomColor(numberOfBlocks);
  pickedColor = pickRandomColor();
  messageDisplay.textContent = "";
  resetButton.textContent = "New Game";
  colorDisplay.textContent = pickedColor;
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.background = colors[index];
  }
  h1.style.background = "DarkCyan";
});

function changeColors(color) {
  for (let index = 0; index < colors.length; index++) {
    squares[index].style.background = color;
  }
}

function pickRandomColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  var arr = [];
  for (let index = 0; index < num; index++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 255 + 1);
  var green = Math.floor(Math.random() * 255 + 1);
  var blue = Math.floor(Math.random() * 255 + 1);
  var color = ["rgb(" + red + ", " + green + ", " + blue + ")"];
  return color;
}
