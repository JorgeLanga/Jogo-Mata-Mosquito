let altura=0
let largura=0
function ajustarTamanhoPalcoJogo() {
    altura=window.innerHeight
    largura=window.innerWidth
    console.log(largura, altura)
}

ajustarTamanhoPalcoJogo()


function posicaoAleatoria(){

    //Remover o mosquito caso exista
    if( document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()
    }
   

    //Gerando posicao na tela do mosquito
    let posicaoX=Math.floor(Math.random()*largura)-90
    let posicaoY=Math.floor(Math.random()*altura)-90
    console.log(posicaoX,posicaoY)

    //Mantendo o mosquito nos limites da tela
    posicaoX=posicaoX<0?0:posicaoX
    posicaoY=posicaoY<0?0:posicaoY

    
    //Criando os elementos do html
    let mosquito=document.createElement('img')
    mosquito.src='imagens/mosca.png'
    mosquito.className=tamanhoAleatorio()+" "+ladoAleatorio()
    mosquito.style
    .left=posicaoX+'px'
    mosquito.style
    .top=posicaoY+'px'
    mosquito.style.position='absolute'
    mosquito.id="mosquito"

    document.body.appendChild(mosquito)
    
}

function tamanhoAleatorio(){
    let classe=Math.floor(Math.random()*3)

    switch(classe){
        case 0: 
        return "mosquito1"

         case 2: 
        return "mosquito2"

         case 3: 
        return "mosquito3"
        default: return "mosquito1"
    }
}


function ladoAleatorio(){
    let classe=Math.floor(Math.random()*2)

    switch(classe){
        case 0: 
        return "ladoA"

         case 1: 
        return "ladoB"

        default: return "mosquito1"
    }
}

setInterval(function(){
    posicaoAleatoria()
},1000)
