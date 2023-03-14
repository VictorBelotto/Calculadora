
export function modificaDinheiroReal(valor) { 
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); 
}
const outputDados = document.querySelector("#outputDados")

export function exibeResultado(taxa){
   outputDados.firstChild.remove()
   outputDados.classList.remove("display-none")
    
    createUl()
    
    createLi(`Valor do Cartorio: ${modificaDinheiroReal(taxa.cartorio)}`)
    createLi(`Valor do ITBI: ${modificaDinheiroReal(taxa.itbi)}`)
    createLi(`Valor do Vistoria: ${modificaDinheiroReal(taxa.vistoria)}`)

    if(taxa.relacionamento != null){
        createLi(`Valor do Relacionamento: ${modificaDinheiroReal(taxa.relacionamento)}`)
    }
    
}

export function exibeErros(erro){
   outputDados.firstChild.remove()
   outputDados.classList.remove("display-none")

   createUl()

   createLi(erro)
}

 function createUl(){
    let ul = document.createElement("ul")
    ul.classList.add("lista")
    outputDados.appendChild(ul)
 }

export function createLi(resultado){

    let li = document.createElement("li")
    li.textContent = resultado
    outputDados.querySelector(".lista").appendChild(li)
}