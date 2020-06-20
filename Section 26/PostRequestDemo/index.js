var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var amigos = ["Joao", "Chico", "Sarah", "Fernando"];
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.render("home.ejs");
});
app.get("/amigos", function (req, res) {
  res.render("friends.ejs", { amigos: amigos });
});
app.post("/addamigo", function (req, res) {
  var novoAmigo = req.body.novoAmigo;
  amigos.push(novoAmigo);
  res.redirect("/amigos");
});
app.listen(3000, function () {
  console.log("Server Up port 3000");
});
