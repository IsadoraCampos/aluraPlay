import {conectaAPI} from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault()

    let dadosPesquisa = document.querySelector('.pesquisar__input').value
    let busca = await conectaAPI.buscaVideo(dadosPesquisa)

    let lista = document.querySelector('.videos__container')

    if (lista.length === 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
    }

    lista.innerHTML = ""

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

}

let btnPesquisa = document.querySelector('.pesquisar__botao')
btnPesquisa.addEventListener('click', evento => buscarVideo(evento))
