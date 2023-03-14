import { modificaDinheiroReal } from "./exibeResultado.class.js"


export class ArmazenaErros{
  static  erro 
  static  camposInvalidos

  static adicionaErro(referencia, erro){
    this[referencia] = erro 
  }  

  static removeErro(){
    this.erro = undefined
  }

}



export class camposValidados  {
  static  compra =  false
  static  financiamento =  false
  static  banco =  false
  static  cidade =  false
  static  enquadramento =  false
  static  agencia =  false

    static valida(campo){
      this[campo] = true
    }

    static desvalida(campo){
      this[campo] = false
    }

    static validaCampoSelect(campo){
      campo.value == 'null'? camposValidados.desvalida(campo.name) : camposValidados.valida(campo.name) 

    }

      static verifica(){
          const valoresValidos = Object.values(camposValidados);
          if (valoresValidos.every(valor => valor)) {
              ArmazenaErros.removeErro()
              console.log("Todos os campos estão validados.");
              return true
            } else {
              const camposInvalidos = [];
              for (let i = 0; i < valoresValidos.length; i++) {
                if (!valoresValidos[i]) {              
                  camposInvalidos.push(Object.keys(camposValidados)[i]);
                }
              }
              ArmazenaErros.adicionaErro('camposInvalidos',`Os campos (${camposInvalidos.join("), (")}) não foram preenchidos.`);
              return false
            }

      }
}


export class limites {

static limiteCompra = class {
    static compraMinima = 62500;

    static verifica(valorCompra) {
      valorCompra < this.compraMinima ? this.erroCompra(): camposValidados.valida('compra')
    }

    static erroCompra() {
      camposValidados.desvalida('compra')
      ArmazenaErros.adicionaErro('erro', `Valor de Compra menor que o minimo : ${modificaDinheiroReal(this.compraMinima)}`)
      throw new Error(`Valor de Compra menor que o minimo : ${modificaDinheiroReal(this.compraMinima)}`);
    }

};

static limiteFinanciamento = class{
    static limitePadrao = 0.8             

    static verifica(compra,financiamento){
      let limite = compra * this.limitePadrao
      financiamento > limite ? this.erroFinanciamento(limite) : camposValidados.valida('financiamento')
    }

    static erroFinanciamento(limite){
      camposValidados.desvalida('financiamento')
      ArmazenaErros.adicionaErro('erro',`Financiamento maior que 80% : ${modificaDinheiroReal(limite)}`)
      throw new Error(`Financiamento maior que 80% : ${modificaDinheiroReal(limite)}`)
    }
}


static limiteMCMV = class {
    static campinas = 264000
    static guarulhos = 264000

    static verifica(enquadramento, compraVenda, cidade){
      if(enquadramento == "mcmv"){
        compraVenda > this[cidade] ? this.erroMcmv(cidade) : camposValidados.valida('enquadramento')
      }
     
    }
    
    static  erroMcmv(cidade){
      camposValidados.desvalida('enquadramento')
      ArmazenaErros.adicionaErro('erro',`Compra e venda maximo da cidade de: ${cidade.toUpperCase()} é : ${modificaDinheiroReal(this[cidade])}`)
      throw new Error(`Valor maximo para MCMV da cidade de: ${cidade.toUpperCase()} é : ${modificaDinheiroReal(this[cidade])}`)
    }


  static callBack(enquadramento, compraVenda, cidade){
    try {
      limites.limiteMCMV.verifica(enquadramento, compraVenda , cidade)
    } catch (error) {
      console.log(error.message)
    }
  }
};
}



  
  
  