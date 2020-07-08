var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Tutorial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
var Post = mongoose.model("Post", postSchema);
// var userSchema = new mongoose.Schema({
//   email: String,
//   name: String,
//   posts: [postSchema],
// });
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
  });
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "pedro@hotmail.com",
//     name: "pedro milet"
// });
// newUser.posts.push({
//     title: "Pensando na vida 2 o retorno",
//     content: "Mo dificil a vida ne broder"
// });
// newUser.save(function (err,object) {
//     if (err) {
//         console.log("Deu errado");
//       } else {
//         console.log(object);
//       }
// });

// newPost.save(function (err,object) {
//     if (err) {
//         console.log("Deu errado");
//       } else {
//         console.log(object);
//       }
// });

User.findOne({ name: "pedro milet" }, function (err, object) {
  if (err) {
    console.log("Deu errado");
  } else {
    object.posts.push({
      title: "Receita de banana",
      content: "Descasca e come",
    });
    object.save(function (err, object) {
      if (err) {
        console.log("Deu errado");
      } else {
        console.log(object);
      }
    });
  }
});
