// Inicializando o express
var express = require("express");
var app = express();

// Denife diretório base como root de conteúdo estático 
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

// Inicializa o servidor na porta 8000
app.listen(8000, function(){
	console.log("Server Rodando");
});