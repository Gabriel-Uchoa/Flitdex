const clickArrorLeft = document.getElementById('arrowLeft')
const clickArrorRight = document.getElementById('arrowRight')
const imagemCaroussel = document.getElementById('imagemCaroussel')
const nomeCaroussel = document.getElementById('nomeCaroussel')
const linkImagem = document.getElementById('linkImagem')

const arrayImage = ['./assets/giovanna.jpg', './assets/gabriel.jpg', './assets/Leandro.jpg', './assets/arthur.jpg']
const linkImage = ['./pages/giovanna/giovanna.html', './pages/gabriel_uchoa/gabriel.html', './pages/leandro/leandro.html', '#paginaarthur']
const nomeImage = ['Giovanna', 'Gabriel', 'Leandro', 'Arthur']

var contador = 0

function verificarContador(num) {
  if (num === 4) {
    contador = 0;
  }
  if (num === -1) {
    contador = 3;
  }
}

function changeImagemCarouselProx() {
  contador = contador + 1;
  verificarContador(contador);

  imagemCaroussel.src = arrayImage[contador];
  nomeCaroussel.textContent = nomeImage[contador];
  linkImagem.href = linkImage[contador];
}

function changeImagemCarouselAnt() {
  contador = contador - 1;
  verificarContador(contador);

  nomeCaroussel.textContent = nomeImage[contador];
  linkImagem.href = linkImage[contador];
  imagemCaroussel.src = arrayImage[contador];
}

clickArrorRight.addEventListener("click", changeImagemCarouselProx);
clickArrorLeft.addEventListener("click", changeImagemCarouselAnt);
