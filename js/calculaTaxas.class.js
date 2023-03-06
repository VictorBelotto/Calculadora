
export function calculaCartorio(dado, taxa){
    const referenciaCompra = [34260.01, 102780.01, 171300.01, 205560.01, 239820.01, 274080.01, 308340.01, 342600.01, 685200.01, 1027800.01, 1370400.01, 1713000.01, 2055600.01, Infinity]
    const referenciaValor = [1699.18, 1894.28, 2326.54, 2731.51, 2946.72 , 3163.38 ,3325.82 , 3541.74, 4638.21, 5441.15, 6244.06, 6659.19, 8734.85]
    
    for(let i = 0; i < referenciaCompra.length - 1; i++){
        if(dado.compra > referenciaCompra[i]  &&  dado.compra < referenciaCompra[i + 1]){
            console.log("Ref" + i)
            return taxa.cartorio = referenciaValor[i]
        }
    }
}



export class TaxaAvista {
    static bancoBrasil = 1370
    static itau = 1950
    static caixa = {
        mcmv: 0.015,
        proCotista: 0.015,
        sbpe: 1000
    }

   static calculaTaxaAvista(banco, dado, taxa){
        if(!banco == "caixa"){
            taxa.vistoria = this[banco]
        }
            else{
                let enquadramento = dado.enquadramento

                if(enquadramento != "sbpe"){
                    taxa.vistoria = dado.financiamento * this.caixa[enquadramento]
                    console.log(this.caixa[enquadramento])
                    RelacionamentoAgencia.calculaRelacionamento(dado, taxa)
                }   
                    else {
                        taxa.vistoria = this.caixa.sbpe
                        RelacionamentoAgencia.calculaRelacionamento(dado, taxa)
                    }
            }
    }

}



class RelacionamentoAgencia{

   static agencias = {

     conceicao: {
        mcmv: 1500,
        proCotista: 1500,
        sbpe: 2000
    },

     bonsucesso: {
        fgts: 500,
        proCotista: 500,
        sbpe: 850
    }

    }
   
    static calculaRelacionamento( dado, taxa){
        let agencia = dado.agencia
        let enquadramento = dado.enquadramento
        console.log(agencia, enquadramento)
        taxa.relacionamento = this.agencias[agencia][enquadramento]
    }
    
}


