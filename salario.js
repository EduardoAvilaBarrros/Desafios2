var nome = prompt('Digite seu nome:')
var horastrabalhadas = prompt(nome + ' quantas horas você trabalhou esse mês?')
var valorhora = prompt(nome + ' qual o valor da sua hora?')

var salario = horastrabalhadas * valorhora
alert(nome + ' seu salario é: ' + salario)