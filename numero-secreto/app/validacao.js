function verificaValorValido(valor) {
    const numero = +valor

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div class="chute-invalido">Valor Inválido</div>'
        return
    }

    if(valorMaiorMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div class="chute-invalido">Valor Inválido, o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero == numeroSecreto){
        document.body.innerHTML = `<div class="acertou">Acertou Miseravi! O numero Secreto era ${numeroSecreto}</div>`
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div> O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }    
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function valorMaiorMenorPermitido(valor) {
    return valor > maiorValor || valor < menorValor
}