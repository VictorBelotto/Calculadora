import {dados, taxas, itbi} from './taxas.class.js';
import { calculaCartorio, taxaAvista } from './calculaTaxas.class.js';
import { exibeResultado } from './exibeResultado.class.js';
import { limiteMCMV } from './erro.class.js';



const compraEVenda = document.querySelector("#compraEVenda")
const financiamento = document.querySelector("#financiamento")
const selectBanco = document.querySelector("#selectBanco")
const selectCidade = document.querySelector("#selectCidade")
const selectEnquadramento = document.querySelector("#selectEnquadramento")
const botaoCalcular = document.querySelector("#botaoCalcular")
const outputDados = document.querySelector("#outputDados")
const select = document.querySelectorAll(".select")
const enquadramento = document.querySelector("#enquadramento")





select.forEach( (elemento)=>{
    elemento.addEventListener('change', ()=>{
       

        if(elemento.id == "selectBanco"){
            if(elemento.value == "caixa"){
                enquadramento.classList.remove("display-none")
            }else{
                enquadramento.classList.add("display-none")
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
    const dado = new dados(compraEVenda.valueAsNumber, financiamento.valueAsNumber, selectBanco.value, selectCidade.value, selectEnquadramento.value)
    const taxa = new taxas()
   
    calculaCartorio(dado, taxa)
    itbi.calculaItbi(dado, taxa)
    taxaAvista.calculaTaxaAvista(dado.banco,dado, taxa)

    exibeResultado(taxa)

    console.log(dado, taxa)
})









