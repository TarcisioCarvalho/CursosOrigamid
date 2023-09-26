/* const input = document.querySelector("input");

const total = localStorage.getItem("total");
if(input && total){
    input.value = total;
    calcularGanho(Number(input.value));
}

function calcularGanho(value:number){

    const p = document.querySelector("p");
    if(p) p.innerText = `Ganhou tot: ${value + 100 - value * 0.2}`;
}
function totalMudou(){
    if(input){
        const value = Number(input.value); 
        localStorage.setItem("total",String(value));
        calcularGanho(value);
    }
}


input?.addEventListener("keyup",totalMudou); */

function toNumber(value : string | number){
    if(typeof value === "number") return value;

    if(typeof value === "string") return Number(value);

    throw "value deve ser number ou string";
}