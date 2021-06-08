export class ContaCorrente
{
    agencia;
    cliente;

    _saldo = 0; //privado
    

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
}
