var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");
app.use(bodyParser.urlencoded({ extended: true }));
var campgrounds = [
  {name:"Serra talhada" , image:"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  {name:"Serra não tão talhada" , image:"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  {name:"Serra lisa" , image:"https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&h=350"},
  {name:"Serra talhada" , image:"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  {name:"Serra não tão talhada" , image:"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  {name:"Serra lisa" , image:"https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&h=350"},
  {name:"Serra talhada" , image:"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  {name:"Serra não tão talhada" , image:"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  {name:"Serra lisa" , image:"https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&h=350"},
]
app.get("/", function (req, res) {
    res.render("home.ejs");
  });
  app.get("/campgrounds", function (req, res) {
    
    res.render("campgrounds.ejs", {campgrounds:campgrounds});
  });
app.listen(3000, function () {
    console.log("Server Up port 3000");
  });
  
  app.post("/campgrounds", function (req, res) {
     var name = req.body.name;
     var image = req.body.image;
     var newCampground = {name: name , image: image};
     campgrounds.push(newCampground);
     res.redirect("/campgrounds");
  });

  app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
  });