var express = require("express");
var app = express();

app.use(express.static(__dirname));

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.listen(8000, function(){
	console.log("Server Rodando");
})