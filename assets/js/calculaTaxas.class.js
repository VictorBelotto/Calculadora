
export function calculaCartorio(dado, taxa){
    const referenciaCompra = [34260.01, 102780.01, 171300.01, 205560.01, 239820.01, 274080.01, 308340.01, 342600.01, 685200.01, 1027800.01, 1370400.01, 1713000.01, 2055600.01, Infinity]
    const referenciaValor = [1699.18, 1894.28, 2326.54, 2731.51, 2946.72 , 3163.38 ,3325.82 , 3541.74, 4638.21, 5441.15, 6244.06, 6659.19, 8734.85]
    
    for(let i = 0; i < referenciaCompra.length - 1; i++){
        if(dado.compra > referenciaCompra[i]  &&  dado.compra < referenciaCompra[i + 1]){
            return taxa.cartorio = referenciaValor[i]
        }
    }
}


export class Itbi {

    static calculaItbi(dado, taxa){
        dado.recursosProprios = (dado.compra - dado.financiamento)
        this.cidade(dado, taxa)
    }

    static cidade(dado, taxa){
        switch (dado.cidade) {
            case 'campinas':
                taxa.itbi = dado.compra * 0.027
                break;
            case 'guarulhos':
                taxa.itbi = (dado.financiamento * 0.005) + (dado.recursosProprios * 0.02)
                break;
            // Adicione outros casos para outras cidades aqui...

        }
    }
}



export class TaxaAvista {
    static bancoBrasil =   {
        mcmv: 0.015,
        proCotista: 0.015,
        sbpe: 1000
    }   

    static caixa = {
        mcmv: 0.015,
        proCotista: 0.015,
        sbpe: 1000
    }
    static itau = 1950

   static calculaTaxaAvista(banco, dado, taxa){
        if(banco == "caixa" || banco == 'bancoBrasil'){
            console.log(dado.enquadramento)
            let enquadramento = dado.enquadramento

            if(enquadramento == "proCotista" || enquadramento == 'mcmv'){
                console.log(this[banco][enquadramento])
                    taxa.vistoria = dado.financiamento * this[banco][enquadramento]
                    banco == 'caixa'? RelacionamentoAgencia.calculaRelacionamento(dado, taxa) : false
            }   
                if(enquadramento == "sbpe") {
                    taxa.vistoria = this[banco].sbpe
                    banco == 'caixa'? RelacionamentoAgencia.calculaRelacionamento(dado, taxa) : false
                    }
        }
            else{
                console.log('ruinm')
            taxa.vistoria = this[banco]
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
        mcmv: 500,
        proCotista: 500,
        sbpe: 850
    }

    }
   
    static calculaRelacionamento( dado, taxa){
        let agencia = dado.agencia
        let enquadramento = dado.enquadramento
        taxa.relacionamento = this.agencias[agencia][enquadramento]
    }
    
}


