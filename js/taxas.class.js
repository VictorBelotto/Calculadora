export  class Dados {
    compra
    financiamento
    banco
    cidade
    enquadramento
    agencia
    
    constructor(compra, financiamento, banco, cidade, enquadramento, agencia) {
        this.compra = compra
        this.financiamento = financiamento
        this.banco = banco
        this.cidade = cidade
        this.enquadramento = enquadramento
        this.agencia = agencia
    } 
}


export class Taxas {
    cartorio
    itbi 
    vistoria
    relacionamento
}

export class Itbi {

    static calculaItbi(dado, taxa){
        dado.recursosProprios = (dado.compra - dado.financiamento)
        this.cidade(dado, taxa)
    }

    static cidade(dado, taxa){
        switch (dado.cidade) {
            case 'campinas':
                taxa.itbi = dado.compra * 0.027
                break;
            case 'guarulhos':
                taxa.itbi = (dado.financiamento * 0.005) + (dado.recursosProprios * 0.02)
                break;
            // Adicione outros casos para outras cidades aqui...
            default:
                throw new Error(`Cidade desconhecida: ${dado.cidade}`)
        }
    }
}


