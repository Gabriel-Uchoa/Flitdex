const bt_edit = document.getElementById('bt_edit');
const bt_prox = document.getElementById('bt_prox');
const bt_ante = document.getElementById('bt_ante');
const apresentarConteudo = document.getElementById('apresentarConteudo');
const apresentarConteudoAntigo = window.localStorage.getItem("apresentar");
const barras = document.getElementsByClassName('barra');



function getValueLocalStorage() {
    if (!apresentarConteudoAntigo) {
        apresentarConteudo.textContent = `Me chamo Leandro Tiberio, tenho 44 anos sou da cidade de Mogi das Cruzes, casado e tenho uma fámilia
        MARAVILHOSA atualmente em transição de carreira para área de programação.`
        
    } else {
        apresentarConteudo.textContent = apresentarConteudoAntigo
    }
}

function clickBtProx() {
    window.location.href = "http://localhost:5500/pages/arthur/arthur.html";
}

function clickBtAnte() {
    window.location.href = "http://localhost:5500/pages/gabriel/gabriel.html";
}

function clickBtEdit() {
    var newText = prompt('descrição:')
    window.localStorage.setItem("apresentar", newText)
    apresentarConteudo.textContent = newText
}

function loadMarks() {
    for (let i = 0; i < barras.length; i++) {
        barras[i].style.left = barras[i].id
    }
}

loadMarks();
getValueLocalStorage();

bt_edit.addEventListener('change', clickBtEdit);
bt_prox.addEventListener('change', clickBtProx);
bt_ante.addEventListener('change', clickBtAnte);
