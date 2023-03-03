const compraEVenda = document.querySelector("#compraEVenda")
const financiamento = document.querySelector("#financiamento")
const selectBanco = document.querySelector("#selectBanco")
const selectCidade = document.querySelector("#selectCidade")
const selectEnquadramento = document.querySelector("#selectEnquadramento")
const botaoCalcular = document.querySelector("#botaoCalcular")
const outputDados = document.querySelector("#outputDados")

const enquadramento = document.querySelector("#enquadramento")

class limiteMCMV {
    campinas = 264000
    guarulhos = 264000
}

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




botaoCalcular.addEventListener('click', () => {
    const dado = new dados(compraEVenda.valueAsNumber, financiamento.valueAsNumber, selectBanco.value, selectCidade.value, selectEnquadramento.value)
    const taxa = new taxasCalculadas()
   
    calculaCartorio(dado, taxa)
    calculaItbi(dado, taxa)
    calculaTaxaAvista(dado, taxa)

    exibeTaxas(taxa)

    console.log(dado, taxa)
})


function calculaCartorio(dado, taxa){
    const referenciaCompra = [34260.01, 102780.01, 171300.01, 205560.01, 239820.01, 274080.01, 308340.01, 342600.01, 685200.01, 1027800.01, 1370400.01, 1713000.01, 2055600.01, Infinity]
    const referenciaValor = [1699.18, 1894.28, 2326.54, 2731.51, 2946.72 , 3163.38 ,3325.82 , 3541.74, 4638.21, 5441.15, 6244.06, 6659.19, 8734.85]
    
    for(let i = 0; i < referenciaCompra.length - 1; i++){
        if(dado.compra > referenciaCompra[i]  &&  dado.compra < referenciaCompra[i + 1]){
            console.log("Ref" + i)
            return taxa.cartorio = referenciaValor[i]
        }
    }
}
function calculaItbi(dado, taxa){
    dado.recursosProprios = (dado.compra - dado.financiamento)

        if(dado.cidade == "campinas"){
            taxa.itbi = dado.compra * 0.027
        }
            else if(dado.cidade == "guarulhos"){
                taxa.itbi = (dado.financiamento * 0.005) + (dado.recursosProprios * 0.02)
            }  
}

function calculaTaxaAvista(dado, taxa){
    if(dado.banco == "bancoBrasil"){
        taxa.vistoria = 1370
    }
        else if(dado.banco == "itau"){
            taxa.vistoria = 1950            
        }
            else if(dado.banco == "caixa"){

                if(dado.enquadramento == "mcmv" || dado.enquadramento == "proCotista"){
                    taxa.vistoria = dado.financiamento * 0.015
                    calculaRelacionamento("fgts", dado, taxa)
                }   
                    else if(dado.enquadramento == "sbpe"){
                        taxa.vistoria = 1000
                        calculaRelacionamento("sbpe", dado, taxa)
                    }
                            
            }
}

function calculaRelacionamento(enquadramento, dado, taxa){
    if(dado.cidade == "campinas"){
        if(enquadramento == "fgts"){
            taxa.relacionamento = 1500
        } else if(enquadramento == "sbpe"){
            taxa.relacionamento = 2000
        }
    }

    else if(dado.cidade == "guarulhos"){
        if(enquadramento == "fgts"){
            taxa.relacionamento = 500
        } else if(enquadramento == "sbpe"){
            taxa.relacionamento = 850
        }
    }

}

function exibeTaxas(taxa){
    let modificaDinheiroReal = (valor) => { return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); }

    
    console.log(modificaDinheiroReal(taxa.cartorio))
    console.log(modificaDinheiroReal(taxa.itbi))
    console.log(modificaDinheiroReal(taxa.vistoria))
    console.log(modificaDinheiroReal(taxa.relacionamento))
   
}


function trocaDisplay(referencia){
    referencia.classList.toggle("display-none")
}



