window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
const elementoChute = document.getElementById('chute')

recognition.lang = 'pt-Br'
recognition.start();
recognition.addEventListener('result', onSpek)

function onSpek(evento){
    chute = evento.results[0][0].transcript
    verificaValorValido(chute)
    console.log(chute)
    exibeChuteTela(chute)
}

function exibeChuteTela(chute) {
    const voceDisse = document.createElement('div')
    const box = document.createElement('span')

    voceDisse.innerText = 'Você Disse'
    box.classList.add('box')
    box.innerHTML = chute
    elementoChute.appendChild(voceDisse)
    elementoChute.appendChild(box)
}