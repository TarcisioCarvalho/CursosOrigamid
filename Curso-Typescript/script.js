var input = document.querySelector("input");
var total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    var p = document.querySelector("p");
    if (p)
        p.innerText = "Ganhou tot: ".concat(value + 100 - value * 0.2);
}
function totalMudou() {
    if (input) {
        var value = Number(input.value);
        localStorage.setItem("total", String(value));
        calcularGanho(value);
    }
}
input === null || input === void 0 ? void 0 : input.addEventListener("keyup", totalMudou);
