let saldoReajuste = document.querySelector("#saldoReajuste");
let btReajuste = document.querySelector("#btReajuste");
let Resultado = document.querySelector("#Resultado");

function calcularReajuste() {
    let Saldo = parseFloat(saldoReajuste.value.replace(",", "."));
    Resultado.textContent = (Saldo * 1.01);
}

btReajuste.onclick = function() {
    calcularReajuste();
}