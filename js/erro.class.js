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

    static limiteMCMV = class {
        static campinas = 264000
        static guarulhos = 264000

    static verifica(compraVenda, cidade){
        if(compraVenda > this[cidade]){
            throw new Error(`Compra e venda maximo da cidade de: ${cidade.toUpperCase()} é : ${modificaDinheiroReal(this[cidade])}`)
        }else{
            console.log("Compra e venda dentro")
        }
    }
}

  }
  
  