import {Dados, Taxas } from './referencias.class.js';
import { calculaCartorio, TaxaAvista,  Itbi } from './calculaTaxas.class.js';
import { exibeResultado } from './exibeResultado.class.js';
import { limites, camposValidados } from './erro.class.js';

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
const agencia = $("#agencia")
const botaoCalcular = $("#botaoCalcular")
const botaoVerifica = $("#botaoVerifica")



select.forEach( (elemento)=>{
    elemento.addEventListener('change', ()=>{

        if(elemento == compraEVenda){
            try {
                limites.limiteCompra.verifica(compraEVenda.valueAsNumber)
            } catch (error) {
                console.log(error.message)
                
            }
        }

        if(elemento == financiamento){
           try {
            limites.limiteFinanciamento.verifica(compraEVenda.valueAsNumber, financiamento.valueAsNumber)
           } catch (error) {
            camposValidados.desvalida('financiamento')
            console.log(error.message)
            
           }
        }

        if(elemento == selectBanco){

            if(elemento.value == 'null'){
                camposValidados.desvalida('banco')
            }else{
                camposValidados.valida('banco') 
            }

            if(elemento.value == "caixa" || elemento.value == "bancoBrasil" ){
                enquadramento.classList.remove("display-none")

                elemento.value == "caixa"? agencia.classList.remove("display-none"): agencia.classList.add("display-none")
            }else{
                enquadramento.classList.add("display-none")
                agencia.classList.add("display-none")
            }
        }

         if(elemento == selectEnquadramento || elemento == compraEVenda || elemento == selectCidade){
            if(selectEnquadramento.value == "mcmv"){
                try {
                    limites.limiteMCMV.verifica(compraEVenda.valueAsNumber, selectCidade.value) 
                } catch (Error) {
                    console.log(Error.message)
                }
            }

        }


        if(elemento == selectCidade){
            if(elemento.value == 'null'){
                console.log(elemento.value)
                camposValidados.desvalida('cidade')
                
            }else{
                camposValidados.valida('cidade')

            }
        }

        if(elemento == selectAgencia){
            if(elemento.value == 'null'){
                console.log("Deu ruim")
                camposValidados.desvalida('agencia')
                
            }else{
                console.log("Deu bom")
                camposValidados.valida('agencia')
            }
        }
    })
})



/* Funcao principal*/
botaoCalcular.addEventListener('click', () =>{
    const dado = new Dados(compraEVenda.valueAsNumber, financiamento.valueAsNumber, selectBanco.value, selectCidade.value, selectEnquadramento.value, selectAgencia.value)
    const taxa = new Taxas()

    calculaCartorio(dado, taxa)
    Itbi.calculaItbi(dado, taxa)
    TaxaAvista.calculaTaxaAvista(dado.banco,dado, taxa)
    exibeResultado(taxa)

    
});

botaoVerifica.addEventListener('click', ()=>{
    camposValidados.verifica()
    
})






