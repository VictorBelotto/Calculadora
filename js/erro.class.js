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
        
        financiamento <= limite ? console.log("Certo") :console.log(`Maior que: ${limite}`)
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

  
  
  