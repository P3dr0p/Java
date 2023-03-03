/*

Atividade para fazer:

07) Crie um programaque que imprima todos os divisores de um número.
Para um dado número n, o programa testa todos os números de 1 ate n.

*/

const number = parseInt(prompt('Digite um número'))

for(let i = 0; i <= number; i++) {
    number % i === 0 ? document.getElementById('info').innerHTML += `${i}`
    : '';
}