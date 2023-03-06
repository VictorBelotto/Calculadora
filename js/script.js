import {Dados, Taxas, Itbi} from './taxas.class.js';
import { calculaCartorio, TaxaAvista } from './calculaTaxas.class.js';
import { exibeResultado } from './exibeResultado.class.js';
import { limiteMCMV } from './erro.class.js';



const compraEVenda = document.querySelector("#compraEVenda")
const financiamento = document.querySelector("#financiamento")
const selectBanco = document.querySelector("#selectBanco")
const selectCidade = document.querySelector("#selectCidade")
const selectEnquadramento = document.querySelector("#selectEnquadramento")
const selectAgencia = document.querySelector("#selectAgencia")
const botaoCalcular = document.querySelector("#botaoCalcular")
const outputDados = document.querySelector("#outputDados")
const select = document.querySelectorAll(".select")
const enquadramento = document.querySelector("#enquadramento")
const agencia = document.querySelector("#agencia")



select.forEach( (elemento)=>{
    elemento.addEventListener('change', ()=>{
       

        if(elemento.id == "selectBanco"){
            if(elemento.value == "caixa"){
                enquadramento.classList.remove("display-none")
                agencia.classList.remove("display-none")
            }else{
                enquadramento.classList.add("display-none")
                agencia.classList.add("display-none")
            }
        }

        else if(elemento.id == "selectEnquadramento" || elemento.id == "compraEVenda" || elemento.id == "selectCidade"){
            console.log(elemento.id)
            if(selectEnquadramento.value == "mcmv"){
                let limite = new limiteMCMV()
                limite.verificaLimiteMcmv(compraEVenda.valueAsNumber, selectCidade.value)
            }

        }
    })
})



/* Funcao principal*/

botaoCalcular.addEventListener('click', () => {
    const dado = new Dados(compraEVenda.valueAsNumber, financiamento.valueAsNumber, selectBanco.value, selectCidade.value, selectEnquadramento.value, selectAgencia.value)
    const taxa = new Taxas()
    console.log(dado, taxa)
    calculaCartorio(dado, taxa)
    Itbi.calculaItbi(dado, taxa)
    TaxaAvista.calculaTaxaAvista(dado.banco,dado, taxa)

    exibeResultado(taxa)

    
})









