import requests
import json

//Codigo que pega a Atividade da empresa baseado em seu cnpj

def pegaAtividade(cnpj):
    cnpj = str(cnpj)
    url = "http://receitaws.com.br/v1/cnpj/" + cnpj
    r = requests.get(url)
    jayson = r.json()
    atividade = jayson['atividade_principal'][0]['text']
    atividade = atividade.encode('ascii','ignore')
    return atividade