import {conectaAPI} from "./conectaAPI.js";

let lista = document.querySelector("[data-lista]")

export default function constroiCard(titulo, descricao, url, imagem) {
    let video = document.createElement('li')
    video.className = 'videos__item'
    video.innerHTML = `   <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`

    return video
}

async function listaVideo() {
    try{
        let listaApi = await conectaAPI.listaVideos()
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } catch(err) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Erro ao carregar os vídeos: ${err}</h2>`
    }
}

listaVideo()