import { formatarData, formatarMoeda } from "../Utils/formatters.js"; 
import { FormatoData } from "../Types/FormatoData.js";
import Conta from "../Types/Conta.js";


// Captura o elemento HTML onde o saldo será exibido
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;



if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO)
}



renderizarSaldo();
function renderizarSaldo(): void{
    
    if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
}
}

const SaldoComponet = {
    atualizar() {
        renderizarSaldo();
    }
}

export default SaldoComponet;