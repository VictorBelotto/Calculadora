const compraEVenda = document.querySelector("#compraEVenda")
const financiamento = document.querySelector("#financiamento")
const botaoCalcular = document.querySelector("#botaoCalcular")
const enquadramento = document.querySelector("#enquadramento")
const banco = document.querySelector("#selectBanco")

class dados {
    compra
    financiamento
    banco
    recursosProprios
    constructor(compra, financiamento, banco) {
        this.compra = compra
        this.financiamento = financiamento
        this.banco = banco
    }

    getRecursosProprios(){
        return this.recursosProprios
    }
}

botaoCalcular.addEventListener('click', () => {
    const novoDado = new dados(compraEVenda.valueAsNumber, financiamento.valueAsNumber, banco.valueAsNumber)
    
    recursosProprios(novoDado)

    verificaBanco(banco.value)

})


function recursosProprios(dado) {
    return dado.recursosProprios = "compra - financiamento"
}


function trocaDisplay(referencia){
    referencia.classList.toggle("display-none")
}

function verificaBanco(banco){
    if(banco == "caixa"){
        trocaDisplay(enquadramento)
    }
}