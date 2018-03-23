// Inicializando o express
var express = require("express");
var app = express();

// Define diretório base como root de conteúdo estático 
app.use(express.static(__dirname));

app.get("/", function(req, res){
	res.render("home.ejs");
});

// Inicializa o servidor na porta 8000
app.listen(8000, function(){
	console.log("Server Rodando na porta 8000");
});