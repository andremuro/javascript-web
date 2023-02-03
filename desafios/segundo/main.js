// const listaCor = document.querySelector('.lista')
// listaCor.hidden = true;

// const btMosta = document.querySelector('[data-mostra]');
// const btEsconde = document.querySelector('[data-esconde]');

// function mostraEscondeLista(hidden) {
//     if (hidden){
//         listaCor.hidden = true;
//         return;
//     }
//     listaCor.hidden = false;
// }

// btMosta.addEventListener("click", (evento)=> {
//     mostraEscondeLista(false);
// });

// btEsconde.addEventListener("click", (evento)=> {
//     mostraEscondeLista(true);
// });


const listaControleBotoes = document.querySelectorAll("[data-controle]");

listaControleBotoes.forEach((elemento)=> {
    elemento.addEventListener("click", (evento)=>{
        mostrarEsconderLista(evento.target.dataset.controle);
    })
});

function mostrarEsconderLista(controle){
    const listaCor = document.querySelector('.lista');
    controle === 'mostra' ? listaCor.hidden = false : listaCor.hidden = true;
}


