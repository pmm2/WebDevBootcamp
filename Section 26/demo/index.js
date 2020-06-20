var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.render("home.ejs");
});
app.get("/fallinlovewith/:animal", function (req, res) {
  var animal = req.params.animal;
  res.render("love.ejs", { thing: animal });
});
app.get("/posts", function (req, res) {
  var posts = [
    { title: "Primeiro Post", author: "Pedro" },
    { title: "Segundo Post", author: "Joao" },
    { title: "Terceiro Post", author: "Andre" },
  ];
  res.render("posts.ejs", { posts: posts });
});
app.listen(3000, function () {
  console.log("Server Up port 3000");
});
