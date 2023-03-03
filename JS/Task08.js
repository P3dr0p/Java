/*

Atividade para fazer:

08) Faça um script contendo uma função que retorne 1, se o número
digitado for positivo ou 0 se for negativo.

*/

let numero = parseInt(prompt('Digite um número'))

if (numero < 0) {
    document.getElementById('info').innerHTML = '0'
} else if (numero >= 0) {
    document.getElementById('info').innerHTML = '1'
}