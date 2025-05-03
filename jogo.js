let altura=0
let largura=0
function ajustarTamanhoPalcoJogo() {
    altura=window.innerHeight
    largura=window.innerWidth
    console.log(largura, altura)
}

ajustarTamanhoPalcoJogo()

//Gerando posicao na tela do mosquito
let posicaoX=Math.floor(Math.random()*largura)
let positionY=Math.floor(Math.random()*altura)
console.log(posicaoX,positionY)

