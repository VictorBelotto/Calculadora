
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



export class taxaAvista {
    static bancoBrasil = 1370
    static itau = 1950
    static caixa = {
        fgts: 0.015,
        sbpe: 1000
    }

   static calculaTaxaAvista(banco, dado, taxa){
        if(!banco == "caixa"){
            taxa.vistoria = this[banco]
        }
            else{

                if(dado.enquadramento == "mcmv" || dado.enquadramento == "proCotista"){
                    taxa.vistoria = dado.financiamento * this.caixa.fgts
                    calculaRelacionamento("fgts", dado, taxa)
                }   
                    else if(dado.enquadramento == "sbpe"){
                        taxa.vistoria = this.caixa.sbpe
                        calculaRelacionamento("sbpe", dado, taxa)
                    }
            }
    }

}

function calculaRelacionamento(enquadramento, dado, taxa){
    if(dado.cidade == "campinas"){
        if(enquadramento == "fgts"){
            taxa.relacionamento = 1500
        } else if(enquadramento == "sbpe"){
            taxa.relacionamento = 2000
        }
    }

    else if(dado.cidade == "guarulhos"){
        if(enquadramento == "fgts"){
            taxa.relacionamento = 500
        } else if(enquadramento == "sbpe"){
            taxa.relacionamento = 850
        }
    }
}
