async function listaVideos() {
    let conexao = await fetch('http://localhost:3000/videos')
    let videos = await conexao.json()
    return videos
}

async function criaVideos(titulo, descricao, url, imagem) {
    let conexao = await fetch('http://localhost:3000/videos', { //fazendo um tipo de requisição POST, pois o padrão é GET
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
        }
    )

    if (!conexao.ok) {
        throw new Error("Ocorreu um erro na conexão, não foi possível enviar o vídeo")
    }

    let conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function buscaVideo(termoDeBusca) {
    let conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    let conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

export let conectaAPI = {
    listaVideos,
    criaVideos,
    buscaVideo
} //exporta funções para outros arquivos
