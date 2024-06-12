let vitorias = 10   // Variável que determina a quantidade de Vitórias.
let derrotas = 5    // Variável que determina a quantidade de Derrotas.

// Um constante que calcula o Saldo Total das Vitoórias utiilizado as variáveis de vitorias e derrotas.
const saldoVitorias = vitorias - derrotas

// Chama a função com os parametros da constante de saldoVitorias.
const resultadoRacking = CalculadorDePartidasRankeadas(saldoVitorias)

// Uma função que chama o paramentro de saldoVitorias.
function CalculadorDePartidasRankeadas(saldoVitorias) {
    // Um variavel vazia que será preenchida por qual valor. 
    let nivel;
    //  Um estrutura condicional que determina nivel utilizando o valor da constante de saldoVitorias.
    if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro"
    }  else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante"
    }  else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário"
    }  else if (saldoVitorias >= 101) {
        nivel = "Imortal"
    } else {
        nivel = "ferro"
    }

    // Retorna um console.log que serve pra imprimir os resultados dos valores e apresentar no Terminal com uma Mensagem.
    return console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
}

