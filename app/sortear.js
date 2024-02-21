const menorValor = 1
const maiorValor = 100
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')

const numeroSecreto = gerarNumAleatorio()

function gerarNumAleatorio() {
    return parseInt(Math.random() * (menorValor - maiorValor - 1) + (maiorValor + 1))
}

elementoMenorValor.innerHTML= menorValor
elementoMaiorValor.innerHTML = maiorValor
