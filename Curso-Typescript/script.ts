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

/* function toNumber(value : string | number){
    if(typeof value === "number") return value;

    if(typeof value === "string") return Number(value);

    throw "value deve ser number ou string";
} */

interface Empresa{
        nome: string;
        fundacao: number;
        pais: string;
}

interface Produto {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa
    empresaMontadora: Empresa;
  }


async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
   showProduct(data);
}

fetchProduct();

function showProduct(data:Produto){
    document.body.innerHTML = `
    <div>
        <h2>${data.nome}</h2>
        <p>${data.preco}</p>
        <div>
            <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
        </div>
    </div>
    `
}