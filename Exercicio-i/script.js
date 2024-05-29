alert("Bem-vindo!"); 
let valor1= parseInt(prompt("Informe o valor1"));
let valor2= parseInt(prompt("Informe o valor2"));
let valor3= parseInt(prompt("Informe o valor3"));
let valor4= parseInt(prompt("Informe o valor4"));
let valor5= parseInt(prompt("Informe o valor5"));

let maior = valor1;
let menor = valor1;

if (valor2 > maior){

maior = valor2;
}
if (valor3 > maior) {
  maior = valor3;
}
if (valor4 > maior) {
 maior = valor4;
}
if (valor5 > maior) {
maior = valor5;
}
if (valor2 < menor) {
 menor = valor2;
}
if (valor3 < menor ) {
  menor = valor3;
}
if (valor4 < menor) {
menor = valor4;
}
if (valor5 < menor) {
menor = valor5;
}

alert (`O maior valor é: ${maior} e o menor valor é ${menor}`);
