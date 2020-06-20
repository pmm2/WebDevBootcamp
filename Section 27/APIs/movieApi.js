var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");
app.get("/", function (req, res) {
    res.render("search.ejs");
  });
app.get("/results", function (req,res) {
     let query = req.query.movieNameSearch;
     let url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function (error, response, body) {  
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const parsedData = JSON.parse(body);
  res.render("results.ejs", {parsedData : parsedData})
  
});

})
app.listen(3000, function () {
    console.log("Server Up port 3000");
  });
  