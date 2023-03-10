export  class Dados {
    static compra
    static financiamento
    static banco
    static cidade
    static enquadramento
    static agencia
    
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


export const camposValidados = {
    compra: false,
    financiamento: false,
    banco: false,
    cidade: false,
    enquadramento: false,
    agencia: false
  }





