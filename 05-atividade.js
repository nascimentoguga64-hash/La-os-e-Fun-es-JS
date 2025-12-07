 function tabuada(num){
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`)
        }
    }

function carregarAtividade5(){
    
   
    let numero = Number(prompt("Digite a tabuada desejada:"))

    tabuada(numero);
}