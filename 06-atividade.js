function carregarAtividade6() {
    
    let contador = 1;
    let pares = 0;

    while (contador <= 100) {
        if (contador % 2 === 0) {
            pares++;
        }
        contador++;
    }

    console.log(`o total de números pares entre 1 e 100 é: ${pares}`);
}