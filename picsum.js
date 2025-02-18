'use strict';

async function pesquisarFotos() {
    const url = `https://picsum.photos/v2/list?page=2&limit=20`
    
    const response = await fetch(url)
    const data = await response.json()
  
  
  
    return data
}

function criarImagem(link) {
    const galeria = document.getElementById('galeria')
    const novaIMG = document.createElement('img')
    novaIMG.src = link;

    galeria.appendChild(novaIMG);
}

async function preencherFotos() {
    const fotos = await pesquisarFotos()
    const galeria = document.getElementById('galeria')
    galeria.replaceChildren('')

    fotos.forEach(link => criarImagem
        (link.download_url))
    console.log(fotos)
}

   preencherFotos()
