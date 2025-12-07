 function quadrado(num){
    return num * num;
 }

function carregarAtividade8(){

    let numero = Number(prompt("Informe um número para calcular o quadrado:"));

    let resultado = quadrado(numero);

    console.log(`O quadrado de ${numero} é ${resultado}`);
    
}