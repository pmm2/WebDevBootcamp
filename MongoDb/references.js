var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Tutorial_2_oRetorno", {
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

// User.create({
//     email:"bob@hotmail.com",
//     name:"bob bobao"
// });
//cria um post
// Post.create({
//     title:"Pensamentos do bob 2",
//     content:"nao esta mais lasca broder"
// }, function (err,post) {
//     //Procura o usuario q vai atribuir o post
//     User.findOne({email:"bob@hotmail.com"}, function (err,foundUser) {
//         //Acha o usuario e commita o post para o usario
//         foundUser.posts.push(post);
//         foundUser.save(function (err,data) {
//             console.log(data);
//         })
//     })
// });

//Coloca os posts q estavam apenas sendo referenciados diretamente dentro do objeto
User.findOne({email:"bob@hotmail.com"}).populate("posts").exec(function (err,user) {
    if (err) {
        console.log(err);
    }else{
        console.log(user);
    }
})
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

// User.findOne({ name: "pedro milet" }, function (err, object) {
//   if (err) {
//     console.log("Deu errado");
//   } else {
//     object.posts.push({
//       title: "Receita de banana",
//       content: "Descasca e come",
//     });
//     object.save(function (err, object) {
//       if (err) {
//         console.log("Deu errado");
//       } else {
//         console.log(object);
//       }
//     });
//   }
// });
