// PRÓXIMA PÁGINA E PÁGINA ANTERIOR
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')

function prevPerson(){
    window.location.href = '../arthur/arthur.html'
}

prevButton.addEventListener('click', prevPerson)

function nextPerson(){
    window.location.href = '../gabriel_uchoa/gabriel.html'
}

nextButton.addEventListener('click', nextPerson)

// EDITAR TEXTO SOBRE MIM

const editButton = document.getElementById('editButton')
const textContent = document.getElementById('textContent')

function editText(){
    let newText = prompt('Edite o campo sobre mim:')
    textContent.innerHTML = newText
    window.localStorage.setItem('textSobreMim', newText)
}

editButton.addEventListener('click', editText)

function getItemText(){
    textContent.innerHTML = getItem
}

let getItem = window.localStorage.getItem('textSobreMim')
window.addEventListener('load', getItemText)

function oldText(){
    if(!getItem){
        textContent.innerHTML = 'Meu nome é Giovanna, tenho 20 anos, atualmente trabalho com atendimento ao cliente e quando finalizar o curso já pretendo entrar na área de programação. Moro em São Paulo com a minha mãe, tenho um cachorro e no meu tempo livre gosto de assistir séries, treinar e sair para jantar com o meu namorado.'
    }
}

window.addEventListener('load', oldText)

// BARRA DE PERSONALIDADE
let markers = document.getElementsByClassName('marker')

for (let i = 0; i < markers.length; i++) {
    markers[i].style.left = markers[i].id
}

