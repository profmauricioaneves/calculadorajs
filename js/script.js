const n1El = document.getElementById("n1");
const n2El = document.getElementById("n2");
const saidaEl = document.getElementById("saida");
const msgEl = document.getElementById("msg");

const btnCalcular = document.getElementById("btnCalcular");
const btnLimpar = documento.getElementById("btnLimpar");

function getOperacao() {
    const opMarcada = document.querySelector('input[name="op"]:checked');
    return opMarcada ? opMarcada.value : null;
}

function lerNumero(inputEl) {
    if (inputEl.value.trim() === "")
        return null;

    const n = Number(inputEl);

    if (Number.isNaN(n))
        return;

    return n;
}

function calcular() {
    msgEl.textContent = "";

    const a = lerNumero(n1El);
    const b = lerNumero(n2El);

    if (a === null || b === null) {
        saidaEl.value = "";

        msgEl.textContent = "Preencha os dois números corretamente";
        return;
    }

}