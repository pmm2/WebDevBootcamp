var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Tutorial', {useNewUrlParser: true});
var catSchema = new mongoose.Schema({
      name: String,
      age: Number,
      mood: String
});

var Cat = mongoose.model("Cat", catSchema);
//Create cat object
// var naruto = new Cat ({
//     name: "Jesus",
//     age:11,
//     mood:"Christ",
// });
//Store cat object
// naruto.save(function(err, object){
// if (err) {
//     console.log("Deu errado");
// }else{
//     console.log("Deu certo");
// }
// });
//Easier way to create and store object
Cat.create({
    name: "Guy",
    age:11,
    mood:"Happy",
},function (err,object) {
    if (err) {
        console.log("Deu errado");
    }else{
        console.log(object);
    }
});
//Retrive cats
Cat.find({}, function(err,object){
    if (err) {
        console.log("Deu errado");
    }else{
        console.log(object);
    }
})