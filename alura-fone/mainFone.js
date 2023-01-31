const listaTeclas = document.querySelectorAll('input[type=button]');
const telefone = document.querySelector('input[type=tel]');

console.log(listaTeclas);
console.log(telefone);

for(let contador = 0; contador < listaTeclas.length; contador++) {
    const tecla = listaTeclas[contador];
    console.log(tecla);
    tecla.onclick = function() {
        telefone.value = telefone.value + tecla.value;
    }
}