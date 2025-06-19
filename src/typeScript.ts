/*

// Tipos primitivos 

let valor: number = 3000;  //apenas valores numéricos 
let nome: string = "";  //apenas valores de texto 
let isPago: boolean = true; //apenas valores booleanos 
let qualquer: any = ""; //qualquer valor 
qualquer = 22;

// Arrays

//const list = []; //lista de qualquer tipo (any)
//list.push = ["cão", "voz", 24, true, []];

const lista: number[] = []; //só pode conter valores numericos
lista.push(13, 22, 24, 2, 1.87 )

// Tipos personalizados

type Transacao = {   //personalizando a variável Transacao
    tipoTrasacao: TipoTrasacao; // recebe apenas valores declarados dentro da enum TipoTransacao
    data: Date;
    valor: number;
}

// Enum

enum TipoTrasacao { // Centraliza o controle dos valores
    DEPOSITO = "Depósito",
    TRASFERENCIA = "Transferência",
    PAGAMENTO_BOLETO ="Pagamento de Boleto"
}

const novaTransacao: Transacao = { // só aceita o que foi definido no type
    tipoTrasacao: TipoTrasacao.DEPOSITO,
    data: new Date,
    valor: 0
}
*/