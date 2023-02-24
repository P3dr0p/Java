/*

Atividade para fazer:

01) Faça um algoritmo que leia o ano de nascimento de uma pessoa, 
calcule e mostre sua idade e, também, verifique e mostre se ela 
já tem idade para votar (16 anos ou mais) e para conseguir a carteira
de habilitação (18 anos ou mais) 

*/

const idadeDirigir = 18;
const idadeVotar = 16;

let idadeAtual;

let anoAtual = new Date();

let anoNascimento = parseInt(prompt('Digite o ano que você nasceu:'))

idadeAtual = anoAtual.getFullYear() - anoNascimento;

if(idadeAtual >= idadeVotar && idadeAtual < idadeDirigir){
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} você tem idade, para votar e não pode dirigir.`
} else if (idadeAtual >= 18) {
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} você tem idade, para votar e dirigir.`
} else if (idadeAtual < 16) {
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} você não tem idade, para votar e dirigir.`
}