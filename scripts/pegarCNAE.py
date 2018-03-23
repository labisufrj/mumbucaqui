import requests
import json

# Código que pega o CNAE da empresa de acordo com seu CNPJ.

def pegaCNAE(cnpj):
    cnpj = str(cnpj)
    url = "http://receitaws.com.br/v1/cnpj/" + cnpj
    r = requests.get(url)
    jayson = r.json()
    CNAE = jayson['atividade_principal'][0]['code']
    CNAE = CNAE.encode('ascii','ignore')
    return CNAE