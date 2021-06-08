import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';


const cliente1 = new Cliente("Lucas",11122233309);
const cliente2 = new Cliente("Alice",88822233309);


const contaCorrenteLucas = new ContaCorrente(1001,cliente1);
contaCorrenteLucas.depositar(500);


const conta2 = new ContaCorrente(102,cliente2);


let valor = 200;
contaCorrenteLucas.transferir(valor, conta2);


console.log(ContaCorrente.numeroDeContas);

