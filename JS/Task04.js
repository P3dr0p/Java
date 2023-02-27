/*

Atividade para fazer:

04) Faça um Script para efetuar o índice de massa corporal

*/

let massa = parseInt(prompt('Qual e a sua massa'))

if (massa == 18.5) {
    document.getElementById('info').innerHTML = `Magreza`
} else if (massa >= 18.5 && massa <= 24.9) {
    document.getElementById('info').innerHTML = `Peso normal`
} else if (massa >= 25 && massa <= 29.9) {
    document.getElementById('info').innerHTML = `Sobrepeso`
} else if (massa >= 30 && massa <= 39.9) {
    document.getElementById('info').innerHTML = `Obesidade`
} else if (massa == 40) {
    document.getElementById('info').innerHTML = `Obesidade Grave`
}