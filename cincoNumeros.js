var numero1 = prompt('Digite o primeiro numero:')
var numero2 = prompt('Digite o segundo numero:')
var numero3 = prompt('Digite o terceiro numero:')
var numero4 = prompt('Digite o quarto numero:')
var numero5 = prompt('Digite o quinto numero:')
var impar, par, positivo, negativo
par = 0
impar = 0
positivo = 0
negativo = 0

if (numero1 % 2 == 0) {
    par++
} else {
    impar++  
}

if (numero2 % 2 == 0) {
    par++
} else {
    impar++  
}

if (numero3 % 2 == 0) {
    par++
} else {
    impar++  
}

if (numero4 % 2 == 0) {
    par++
} else {
    impar++  
}

if (numero5 % 2 == 0) {
    par++
} else {
    impar++  
}

if (numero1 > 0) {
    positivo++
} else if (numero1 < 0) {
    negativo++
}

if (numero2 > 0) {
    positivo++
} else if (numero2 < 0) {
    negativo++
}

if (numero3 > 0) {
    positivo++
} else if (numero3 < 0) {
    negativo++
}

if (numero4 > 0) {
    positivo++
} else if (numero4 < 0) {
    negativo++
}

if (numero5 > 0) {
    positivo++
} else if (numero5 < 0) {
    negativo++
}

alert('Numeros pares: ' + par)
alert('Numeros impares: ' + impar)
alert('Numeros positivos: ' + positivo)
alert('Numeros negativos: ' + negativo)