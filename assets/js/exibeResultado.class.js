
export function modificaDinheiroReal(valor) { 
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); 
}
const outputDados = document.querySelector("#outputDados")

export function exibeResultado(taxa){
   outputDados.firstChild.remove()
   outputDados.classList.remove("display-none")
    
    createUl()
    
    createLi(`Valor do Cartorio: ${modificaDinheiroReal(taxa.cartorio)}`, 'resultado')
    createLi(`Valor do ITBI: ${modificaDinheiroReal(taxa.itbi)}` , 'resultado')
    createLi(`Valor do Vistoria: ${modificaDinheiroReal(taxa.vistoria)}`,  'resultado')

    if(taxa.relacionamento != null){
        createLi(`Valor do Relacionamento: ${modificaDinheiroReal(taxa.relacionamento)}`,  'resultado')
    }
    
}

export function exibeErros(resultado){
   outputDados.firstChild.remove()
   outputDados.classList.remove("display-none")

   createUl()

   createLi(resultado, 'erro')
}

 function createUl(){
    let ul = document.createElement("ul")
    outputDados.appendChild(ul)
 }

export function createLi(resultado, classe){

    let li = document.createElement("li")
    li.classList.add(classe);
    li.textContent = resultado
    outputDados.querySelector("ul").appendChild(li)
}