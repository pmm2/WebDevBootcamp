var express = require("express");
app = express();
bodyParser = require("body-parser");
request = require("request");
mongoose = require("mongoose");
Campground = require("./models/campground");
seedDB =require("./seeds.js")
app.use(bodyParser.urlencoded({ extended: true }));
seedDB();
mongoose.connect("mongodb://localhost:27017/YelpCamp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Schemas

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("/campgrounds", function (req, res) {
  // res.render("campgrounds.ejs", { campgrounds: campgrounds });
  Campground.find({}, function (err, object) {
    if (err) {
      console.log("Deu errado");
    } else {
      res.render("index.ejs", { campgrounds: object });
    }
  });
});

app.listen(3000, function () {
  console.log("Server Up port 3000");
});

//Metodo post que adiciona um novo Campground na lista

app.post("/campgrounds", function (req, res) {
  //Pega a data
  var name = req.body.name;
  var image = req.body.image;
  var description =req.body.description;
  var newCampground = { name: name, image: image, description : description };
  //Cria e adiciona novo campground
  Campground.create(newCampground, function (err, object) {
    if (err) {
      console.log("Deu errado");
    } else {
      res.redirect("/campgrounds");
    }
  });
});

//Mostra form para criar campground
app.get("/campgrounds/new", function (req, res) {
  res.render("new.ejs");
});

app.get("/campgrounds/:id",function (req,res) {
  Campground.findById(req.params.id).populate("comments").exec(function (err, object) {
    if (err) {
      console.log("Deu errado")
    }else{
      console.log(object);
      res.render("show.ejs",{campground:object});
    }
  })
  
});