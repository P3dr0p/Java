/*

Atividade para fazer:

03) Faça um algoritmo que leia o nome, gênero, idade e o tempo de
constribuição na empresa de uma pessoa
para calcular se a pessoas ela pode se aposentar

*/

let nome = parseInt(prompt('Qual o seu nome?'))
let genero = parseInt(prompt('Qual e o seu gênero?'))
let idade = parseInt(prompt('Qual a sua idade?'))
let tempoC = parseInt(prompt('Quantos anos você serve esta empresa?'))

if (genero = 'F' && idade < 56 && tempoC < 30) {
    document.getElementById('info').innerHTML = `Não pode se aposentar ainda`
} else if (genero = 'F' && idade >= 56 && tempoC < 30) {
    document.getElementById('info').innerHTML = `Tem idade suficiente, porém não tem tempo de contribuição suficiente para poder se aposentar`
} else if (genero = 'F' && idade < 56 && tempoC >= 30) {
    document.getElementById('info').innerHTML = `Tem idade suficiente, porém não idade suficiente para poder se aposentar`
} else if (genero = 'F' && idade >= 56 && tempoC >= 30) {
    document.getElementById('info').innerHTML = `Pode se aposentar`
}

if (genero = 'M' && idade < 56 && tempoC < 30) {
    document.getElementById('info').innerHTML = `Não pode se aposentar ainda`
} else if (genero = 'M' && idade >= 56 && tempoC < 30) {
    document.getElementById('info').innerHTML = `Tem idade suficiente, porém não tem tempo de contribuição suficiente para poder se aposentar`
} else if (genero = 'M' && idade < 56 && tempoC >= 30) {
    document.getElementById('info').innerHTML = `Tem idade suficiente, porém não idade suficiente para poder se aposentar`
} else if (genero = 'M' && idade >= 56 && tempoC >= 30) {
    document.getElementById('info').innerHTML = `Pode se aposentar`
}   
