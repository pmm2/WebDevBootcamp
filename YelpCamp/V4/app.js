var express = require("express");
app = express();
bodyParser = require("body-parser");
request = require("request");
mongoose = require("mongoose");
Campground = require("./models/campground");
Comment = require("./models/comment");
seedDB =require("./seeds.js");
app.use(bodyParser.urlencoded({ extended: true }));
seedDB();
mongoose.connect("mongodb://localhost:27017/YelpCamp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Schemas

app.get("/", function (req, res) {
  res.render("campgrounds/home.ejs");
});

app.get("/campgrounds", function (req, res) {
  // res.render("campgrounds.ejs", { campgrounds: campgrounds });
  Campground.find({}, function (err, object) {
    if (err) {
      console.log("Deu errado");
    } else {
      res.render("campgrounds/index.ejs", { campgrounds: object });
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
  res.render("campgrounds/new.ejs");
});

app.get("/campgrounds/:id",function (req,res) {
  Campground.findById(req.params.id).populate("comments").exec(function (err, object) {
    if (err) {
      console.log("Deu errado")
    }else{
      console.log(object);
      res.render("campgrounds/show.ejs",{campground:object});
    }
  })
  
});
//Comentarios

//Procura o campgrounds na base de dados e cria um form para um comentario nele
app.get("/campgrounds/:id/comments/new", function (req, res) {
  Campground.findById(req.params.id, function (err, campground) {
    if(err){
      console.log("erro");
    }else{
      console.log(campground);
      res.render("comments/new.ejs",{campground: campground});
    }
  });
});
//Procura um campground e atribui um comentario feito no form anterior
app.post("/campgrounds/:id/comments", function (req, res) {
  Campground.findById(req.params.id, function (err, campground) {
    if(err){
      console.log("erro");
    }else{
     Comment.create(req.body.comment,function (err,comment) {
      if(err){
        console.log("erro");
      }else{
        campground.comments.push(comment);
        campground.save();
        res.redirect("/campgrounds/"+campground._id);
      }
     })
    }
  });
});

