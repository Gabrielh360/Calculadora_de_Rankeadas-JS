let vitorias = 10   // Variável que determina a quantidade de Vitórias.
let derrotas = 5    // Variável que determina a quantidade de Derrotas.

// Um constante que calcula o Saldo Total das Vitoórias utiilizado as variáveis de vitorias e derrotas.
const saldoVitorias = vitorias - derrotas

// Chama a função com os parametros da constante de saldoVitorias.
const resultadoRacking = CalculadorDePartidasRankeadas(saldoVitorias)

// Uma função que chama o paramentro de saldoVitorias.
function CalculadorDePartidasRankeadas(saldoDeRankeadas) {
    // Um variavel vazia que será preenchida por qual valor. 
    let nivel;
    // Usando "switch (true)" para criar uma estrutura de controle que se comporta de maneira semelhante ao if...else if...else. 
    switch (true) {
        // Cada case é uma expressão booleana. Se a expressão for verdadeira, o código correspondente é executado.
        case (saldoDeRankeadas < 10) :
            nivel = "Ferro";
            break;
        case (saldoDeRankeadas >= 11 && saldoDeRankeadas <= 20) :
            nivel = "Bronze";
            break;
        case (saldoDeRankeadas >= 21 && saldoDeRankeadas <= 50) :
            nivel = "Prata";
            break;
        case (saldoDeRankeadas >= 51 && saldoDeRankeadas <= 80) :
            nivel = "Ouro";
            break;
        case (saldoDeRankeadas >= 81 && saldoDeRankeadas <= 90) :
            nivel = "Diamante";
            break;
        case (saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100) :
            nivel = "Lendário";
            break;
        case (saldoDeRankeadas >= 101) :
            nivel = "Imortal";
            break;
    }
    
    // Retorna um console.log que serve pra imprimir os resultados dos valores e apresentar no Terminal com uma Mensagem.
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
}

