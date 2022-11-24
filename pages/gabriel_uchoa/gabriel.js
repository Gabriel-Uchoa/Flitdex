const btn_edit = document.getElementById('btn_edit')
const describe_content = document.getElementById('describe_content')
const describe_content_old = window.localStorage.getItem("describe")
const marks = document.getElementsByClassName('marker')

function clickBtnEdit() {
    var newText = prompt('Informe uma nova descrição:')
    window.localStorage.setItem("describe", newText)
    describe_content.textContent = newText
}

function getValueLocalStorage() {
    if (!describe_content_old) {
        describe_content.textContent = `Tenho 19 anos e sou fascinado pelo universo que a programação me permite vivenciar:
        Imagino, Planejo e Crio. Sou formado como tecnólogo pelo Estado do Ceará, com expertise em
        desenvolvimento de sistemas voltados para Web e criação e prototipação de interface.`
    } else {
        describe_content.textContent = describe_content_old
    }
}

function loadMarks() {
    for (let i = 0; i < marks.length; i++) {
        marks[i].style.left = marks[i].id
    }
}

loadMarks()
getValueLocalStorage()

btn_edit.addEventListener('click', clickBtnEdit)
