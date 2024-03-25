let programacao = ['Heloa', 'Maria Rafaela', 'Maria Eduarda', 'Diego', 'João Victor', 'Gabriel', 'Luana', 'Thauane', 'Aline', 'Lucas']

let funcionario = ['Leonardo', 'Miguel', 'João Paulo', 'Rafael']

funcionario.pop();
programacao.push("Rafael");

console.log("Time de programação:", programacao);
console.log("###################")
console.log("Time de segurança:", funcionario);

let empresa = programacao.concat (funcionario);
console.log(empresa)