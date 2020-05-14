var body = document.querySelector("body");
var isBlue = true;

setInterval(function () {
  if (isBlue) {
    body.style.background = "#aabbcc";
  } else {
    body.style.background = "#0022ff";
  }
  isBlue = !isBlue;
}, 1000);
