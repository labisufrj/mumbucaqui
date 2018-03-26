module.exports = {
	// Retira caracteres não numéricos do CNPJ
	limpaCNPJ: function(cnpj) {
		let temp = cnpj;
		temp = temp.split(".").join("");
		temp = temp.split("/").join("");
		temp = temp.split("-").join("");

		return temp
	}
}