import Conta from '../Types/Conta.js';
import SaldoComponet from "./saldo-componente.js";
// Captura o formulário de nova transação na interface
const elementoFormulario = document.querySelector(".block-nova-transacao form");
// Adiciona um ouvinte de evento para a submissão do formulário
elementoFormulario.addEventListener("submit", function (event) {
    try {
        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();
        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!elementoFormulario.checkValidity()) {
            // Exibe um alerta caso algum campo esteja inválido
            alert("Por favor, preencha todos os campos da transação!");
            // Interrompe a execução do código para evitar o processamento de uma transação inválida
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value);
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponet.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.massage);
    }
});
