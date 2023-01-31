
function tocaSom(seletorElementoAudio) {
    const elemento = document.querySelector(seletorElementoAudio);
    if(elemento && elemento.localName === 'audio' ) {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou Seletor inválido!');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

    /**
     * ENQUANTO
     */
// while(contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];
//     const seletorElemento = tecla.classList[1];
//     const seletorElementoAudio = `#som_${seletorElemento}`; 

//     tecla.onclick = function() {
//         tocaSom(seletorElementoAudio);
//     }
//     contador++;

// }

/**
 * PARA
 */
for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const seletorElemento = tecla.classList[1];
    const seletorElementoAudio = `#som_${seletorElemento}`;

    tecla.onclick = function() {
            tocaSom(seletorElementoAudio);
        }

    tecla.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === 'Enter' ) {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
