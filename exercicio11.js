// Importação do módulo nativo
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Captura da informação
rl.question('Digite o seu nome:', function (name){
    rl.question('Digite sua idade:', function (idade){
        const idadeNumerica = parseInt(idade);

        if (idadeNumerica >= 18) {
            console.log(`Acesso ao Terminal liberado!!!`);
            
        }else {
            console.log(`Acesso Negado. Funcionário é menor de idade`);
        }
        rl.close()
    })
})
