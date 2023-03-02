const compraEVenda = document.querySelector("#compraEVenda")
const financiamento = document.querySelector("#financiamento")
const selectBanco = document.querySelector("#selectBanco")
const selectCidade = document.querySelector("#selectCidade")
const selectEnquadramento = document.querySelector("#selectEnquadramento")
const botaoCalcular = document.querySelector("#botaoCalcular")
const outputDados = document.querySelector("#outputDados")

const enquadramento = document.querySelector("#enquadramento")


class dados {
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

class taxasCalculadas {
    cartorio
    itbi 
    vistoria
    relacionamento
}

class limiteMCMV {
    campinas = 264000
    guarulhos = 264000
}


botaoCalcular.addEventListener('click', () => {
    const dado = new dados(compraEVenda.valueAsNumber, financiamento.valueAsNumber, selectBanco.value, selectCidade.value, selectEnquadramento.value)
    const taxa = new taxasCalculadas()
   

    referenciaTaxas(dado, taxa)

    console.log(dado, taxa)

})


function referenciaTaxas(dado, taxa){
    dado.recursosProprios = dado.compra - dado.financiamento

    if(dado.cidade == "campinas"){
        taxa.relacionamento = 1500
        taxa.itbi = dado.compra * 0.027
    }
        
        else if(dado.cidade == "guarulhos"){
            taxa.relacionamento = 500
            taxa.itbi = (dado.financiamento * 0.005) + (dado.recursosProprios * 0.02)
        }
    
}


function verificaBanco(banco){
    if(banco == "caixa"){
        return true
    }
}




function trocaDisplay(referencia){
    referencia.classList.toggle("display-none")
}



