import {Dados, Taxas} from './referencias.class.js';
import { calculaCartorio, TaxaAvista,  Itbi } from './calculaTaxas.class.js';
import { exibeResultado } from './exibeResultado.class.js';
import { limites } from './erro.class.js';

export function $(dom) {
    return document.querySelector(dom)
}

const compraEVenda = $("#compraEVenda")
const financiamento = $("#financiamento")
const selectBanco = $("#selectBanco")
const selectCidade = $("#selectCidade")
const selectEnquadramento = $("#selectEnquadramento")
const selectAgencia = $("#selectAgencia")
const select = document.querySelectorAll(".select")
const enquadramento = $("#enquadramento")
const agencia = document.querySelector("#agencia")


select.forEach( (elemento)=>{
    elemento.addEventListener('change', ()=>{
       
        if(elemento.id == "compraEVenda"){
            limites.limiteCompra.verifica(compraEVenda.value)
        }

        if(elemento.id == "selectBanco"){
            if(elemento.value == "caixa"){
                enquadramento.classList.remove("display-none")
                agencia.classList.remove("display-none")
            }else{
                enquadramento.classList.add("display-none")
                agencia.classList.add("display-none")
            }
        }

         if(elemento.id == "selectEnquadramento" || elemento.id == "compraEVenda" || elemento.id == "selectCidade"){
            if(selectEnquadramento.value == "mcmv"){
                limites.limiteMCMV.verifica(compraEVenda.valueAsNumber, selectCidade.value)
            }

        }
    })
})



/* Funcao principal*/
$("#botaoCalcular").addEventListener('click', () =>{
    const dado = new Dados(compraEVenda.valueAsNumber, financiamento.valueAsNumber, selectBanco.value, selectCidade.value, selectEnquadramento.value, selectAgencia.value)
    const taxa = new Taxas()

    calculaCartorio(dado, taxa)
    Itbi.calculaItbi(dado, taxa)
    TaxaAvista.calculaTaxaAvista(dado.banco,dado, taxa)

    exibeResultado(taxa)

    
});











