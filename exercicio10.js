 const estoqueProdutos = [ {nome: "Teclado", quantidade
 : 12}, {nome: "Mouse", quantidade: 10}, {nome: "Monitor",
  quantidade: 6}, {nome: "Headset", quantidade: 3}, {nome:
     "Cadeira Gamer", quantidade:1}]

     for (let index = 0; index < estoqueProdutos.length; index++) {
         const produtoAtual = estoqueProdutos[index];
         let statusEstoque = '';

         /// Condicional de validar a quantidade
         if (produtoAtual.quantidade < 5) {
             statusEstoque = 'Repor Estoque';
         }else {
             statusEstoque = 'OK';
         }
         console.log(`Produto: ${produtoAtual.nome} - ${statusEstoque}`);
         
         
     }