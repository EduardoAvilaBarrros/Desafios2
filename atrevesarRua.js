var resposta = prompt("Voce e pedestre ou motorista? Responda pelos numeros indicados:" +
                "\n 1. Pedestre" +
                "\n 2. Motorista" +
                "\nResposta:");

if (resposta == 1) {
    var resposta1 = prompt("Responda todas as perguntas a baixo com s(sim) ou n(nao):" +
            "\nVoce esta na faixa de seguranca?" +
            "\nResposta:");

    var resposta2 = prompt("O sinal esta fechado para os carros?" +
            "\nResposta");

    if (resposta2 == 's' && resposta3 == 's'){
        alert("Parabens voce ta certo");
    } else {
        alert("Se mate logo entao");
    }

} else if (resposta == 2) {
    var resposta2 = prompt("Responda todas as perguntas a baixo com s(sim) ou n(nao):" +
            "\nVoce esta usando cinto de seguranca" +
            "\nResposta:");

    var resposta3 = prompt("Voce bebeu alguma bebida alcoolica?" +
            "\nResposta:");

    var resposta4 = prompt("O sinal enta aberto para carros?" +
            "\nResposta:");

    if (resposta2 == 's' && resposta3 == 'n' && resposta4 == 's'){
        alert("Voce pode dirigir parabens ✔✨");
    } else {
        alert("Voce esta errado, se mate logo, amem!");
    }
}