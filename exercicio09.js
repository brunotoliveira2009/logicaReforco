const vendas = [100, 250, 400, 150, 300, 520, 200]
 
 // Variáveis de controle
 let totalVendido = 0;
 let mediaVendas = 0;
 let maiorVenda =  vendas[0];
 let menorVenda =  vendas[0];

 // Estrutura de Repetição
 for (let volta = 0; volta < vendas.length; volta++) {
     const vendaAtual = vendas[volta];
     console.log(vendaAtual);
     
     //Acumular valores
     totalVendido  = vendaAtual + totalVendido;
     console.log(totalVendido);


     //Condicional valorMaior
     if (maiorVenda < vendaAtual) {
         maiorVenda = vendaAtual;
     } 
     console.log(`Maior Venda ${maiorVenda}`);

     //Condicional valorMenor
     if (menorVenda > vendaAtual) {
         menorVenda = vendaAtual
         
     }
    }
    console.log(`Menor Venda ${menorVenda}`);

    mediaVendas = totalVendido / vendas.length;
    console.log(`Total Vendido: R$ ${totalVendido}`);
    console.log(`Média Vendas: R$ ${mediaVendas}`);
    console.log(`Menor Venda: R$ ${menorVenda}`);
    console.log(`Maior Venda: R$ ${maiorVenda}`);