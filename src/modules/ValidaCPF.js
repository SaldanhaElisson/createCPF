

export default class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable:true,
            configurable:false,
            value:cpfEnviado.replace(/\D+/g, '')
        })
    }

    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const  cpfSemDigitos = this.cpfLimpo.slice(0,-2)

        const digito01 = this.geraDigitos(cpfSemDigitos)
        const digito02 = this.geraDigitos(cpfSemDigitos + digito01)
        this.novoCPF = cpfSemDigitos + digito01 + digito02
    
    }

    static geraDigitos(cpfSemDigitos){
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;

      for(let stringNumerico of cpfSemDigitos){
        total += reverso * Number(stringNumerico)
        reverso --;
      } 

      const digito = 11 -(total % 11);
      return digito <= 9? String(digito) : '0'
    } // -> quando tem um metodo que não tem a palavra 'this' é porque tem forte potencia para se torna um metodo sestatico

    valida(){
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length != 11 ) return false;
        if(typeof this.cpfLimpo != 'string') return false;
        if(this.isSequencia()) return false
        this.geraNovoCpf()
        console.log(this.novoCPF)

        return this.novoCPF === this.cpfLimpo
    }


}




