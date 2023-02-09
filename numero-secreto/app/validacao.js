function verificaValorValido(valor) {
    const numero = parseInt(valor)

    if (chuteInvalido(numero)) {
        //elementoChute.innerHTML += '<div>Valor Inválido</div>'
        const divChuteInvalido = document.createElement('div')
        divChuteInvalido.classList.add('chute-invalido')
        divChuteInvalido.innerText = 'Valor Inválido'
        elementoChute.appendChild(divChuteInvalido)
    }

    if(valorMaiorMenorPermitido(valor)) {
        const divChuteMMInvalido = document.createElement('div')
        divChuteMMInvalido.classList.add('chute-invalido')
        divChuteMMInvalido.innerText = `Valor Inválido, o número secreto precisa estar entre ${menorValor} e ${maiorValor}`
        elementoChute.appendChild(divChuteMMInvalido)
    }

    if (valor == numeroSecreto){
        document.body.innerHTML = ''
        const telaSucesso = document.body
        const acertou = document.createElement('div')
        acertou.classList.add('acertou')
        acertou.innerText = `Acertou Miseravi! O numero Secreto era ${numeroSecreto}`
        
        telaSucesso.appendChild(acertou)
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function valorMaiorMenorPermitido(valor) {
    return valor > maiorValor || valor < menorValor
}