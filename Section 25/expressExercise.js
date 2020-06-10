var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Ola bem vindo ao exercicio");
});

app.get("/speak/:animal", function (req, res) {
  var nome = req.params.animal;
  var sons = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof",
    Cat: "Meow",
  };
  var som = sons[nome];
  res.send(som);
  //   if (nome == "pig") {
  //     res.send("oink");
  //   } else if (nome == "cow") {
  //     res.send("Moo");
  //   } else if (nome == "dog") {
  //     res.send("Woof Woof");
  //   } else {
  //     res.send("Desculpe, mas não conhecemos este animal");
  //   }
});

app.get("/repeat/:word/:loops", function (req, res) {
  var word = req.params.word;
  var loops = req.params.loops;
  var resposta = "";
  for (let index = 0; index < loops; index++) {
    resposta += word + " ";
  }
  res.send(resposta);
});
app.get("*", function (req, res) {
  res.send("Quatro zero quatro boy, isso n existe");
});
app.listen(3000, function () {
  console.log("Server Up port 3000");
});
