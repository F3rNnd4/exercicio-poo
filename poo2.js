const pessoa = {
    primeiroNome: "Fernanda",
    ultimoNome: "Louro",
    idade: 17,
    corOlho: "castanho",
    altura: 170,
    dataNascimento: "10/07/2007",
    usaOculos: true,
    corPele: "branco",
    corFavorita: "azul",
    sexo: "feminino"
};

//Frase 1
console.log("1 - A " + pessoa.primeiroNome + " " + pessoa.ultimoNome + " tem " + pessoa.idade + " anos!");

//Alterar um objeto
pessoa.ultimoNome = "Alves";

//Frase 2
console.log("2 - A " + pessoa.primeiroNome + " " + pessoa.ultimoNome + " tem " + pessoa.idade + " anos!");