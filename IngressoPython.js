        var valorsemdesconto = 20.00;
        var valorVIPsemdesconto = 50.00;

        var valorcomdesconto = valorsemdesconto / 2;
        var valorVIPcomdesconto = valorVIPsemdesconto / 2;

        var nome = prompt("Digite seu nome:");

        var idade = prompt("Digite sua idade:");

        var resposta = prompt("Voce e estudante de python?" +
                "\nResponda com s(sim) e  n(nao)" +
                "\nResposta:");

        if (idade >= 18) {
            alert("Voce pode reservar seu ingreso");
            var ingreso = prompt("\nVoce deseja comprar o ingresso padrao ou VIP?" +
                    "\n1. Padrao = R$20,00" +
                    "\n2. VIP = R$50,00");

            alert("Seu ingresso" + ingreso + " foi reservado com asucesso");

            if (resposta == 's') {
                alert("Seu ingresso saiu com desconto por ser aluno python");
                if (ingreso == 1){
                    alert("Valor sem desconto = 20,00" +
                            "\nValor com desconto = 10,00");
                } else {
                    alert("Valor sem desconto = 50,00" +
                            "\nValor com desconto = 25,00");
                }
            } else {
                alert("\nSeu ingresso nao saiu com desconta");
            }

            alert("\nPague no local da festa!");
        } else {
            alert("Voce nao pode reservar seu ingreso");
        }