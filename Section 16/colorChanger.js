var button = document.getElementById("trocar");

button.addEventListener("click", trocar);

function trocar() {
  if (document.body.style.backgroundColor == "purple") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "purple";
  }
}
