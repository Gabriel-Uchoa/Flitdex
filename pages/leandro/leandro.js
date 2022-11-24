const bt_edit = document.getElementById('bt_edit');
const apresentarConteudo = document.getElementById('descricaoPessoal');
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


function clickBtEdit() {
    var newText = prompt('Editar mensagem:')
    window.localStorage.setItem("apresentar", newText)
    apresentarConteudo.textContent = newText
}

function abrirBarra() {
    for (let i = 0; i < barras.length; i++) {
        barras[i].style.left = barras[i].id
    }
}

abrirBarra();
getValueLocalStorage();

bt_edit.addEventListener('click', clickBtEdit);

