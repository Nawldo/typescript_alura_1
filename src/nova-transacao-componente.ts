// Captura o formulário de nova transação na interface
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

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

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date (inputData.value);

    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    } else if (tipoTransacao == TipoTransacao.TRASFERENCIA || tipoTransacao == TipoTransacao.PAFAMENTOBOLETO) {
        saldo -= valor;
    } else {
         alert("Tipo de transação é inválido!");
         return;
    }

    elementoSaldo.textContent = saldo.toString();  // Atualiza o conteúdo do elemento com o saldo atual

    const novaTransacao: Transacao = {
     tipoTransacao: tipoTransacao,
     valor: valor,
     data: data,
   
    }
    
    console.log(novaTransacao);
    elementoFormulario.reset();
});
