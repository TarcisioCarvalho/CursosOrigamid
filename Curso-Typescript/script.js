var input = document.querySelector("input");
function totalMudou() {
    var value = Number(input === null || input === void 0 ? void 0 : input.value);
    var p = document.querySelector("p");
    p === null || p === void 0 ? void 0 : p.innerText = "Ganho tot: ".concat(value + 100 - value * 0.2);
}
input === null || input === void 0 ? void 0 : input.addEventListener("keyup", totalMudou);
