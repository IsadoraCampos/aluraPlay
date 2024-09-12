import {conectaAPI} from "./conectaAPI.js";

let formulario = document.querySelector('[data-formulario]')

async function criarVideo(evento) {
    evento.preventDefault() //previni que a página não vai ser carregada automaticamente

    let titulo = document.querySelector('[data-titulo]').value //pq a gente quer somente oq o usuário vai digitar
    let url = document.querySelector('[data-url]').value
    let imagem = document.querySelector('[data-imagem]').value
    let descricao = Math.floor(Math.random() * 10).toString() //Math.floor arredonda um número para inteiro

    try {
        await conectaAPI.criaVideos(titulo, descricao, url, imagem)
        window.location.href = '../pages/envio-concluido.html'
    } catch(e) {
        alert(e)
    }
}

formulario.addEventListener('submit',evento => criarVideo(evento))
