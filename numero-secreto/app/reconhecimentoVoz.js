window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
const elementoChute = document.getElementById('chute')

recognition.lang = 'pt-Br'
recognition.start();
recognition.addEventListener('result', onSpek)

function onSpek(evento){
    chute = evento.results[0][0].transcript
    exibeChuteTela(chute)
    verificaValorValido(chute)
}

function exibeChuteTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())