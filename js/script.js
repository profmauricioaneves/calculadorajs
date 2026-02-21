const n1El = document.getElementById("n1");
const n2El = document.getElementById("n2");
const saidaEl = document.getElementById("saida");
const msgEl = document.getElementById("msg");

const btnCalcular = document.getElementById("btnCalcular");
const btnLimpar = document.getElementById("btnLimpar");

function getOperacao() {
    const opMarcada = document.querySelector('input[name="op"]:checked');
    return opMarcada ? opMarcada.value : null;
}

function lerNumero(inputEl) {
    if (inputEl.trim() === "")
        return null;

    const n = Number(inputEl);

    if (Number.isNaN(n))
        return;

    return n;
}

function calcular() {
    msgEl.textContent = "";

    const a = lerNumero(n1El.value);
    const b = lerNumero(n2El.value);

    if (a === null || b === null) {
        saidaEl.value = "";

        msgEl.textContent = "Preencha os dois números corretamente";
        return;
    }

    const op = getOperacao();
    let resultado;

    if (op === "somar") {
        resultado = a + b;
    } else if (op === "subtrair") {
        resultado = a - b;

    } else if (op === "dividir") {
        if (b === 0) {
            saidaEl.value = "";
            msgEl.textContent = "Não é possível dividir por zero";
            return;
        }
        resultado = a / b;
    } else {
        saidaEl.value = "";
        msgEl.textContent = "Selecione uma operação";
        return;
    }
    saidaEl.value = resultado;
    msgEl.textContent = "Cálculo realizado";
}

function limpar() {
    n1El.value = "";
    n2El.value = "";
    saidaEl.value = "";
    msgEl.textContent = "";

    document.querySelector('input[name="op"][value="somar"]').checked = true;
    n1El.focus();
}

btnCalcular.addEventListener("click", calcular);
btnLimpar.addEventListener("click", limpar);