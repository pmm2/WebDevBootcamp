const cb = document.querySelector(".butao");
const text = document.querySelector(".tarefa");

setInterval(function () {
  if (cb.checked == true) {
    text.classList.add("crossed");
  } else {
    text.classList.remove("crossed");
  }
}, 1000);
