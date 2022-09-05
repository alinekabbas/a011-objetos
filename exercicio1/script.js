//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão. 
//Os objetos devem ter as seguintes propriedades: 

const frutaSacolao1 = {
    nome: 'abacaxi',
    preco: 5.89,
    disponibilidade: true
}
const frutaSacolao2 = {
    nome: 'mamão', 
    preco: 3.00,
    disponibilidade: true
}
const frutaSacolao3 = {
    nome: 'goiaba', 
    preco: 2.50,
    disponibilidade: false
}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(frutaSacolao1, frutaSacolao2, frutaSacolao3)

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)