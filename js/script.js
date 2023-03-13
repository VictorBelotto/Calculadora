import {Dados, Taxas } from './referencias.class.js';
import { calculaCartorio, TaxaAvista,  Itbi } from './calculaTaxas.class.js';
import { exibeResultado } from './exibeResultado.class.js';
import { limites, camposValidados } from './erro.class.js';

const compraEVenda = document.querySelector("#compraEVenda") 
const financiamento = document.querySelector("#financiamento")
const selectBanco = document.querySelector("#selectBanco")
const selectCidade = document.querySelector("#selectCidade")
const selectEnquadramento = document.querySelector("#selectEnquadramento")
const selectAgencia = document.querySelector("#selectAgencia")
const enquadramento = document.querySelector("#enquadramento")
const agencia = document.querySelector("#agencia")
const botaoCalcular = document.querySelector("#botaoCalcular")
const botaoVerifica = document.querySelector("#botaoVerifica")

compraEVenda.addEventListener('change', () =>{
    limites.limiteMCMV.callBack(selectEnquadramento.value, compraEVenda.valueAsNumber, selectCidade.value)
    try {
        limites.limiteCompra.verifica(compraEVenda.valueAsNumber)
    } catch (error) {
        console.log(error.message) 
    }
});

financiamento.addEventListener('change', () =>{
    try {
        limites.limiteFinanciamento.verifica(compraEVenda.valueAsNumber, financiamento.valueAsNumber)
    } catch (error) {
        console.log(error.message)
    }
});

selectBanco.addEventListener('change', () =>{

    camposValidados.validaCampoSelect(selectBanco)

    if(selectBanco.value == "caixa" || selectBanco.value == "bancoBrasil" ){
        enquadramento.classList.remove("display-none")

        selectBanco.value == "caixa"? agencia.classList.remove("display-none"): agencia.classList.add("display-none")
    }else{
        enquadramento.classList.add("display-none")
        agencia.classList.add("display-none")
    }
});

selectCidade.addEventListener('change', () =>{
    limites.limiteMCMV.callBack(selectEnquadramento.value, compraEVenda.valueAsNumber, selectCidade.value)

    camposValidados.validaCampoSelect(selectCidade)
});

selectEnquadramento.addEventListener('change', () =>{
    limites.limiteMCMV.callBack(selectEnquadramento.value, compraEVenda.valueAsNumber, selectCidade.value)
    
});

selectAgencia.addEventListener('change', () =>{
    camposValidados.validaCampoSelect(selectAgencia)
});

/* Funcao principal*/
botaoCalcular.addEventListener('click', () =>{
    
    if(camposValidados.verifica()){
        const dado = new Dados(compraEVenda.valueAsNumber, financiamento.valueAsNumber, selectBanco.value, selectCidade.value, selectEnquadramento.value, selectAgencia.value)
        const taxa = new Taxas()
        calculaCartorio(dado, taxa)
        Itbi.calculaItbi(dado, taxa)
        TaxaAvista.calculaTaxaAvista(dado.banco,dado, taxa)
        exibeResultado(taxa)
    }    
});

botaoVerifica.addEventListener('click', ()=>{
    camposValidados.verifica()
    
})






