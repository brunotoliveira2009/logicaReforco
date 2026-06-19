const valorVendas = 5000;
const percentualBonificacao = 0.1;

const valorBonificacao = valorVendas *  percentualBonificacao;

const valorTotal = valorVendas + valorBonificacao;

console.log("Vendas: R$ " + valorVendas);
console.log("Bonificação: R$ " + valorBonificacao);
console.log("Total: R$ " + valorTotal);