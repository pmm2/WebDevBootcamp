var express = require("express");
methodOverride = require("method-override");
expressSanitizer = require("express-sanitizer");
app = express();
bodyParser = require("body-parser");
request = require("request");
mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/RestfullBlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useFindAndModify', false);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
//mongoose config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now },
});
var Blog = mongoose.model("Post", blogSchema);

//Routes
app.get("/", function (req, res) {
    res.redirect("/posts");
  });
  //index
app.get("/posts", function (req, res) {
    Blog.find({}, function (err, object) {
        if (err) {
          console.log("Deu errado");
        } else {
          res.render("index.ejs", { posts: object });
        }
      });
});
//Create
app.get("/posts/new", function (req, res) {
  res.render("new.ejs");
});
app.post("/posts", function (req, res) {
  req.body.blog.body = req.sanitize();
  Blog.create(req.body.blog, function (err, object) {
      if (err) {
          console.log("erro");
      }else{
          res.redirect("/posts")
      }
  })
  
});
//Display post
app.get("/posts/:id", function (req, res) {
  Blog.findById(req.params.id, function(err, object){
    if (err) {
        console.log("Deu errado");
      }else{
        res.render("show.ejs",{post:object});
      }
  });
});
//Edit
app.get("/posts/:id/edit", function (req, res) {
  Blog.findById(req.params.id, function(err, object){
    if (err) {
        console.log("Deu errado");
      }else{
        res.render("edit.ejs",{blog:object});
      }
  });
});
app.put("/posts/:id", function (req, res) {
  Blog.findByIdAndUpdate(req.params.id,req.body.blog, function (err,object) {
    if (err) {
      console.log("Deu errado");
    }else{
      res.redirect("/posts/"+ req.params.id);
    }
  })
});
//Delete
app.delete("/posts/:id", function (req, res) {
  Blog.findByIdAndRemove(req.params.id, function (err,object) {
    if (err) {
      console.log("Deu errado");
    }else{
      res.redirect("/posts");
    }
  })
});

app.listen(3000, function () {
  console.log("Server Up port 3000");
});
