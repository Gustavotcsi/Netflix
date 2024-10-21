let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")

botaoSom.addEventListener("click", ligasom)

function ligasom() {
    video.muted = true
  
}