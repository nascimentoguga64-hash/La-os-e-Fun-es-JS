function carregarAtividade9(){
    
    let frase = prompt("Digite uma frase para ser repetida:");

    let n = Number(prompt("Digite o número de vezes de repetições:"));

    for (let i = 0; i < n; i++) {
        console.log(`Repetições ${i + 1}: ${frase}`);
    }
}