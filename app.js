// ========================== Início do Bloco de setups ========================== //

// Inicializando o express
let express = require("express");
let app = express();

// Definindo arquivos de renderização como ejs
app.set("view engine", "ejs");

// Define diretório base como root de conteúdo estático 
app.use(express.static(__dirname));

// ========================== Fim do Bloco de setups =========================== //

// Renderiza a página principal
app.get("/", function(req, res){
	res.render("home");
});

// Inicializa o servidor na porta 8000
app.listen(8000, function(){
	console.log("Server Rodando na porta 8000");
});
