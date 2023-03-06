export  class dados {
    compra
    financiamento
    banco
    cidade
    enquadramento
    
    constructor(compra, financiamento, banco, cidade, enquadramento) {
        this.compra = compra
        this.financiamento = financiamento
        this.banco = banco
        this.cidade = cidade
        this.enquadramento = enquadramento
    } 
}


export class taxas {
    cartorio
    itbi 
    vistoria
    relacionamento
}

export class itbi {

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


