// O que é uma estrutura de repetição

/*

- É usada quando queremos fazer a realização de uma ação repetidas vezes.
- É importante ressaltar que a estrutura de repetição é conhecida como laço 
ou loop

- Existem algumas estruturas de repetição
  - for
  - while
  - do...while
  - for...of
  - for...in
  - foreach

*/

// For

/** 
 * A sintaxe do for:
   -> for(palavra-chave) + (variável; condição + incremento/decremento) {bloc}
*/

//for(let i = 0; i > 10; i--) {
//    console.log(i);
//}

// WHITE

/*
  
    - O bloco de código do while será executado enquanto a condição
    for verdadeira

*/

//let i = 0

//while(i < 10) {
//   bloco de código

//  i++
// }

//let i = 0;

//do {
//   console.log(i);
//} while(i < 10);

// for...of

/**
 * Ele vai criar um laço de repetição a partir de uma variável, onde com
 * ela vamos poder tornar nosso objeto interativa
 */

//let esportes = ["futebol", "volei", "basquete", "skate"];

//for(let esporte of esportes) {
//    console.log(esporte)
//}

// for...in

/**
 * Ele executa a interação a partir de uma variavel especifica, percorrendo todas as propriedades de um objeto.
 * 
 * Para cada propriedade do meu objeto, o que o JavaScript
 */

//let person = {
//    name: 'Dylan',
//    age: 31,
//    weight: 60
//}

//for(let property in person) {
//    console.log(person[property])
//}

// Estrutura de Repetição

// O que é?

/**
 * É usada quando queremos realizar uma ação repetidas vezes.
 * 
 * Estruturas de repetição que existem:
 * -> for, while, do...while,
 * 
 */

//for(let i = 0; i < 10; i++) {
//    console.log(i);
// }

// Palavra-chave for
// Declaração da variavel
// Condição
// Incremento / Decremento

// While = enquanto

//var i = 0;

//while(i < 10) {
//    console.log(i);
//    i++;
// }

// do...while

//do{
//    console.log(i);
//    i++
// } while (i < 10);

// for...of

let esportes = ['futebol', 'basquete', 'vôlei', 'skate'];

for(let esporte of esportes) {
    console.log(esporte);
}

let person = {
    name: 'John',
    age: 31,
    weight: 60
};

for(let property in person) {
    console.log(property);
    //console.log(person[property]);
}