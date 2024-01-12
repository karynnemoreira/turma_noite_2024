//Estrutura de uma função: 

// function nomeDaFuncao(parâmetro){
//    retorno/tarefa  - código a ser executado 
// }
// nomeDaFuncao() //ativando/invocando/chamando essa função

// function + nome para a função + () parâmetro + { 
//     tarefa/retorno - o que quero que essa função faça
// }
// nome da função ()   //invoco a função 


//--DECLARANDO FUNÇÃO DENTRO DE VARIÁVEIS
//ESTRUTURA

let cadastro = function(cpf, nome, idade){
//console.log(cpf, nome, idade)
}
cadastro(1234567, "Gabi" , 19)


//Dúvida da Gabi sobre  var, let e const, atualização de valores. 
//A variável let e var pode alterar valores, já a variável const, não pode modificar um valor. 

//cadastro = "cachorrinho caramelo"
//console.log(cadastro)


//Ex2 , Variável que está guardando uma função

const frutas = function(fruta1, fruta2, fruta3){
    //console.log(fruta1, fruta2, fruta3)
    //console.log(`Eu amo ${fruta1} e ${fruta2}, mas um ${fruta3} cai super bem no café da manhã`)
}

frutas("maçã", "acerola", "mamão")

//Ex3
let multiplicar = function(numero1, numero2){
//console.log(numero1 * numero2)
}

multiplicar(4,19)

//--UTILIZANDO VARIÁVEIS COMO VALOR DOS PARÂMETROS 

//criei a variável

let show = "Coldplay"

function queroFicarNaGrade(ocarinhaquetavendendolugar){
//console.log(`A Debora quer comprar um local na fila para o show do ${ocarinhaquetavendendolugar}e o seu lugar estava reservado com o "carinhaquetavendendolugar`)
}
queroFicarNaGrade(show)

// --- 
let animal = "Lua"
let racao = "golden"

function mostraNome(gatinha, comida){
//console.log(`A ${gatinha} está esbelta porque só quer comer ${comida}`)
} 
mostraNome(animal, racao)


//FUNÇÃO COM RETORNO 

//Estrura

function somar(n1,n2){
    return n1 + n2
}
console.log(somar(96,44))

// Vitamina

function suco(polpa1, polpa2, polpa3){
return  `Coloque no liquidificador o ${polpa1}e a ${polpa2}, depois finalize com ${polpa3}`
}

console.log(suco('maracujá','manga', 'hortelã' ))
