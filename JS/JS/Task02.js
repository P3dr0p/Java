/*

Atividade para fazer:

02) Crie um Script que faça a conversão
da temperatura de graus Celsius para Fahenheit

*/

let graucelsius = parseInt(prompt('Quantos graus celsius?'))

fahrenheit = graucelsius * 1.8 + 32;

document.getElementById('info').innerHTML = `${graucelsius} graus celsius dão ${fahrenheit} graus fahrenheit`