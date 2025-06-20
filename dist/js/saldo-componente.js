// Define o saldo inicial da conta bancária
let saldo = 3000;
// Captura o elemento HTML onde o saldo será exibido
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector("block-saldo .time");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.PADRAO);
}
