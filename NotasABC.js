var nota1 = prompt('Digite a primeira nota do aluno:')
var nota2 = prompt('Digite a segunda nota do aluno:')
var nota3 = prompt('Digite a terceira nota do aluno:')

var notacompeso2 = nota1 * 0.2
var notacompeso3 = nota2 * 0.3
var notacompeso5 = nota3 * 0.5

var mediafinal = notacompeso2 + notacompeso3 + notacompeso5
alert('A media do aluno é: ' + mediafinal)