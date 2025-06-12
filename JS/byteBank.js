// Define o saldo inicial da conta bancária
let saldo = 3000; 

// Captura o elemento HTML onde o saldo será exibido
const elementoSaldo = document.querySelector(".saldo-valor .valor");

// Atualiza o conteúdo do elemento com o saldo atual
elementoSaldo.textContent = saldo;

// Captura o formulário de nova transação na interface
const elementoFormulario = document.querySelector(".block-nova-transacao form");

// Adiciona um ouvinte de evento para a submissão do formulário
elementoFormulario.addEventListener("submit", function(event) {

    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!elementoFormulario.checkValidity()){
        // Exibe um alerta caso algum campo esteja inválido
        alert("Por favor, preencha todos os campos da transação!");
        
        // Interrompe a execução do código para evitar o processamento de uma transação inválida
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if (tipoTransacao == "Depósito") {
        saldo += valor;
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    } else { alert(massage?: any): void
         alert()
    }

    const novaTransacao = {
     tipoTransacao: tipoTransacao,
     valor: valor,
     data: data   
    }
    
    console.log(novaTransacao);
    elementoFormulario.reset();
});
