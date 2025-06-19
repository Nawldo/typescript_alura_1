// Define o saldo inicial da conta bancária
let saldo = 3000;
// Captura o elemento HTML onde o saldo será exibido
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo !== null)
    [
        elementoSaldo.textContent = saldo.toString()
    ];
