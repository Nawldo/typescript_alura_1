// Define o saldo inicial da conta bancária
let saldo = 3000; 

// Captura o elemento HTML onde o saldo será exibido
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector("block-saldo .time") as HTMLElement;
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

if (elementoDataAcesso !== null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.PADRAO)

}