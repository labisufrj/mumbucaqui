// ========================== Início do Bloco de setups ========================== //

// Inicializando o express
let express = require("express");
let app = express();

// Inicializando request
let request = require("request");

// Inicializando url
let url = require("url");

// Inicializando tools.js
let tools = require("./scripts/tools");

// Definindo arquivos de renderização como ejs
app.set("view engine", "ejs");

// Define diretório base como root de conteúdo estático 
app.use(express.static(__dirname));

// ========================== Fim do Bloco de setups =========================== //

// Renderiza a página principal
app.get("/", function(req, res){
	res.render("home");
});

// Página de requisição à API da receita federal
app.get("/pegarCEP", function(req, res){
	// Pega o cnpj da query, passada pelo form da página inicial
	let cnpj = req.query.cnpj;
	// Remove caracteres não numéricos do CNPJ
	cnpj = tools.limpaCNPJ(cnpj);
	// Define o endereço da API
	let redirect = "http://receitaws.com.br/v1/cnpj/" + cnpj;
	// Faz a requisição
	request(redirect, function(error, response, body){
		// Caso não haja erro, e o browser retorne status code 200, continuar operação
		if(!error && response.statusCode == 200){
			// Transforma conteúdo HTML em JSON
			let data = JSON.parse(body);
			// Pega a parte do JSON referente ao CEP
			let cep = data["cep"];
			res.redirect(url.format({
					pathname: "/",
					query: {
						cep: cep
					}
				})
			);
		}
		// Em caso de erro, printar no console para debugging
		else {
			console.log(error);
		}
	});
});

// Inicializa o servidor na porta 8000
app.listen(8000, function(){
	console.log("Server Rodando na porta 8000");
});
