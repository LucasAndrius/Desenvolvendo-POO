import { Cliente } from "./Cliente.js";

export class ContaCorrente
{
    agencia;

    //privado
    _cliente;
    _saldo = 0; 
    

    //acessores
    get saldo (){
        return this._saldo;
    }
    set cliente (novoValor){ 

        //previne que seja atribuido somente valores que existão na classe cliente
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Saldo insufuciente");
        }
        
    }

    depositar(valor){
        if(valor <= 0){
            console.log("deposito não realizado");
            return;
        } 
        this._saldo += valor;        
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
