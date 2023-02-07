const formulario =  document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach((elemento)=>{
    criaElemento(elemento)
})

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    // Não está sendo utilizado esse porque se mudar de posição, teremos q mudar o codigo, da forma que está sendo utilizado 
    // abaixo não é preciso mudar o codigo pois é um objeto, buscado pelo nome
    // const nome = evento.target[0].value
    // const qtd = evento.target[1].value
    const nome = evento.target.elements['nome']
    const qtd = evento.target.elements['quantidade']

    //Procura dentro dos elementos se o elemento atual ja existe, se sim atualizamos ele, se não criamos outro.
    const existe = itens.find(elemento => elemento.nome === nome.value)
    //objeto criado com nome e qtd
    const itemAtual = {
        'nome': nome.value,
        'qtd': qtd.value
    }

    if(existe){
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
        itens[itemAtual.id]= itemAtual
    } else {
        itemAtual.id = itens.length
        criaElemento(itemAtual)
        //array criado e adicionando o objeto acima, para salvar diversos itens no localStorage.
        itens.push(itemAtual)
    }

    localStorage.setItem('itens',JSON.stringify(itens))
    //limpa input ao criar o elemento
    nome.value = ''
    qtd.value = ''
})

function criaElemento(item) {
    //Criando elemento de lista
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    //Criando elemento em negrito para a qtd dos itens.
    const qtdItem = document.createElement('strong')
    //inserindo a qtd de itens dentro do elemento strong
    qtdItem.innerHTML = item.qtd
    qtdItem.dataset.id = item.id
    // inserir um elemento criado dentro de outro elemento
    novoItem.appendChild(qtdItem) 
    //acrescentando o nome dentro do elemento incrementado
    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    //const idItem = document.querySelector("[data-id='" + item.id + "']")
    //idItem[item.id].textContent = item.qtd 
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.qtd
}

