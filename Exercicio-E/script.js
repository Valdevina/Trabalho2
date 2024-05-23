alert("Bem-vindo!"); 
let valora = Number(prompt("Informe o valor a"));
let valorb = Number(prompt("Informe o valor b"));
let valorc = Number(prompt("Informe o valor c"));
let delta = (( valorb **2) -4*valora*valorc)**(1/2);
let x1,x2;


if (isNaN(delta)) {
alert ("Não tem raiz")
}else{
if (delta == 0) {
   x1 = (-1 * valorb)/(2 * valora)
   x2=x1
} else {
   if (delta > 0) {
     x1 = (-1 * valorb + delta)/(2*valora);
     x2 = (- valorb - delta)/ (2* valora);
  }
}
}
alert (`valor de x1 é : ${x1} e o valor de x2 é: ${x2}`);