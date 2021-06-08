import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';


const cliente1 = new Cliente();

    cliente1.nome = "Lucas";
    cliente1.cpf = 11122233309;

    
const cliente2 = new Cliente();

    cliente2.nome = "Alice";
    cliente2.cpf = 88822233309;


const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1001;
contaCorrenteLucas.cliente = cliente1;


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

console.log(conta2);

