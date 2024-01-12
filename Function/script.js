//sintaxe
//function nomedafunção (parâmetro) {//tarefa/retorno} 
//ativar a função nomedafuncao()

//function nomedafunction(){}
function mensagem(){
   // console.log("Hoje está muito calor!")
}
mensagem() //ativando/invocando a função mensagem


//ex:2
function dia(){
//console.log("Quartou!!")
}
dia()

//--------DECLARANDO FUNÇÃO DENTRO DE VARIÁVEIS-----

//SINTAXE
//VARIAVEL = FUNCTION(){}

//Ex1
const cor = function(){
 //   console.log("amarelo")
}
cor()

//Ex2
const comida = function(){
//console.log("Bolinho Ana Maria")    
}

comida()

//Ex3                   //1º     2º       3º
const cadastro = function(nome, idade, cidade){
// console.log(nome)
// console.log(idade)
// console.log(cidade)
}
cadastro("Rihanna", 26 ,"Rio de Janeiro")

//Ex4
const cantores = function(reservado1, reservado2){
//console.log(reservado1, ',', reservado2)
//console.log(`Tem show da ${reservado1} em Salvador, com participação da ${reservado2}`)
}
cantores("Beyonce","Lady Gaga")

//String (texto), pode ser envolvido por aspas simples '', aspas duplas""  e crase ``

//templateString é uma string mais poderosa, ela guarda diversos valores. `${}`

//number (numérico) não é envolvido por aspas ou crase

//boolean (verdadeiro ou falso) não é envolvido por aspas ou crase


//Ex5 - Utilizando uma variável dentro do parâmetro

//variável chamada nome = 
let _nome = "Cachorro Caramelo"
//função chamada cachorrinho(reservei esse lugar)
function cachorrinho(doguinhoreservado){
    //mostra o que ta sendo reservado (ainda não sei)
//console.log(doguinhoreservado)
}
//ativei a função (chamei a variável)
cachorrinho(_nome)


//Ex6 - Função com parâmetro 

function mostrarAnimais(animal1, animal2, animal3){
//console.log(animal1, animal2, animal3)
}
mostrarAnimais("jacaré", "gato", "lebre")

//Função com return
//SINTAXE

// function nomedafunção(){
//     return 
// }
// ativar a função

//Exemplo 1

function dobro(numero){
    return numero * 2
}
console.log(dobro(25))

//Exemplo 2
function triplo(number){
    return number * 3 
}
 console.log(triplo(60))


 //Exemplo 3
 function cinco(num){
    return num * 5
 }
console.log(cinco(35))


//Função com parâmetro 

function carro(carro1, carro2){
console.log(carro1, ",", carro2)
}
carro("uninho", "celtinha")