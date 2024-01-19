//DOM - DOCUMENT OBJECT MODEL (MODELO DE OBJETO DE DOCUMENTO) : ELE É UMA REPRESENTAÇÃO DA ESTRUTURA DO NOSSO CÓDIGO HTML. 
//IMAGINE QUE O HTML SEJA A ESTRUTURA DA CASA, O CSS A DECORAÇÃO DA CASA, O JS A ELETRICIDADE, DOM SERIA A PLANTA. 


//querySelector: Ele nos permite capturar um elemento pelo nome da tag, id ou class. 

const primeiroTitulo = document.querySelector("h1")

function acao(){
    primeiroTitulo.style.color="rgb(220,90,70)"
    primeiroTitulo.style.fontSize="1rem"
    //primeiroTitulo.style.transform="rotate(360deg)"
    primeiroTitulo.style.transition = "3s" //duração
    primeiroTitulo.style.fontStyle="italic"
}

acao()

//querySelectorAll = Vai capturar os elementos e retornará uma array chamado nodelist. 

const lista = document.querySelectorAll("li")
console.log(lista)

lista[3].style.color="blue";
lista[8].style.backgroundColor="violet"



//onclick: É um evento de clique. Quando o usuário clicar a função vai ser executada. Esses eventos são passando em tags, consigo utilizar em qualquer tag. Mas, é mais utilizada em botão e img. 

const tituloH2 = document.querySelector("h2")

function estilizandoH2(){
    tituloH2.style.textAlign="center"
    tituloH2.style.color="red"
}

// estilizandoH2()


const imagem = document.querySelector("img")
console.log(imagem)

function mostrarImagem(){
    imagem.src="https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/09/hqdefault.jpg"
    imagem.style.width="20%"
}
//mostrarImagem()