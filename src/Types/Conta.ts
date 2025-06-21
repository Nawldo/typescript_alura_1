import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";

let saldo: number = 3000;

function debitar(valor: number): void {
    if( valor <= 0) {
        throw new Error("O valor debitado deve ser maior que zero!");
    }    
    
    if ( valor > saldo) {
        throw new Error("Saldo insuficiente.")
    }
    saldo -= valor;
}

function depositar(valor: number): void {
    if (valor >= 0) {
        throw new Error("O valor depositado deve ser maior que zero!");
    }
    saldo += valor;
}

const Conta = {
    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date()
    },

    registrarTransacao(novaTransacao: Transacao): void {
         if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
                depositar(novaTransacao.valor);
            } 
            
            else if (novaTransacao.tipoTransacao == TipoTransacao.TRASFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAFAMENTOBOLETO) {
                debitar(novaTransacao.valor);
            } 
            
            else {
                 throw new Error("Tipo de transação é inválido!");
            }

            console.log(novaTransacao);
    }
}

export default Conta;