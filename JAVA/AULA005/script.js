// // emite uma caixa de texto como um aviso
// // alert('hello world');

// // alert ('tá querendo ver o que?')

// // exibe a informação no console da página
// console.log('hello world');

// // VARIAVEIS

// var nome = 'Edson'
// var sobrenome = 'Rocha'

// console.log (nome,sobrenome)

// // nota - para a visualização é necessario o "console.log"

// let cor = 'roxo'

// console.log (cor)

// // constante -

// const pi = "3,14"

// console.log (pi)

// // TIPOS DE DADOS

// const string = 'nice'
// const number = 1987
// const boolean = true
// const array = [22,44,66,88,110]
// const object = {

//      nome : 'Edson',
//      idade: 17,
//      ensinomedio: false,

// }

// console.log ( string,number,boolean,array[3],object.nome )

// // OPERADORES ARITMETICOS

// // SOMA

// let resultado = 660+1122

// console.log ('resulato soma:',resultado)

// // SUBTRAÇÃO

// let subt = 55-669

// console.log  ( 'resultado:',subt)

// // MULTIPLICAÇÃO

// let multi = 99*77
// console.log( 'resultado:',multi)

// // DIVISÃO

// let divi = 8/1
// console.log( 'resultado:',divi)

// var soma = 9494949949+222236

// console.log ('resultado:',soma,)

function soma() {
  let x = Number(prompt("Digite um número"));

  let y = Number(prompt("Digite um número"));

  let result = x + y;

  alert("a soma dos números é = " + result);
}

function sub() {
  let x = Number(prompt("Digite um número"));

  let y = Number(prompt("Digite um número"));

  let result = x - y;

  alert("a subtração dos números é = " + result);
}

function multi() {
  let x = Number(prompt("Digite um número"));

  let y = Number(prompt("Digite um número"));

  let result = x * y;

  alert("a multiplicação dos números é = " + result);
}

function divi() {
  let x = Number(prompt("Digite um número"));

  let y = Number(prompt("Digite um número"));

  let result = x / y;

  alert("a divisão dos números é = " + result);
}

let aaa = ["abc", "xyz", "www"];
console.log(aaa[0]);
console.log(aaa[1]);
console.log(aaa[2]);

// quarenta = 40

// console.log ('valor:'+ quarenta, 'tipo:' + typeof quarenta)

// let name = ['Edson', 'Rocha','da','Silva']

// console.log (name [0], name[1], name[2], name[3])

// let name = ['Edson', 'Rocha','da','Silva']

// console.log (name [0]+' ' + name[1] +' '+ name[2] +' '+ name[3])

// et name = ['Edson', 'Rocha','da','Silva']

// console.log ('$(name [0] )  name[1], name[2], name[3]')

let eu = {
  Nome: "Edson Rocha da Silva",
  Idade: 17,
  curso: ["Let´s Code", "Preparatório ENEM", "NTIC"],
  Possuicelular: true,
  Possuicomputador: false,
};

console.log(eu);

console.log();

let alunos = [
  {
    Nome: "Edson Rocha da Silva",
    Idade: 17,
    curso: ["Let´s Code", "Preparatório ENEM", "NTIC"],
    Possuicelular: true,
    Possuicomputador: false,
  },

  {
    Nome: "Davi",
    Idade: 19,
    curso: ["Let´s Code", "SENAI"],
    Possuicelular: true,
    Possuicomputador: true,
  },
];

console.log (alunos)

let m = 4 
let n = 2

// potencia 

let resultadopot = m ** n

console.log ('RESULTADO DA POTENCIAÇÃO:', resultadopot)


// OPERADORES DE COMPARAÇÃO



console.log (2==2)

console.log (2=='2')

console.log (2>2)

console.log (2<2)

console.log (2==='2')

console.log (2!==3)

console.log (2!==2)

console.log (2!=='2')

// OPERADORES LÓGICOS



let verdadeiro = true

let falso = false

// E

console.log (verdadeiro && verdadeiro )
console.log (verdadeiro && falso)
console.log (falso && falso)



// OU

console.log (verdadeiro || verdadeiro )
console.log (verdadeiro || falso)
console.log (falso || falso)


// CONDICIONAIS 



let numeroalto = 50

if (numeroalto > 30) { console.log ('o numero', numeroalto , 'não é maior que 30')}


let notadoaluno = 8

if (notadoaluno < 5 ) { console.log ("REPROVADO!")}

else if (notadoaluno > 5 && notadoaluno== 5 || NOTA > 7 && notadoaluno== 7 ) { console.log ("RECUPERAÇÃO")}

else (notadoaluno >7) ;{console.log ("APROVADO!")
}














