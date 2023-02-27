/*

Atividade para fazer:

05) uma empresa decide dar um aumento de 30% aos funcionários com 
salários inferiores a R$ 500,00. Faça um programa que receba o salário
do funcionário e mostre o valor do salário reajustado ou uma mensagem
caso ele não tenha direito ao aumento

*/

let salario = parseInt(prompt('quanto você recebe'))

aumento = salario / 30

if (salario >= 500) {
    document.getElementById('info').innerHTML = `não necessita de aumento.`
} else if (salario < 500) {
    document.getElementById('info').innerHTML = `Seu novo salário é de R$ ${salario + aumento}`
}