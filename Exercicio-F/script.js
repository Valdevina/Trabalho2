alert("Bem-vindo!"); 
let valor1 = Number (prompt("Informe o valor1"));
let valor2 = Number (prompt("Informe o valor2"));
let valor3 = Number (prompt("Informe o valor3"));
let menor,maior,meio;
if((valor1 < valor2)&&(valor1 < valor3)){
menor = valor1
}
if(valor2 < valor3) {
meio= valor2
maior = valor3 
} else {
meio= valor3
maior = valor2
}
alert (`${menor} ${meio} ${maior}`);

