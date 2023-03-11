import { modificaDinheiroReal } from "./exibeResultado.class.js"



export class limites {

    static limiteCompra = class {
      static valorMin = 62500;
  
      static verifica(valorCompra) {
        valorCompra >= this.valorMin ? true : this.erro();
      }
  
      static erro() {
        throw new Error(`valor menor`);
      }

    };

    static limiteFinanciamento = class{
      static limitePadrao = 0.8             



    static  verifica(compra,financiamento){
        let limite = compra * this.limitePadrao
        
        financiamento <= limite ? console.log("Certo") : this.erro(limite)
      }

      static erro(limite){
        throw new Error(`Maior que: ${limite}`)
      }
    }

     

    static limiteMCMV = class {
        static campinas = 264000
        static guarulhos = 264000

    static verifica(compraVenda, cidade){
      compraVenda <= this[cidade] ? console.log("Compra e venda dentro") : this.erro(cidade)
    }
      static  erro(){
            throw new Error(`Compra e venda maximo da cidade de: ${cidade.toUpperCase()} é : ${modificaDinheiroReal(this[cidade])}`)
        }
    };
}


export class camposValidados  {
  static  compra =  false
  static  financiamento =  false
  static  banco =  false
  static  cidade =  false
  static  enquadramento =  false
  static  agencia =  false



  static verifica(){
      const valoresValidos = Object.values(camposValidados);
      if (valoresValidos.every(valor => valor)) {
          console.log("Todos os campos estão validados.");
        } else {
          const camposInvalidos = [];
          for (let i = 0; i < valoresValidos.length; i++) {
            if (!valoresValidos[i]) {              
              camposInvalidos.push(Object.keys(camposValidados)[i]);
            }
          }
          console.log(`Os campos '${camposInvalidos.join("', '")}' não foram validados.`);
        }

  }


}
  
  
  