import requests
import json

#Codigo que pega o CEP da empresa baseado em seu CNPJ
def pegaCEP(cnpj):
    cnpj = str(cnpj)
    url = "http://receitaws.com.br/v1/cnpj/" + cnpj
    r = requests.get(url)
    jayson = r.json()
    CEP = jayson['cep']
    CEP =cep.encode('ascii','ignore')
    return CEP
