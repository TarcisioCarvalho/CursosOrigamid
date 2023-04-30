//const valores = "192 11 46304 84 69 318 66 1 81 2049 45131 44 1165 57 109 2548 208 7 46 2 272 83 58 4 37 61 1 1391 24 2 182 23 1 1468 1006 46185 1 4"
//const valores = "192 11 46304 84 69 9 318 66 1 81 2049 45131 44 1165 57 109 2548 208 7 46 2 272 83 58 4 37 61 37 1 1391 24 182 23 1 136 1468 1006 46185 1"

const valoresArray = valores.split(" ");
console.log(valoresArray);
const numerosArray = valoresArray.map(numero => Number(numero));
console.log(numerosArray);
const soma = numerosArray.reduce((soma,i)=> soma+i);
console.log(soma);