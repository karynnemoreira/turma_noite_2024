//DOM - DOCUMENT OBJECT MODEL (MODELO DE OBJETO DE DOCUMENTO)


//HTML É A ESTRUTURA DA CASA, O CSS A DECORAÇÃO, O JS A ELETRICIDADE E O DOM A PLANTA DA CASA. CONSIGO VER TUDO QUE ESTÁ ACONTECENDO E POSSO MODIFICAR (LER ELEMENTOS; EXCLUIR ELEMENTOS; MODIFICAR ELEMENTOS OU ESTILOS)

//document.querySelector()  VAI CAPTURAR UM ELEMENTO PELO NOME DA TAG, CLASS OU ID 

let primeiroTitulo = document.querySelector("h1")

function acao(){
    primeiroTitulo.style.color = "red"
    primeiroTitulo.style.transition = "3s"
    primeiroTitulo.style.transform = "rotate(360deg)"
}
acao()

//------ 

let cabecalho = document.querySelector("header")

function mudarHeader(){
    cabecalho.style.backgroundColor = "purple"
}
mudarHeader()

