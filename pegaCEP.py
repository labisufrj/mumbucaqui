import requests
import json

def pegaCEP(cnpj):
    cnpj = str(cnpj)
    url = "http://receitaws.com.br/v1/cnpj/" + cnpj
    r = requests.get(url)
    jayson = r.json()
    cep = jayson['cep']
    cep =cep.encode('ascii','ignore')
    return cep
