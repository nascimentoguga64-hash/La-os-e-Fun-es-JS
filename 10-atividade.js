function carregarAtividade10(){
    
    const senhaCorreta = "1234";
    let tentativas = 0;
    let acessoConcedido = false;

    while (tentativas < 3) {
        let senhaDigitada = prompt(`Tentativa ${tentativas + 1} de 3. Digite a senha`);
        tentativas++;
        console.log("Senha incorreta! tente novamente")

        if (senhaDigitada === senhaCorreta) {
            acessoConcedido = true;
            console.log("Senha correta! Acesso concedido.");
            break;
        }
    }

    if (!acessoConcedido) {
        console.log("Acesso bloqueado!. Tentativas esgotadas.");
    }
}