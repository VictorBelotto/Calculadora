import { modificaDinheiroReal } from "./exibeResultado.class.js"

export class limiteMCMV  {
        campinas = 264000
        guarulhos = 264000

    verificaLimiteMcmv(compraVenda, cidade){
        if(compraVenda > this[cidade]){
            erro(`Compra e venda maximo da cidade de: ${cidade.toUpperCase()} é : ${modificaDinheiroReal(this[cidade])}`)
        }else{
            console.log("Compra e venda dentro")
        }
    }
}




function erro(erro){
   console.log(erro)

}