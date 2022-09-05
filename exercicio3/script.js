const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
console.log(pokemon1)

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const copiapokemon1 = {...pokemon1}
copiapokemon1.nome = 'Squirtle'
copiapokemon1.tipo = "Água"
console.log("letra a", copiapokemon1)

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. 
//Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. 
//Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1.ataques = []
const ataque1 = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}
pokemon1.ataques.push(ataque1)
console.log("letra b", pokemon1)

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
copiapokemon1.ataques = [...pokemon1.ataques]
console.log("letra c",copiapokemon1)

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataques.push({
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
}) 

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
copiapokemon1.ataques.push({
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100
})

//f) Imprima os dois objetos no console.
console.log("letra d",pokemon1)
console.log("letra e",copiapokemon1)