// Menu Ativo

const links = document.querySelectorAll(".header-menu a");

function menuAtivo(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(menuAtivo);

//Parametros URL

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas

const perguntas = document.querySelectorAll(".perguntas button");

function eventoPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  pergunta.setAttribute("aria-expanded", "true");
  const ativa = resposta.classList.contains("ativa");
  resposta.classList.toggle("ativa");
}

function ativarPergunta(pergunta) {
  pergunta.addEventListener("click", eventoPergunta);
}

perguntas.forEach(ativarPergunta);

//Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicletas-imagem img");
const galeriaContainer = document.querySelector(".bicicletas-imagem");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
