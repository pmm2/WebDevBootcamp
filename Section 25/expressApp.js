var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("Dale ai");
});
app.get("/bye", function (req, res) {
  res.send("goodbye");
});
app.get("/dog", function (req, res) {
  res.send("meow");
});
app.listen(3000, function () {
  console.log("Server Up port 3000");
});
app.get("/teste/:coisa", function (req, res) {
  var nome = req.params.coisa;
  res.send("Vc entrou na area de teste de " + nome);
});
app.get("*", function (req, res) {
  res.send("Quatro zero quatro boy, isso n existe");
});
