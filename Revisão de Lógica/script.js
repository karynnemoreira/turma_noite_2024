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

let cadastro = function (cpf, nome, idade) {
    //console.log(cpf, nome, idade)
}
cadastro(1234567, "Gabi", 19)


//Dúvida da Gabi sobre  var, let e const, atualização de valores. 
//A variável let e var pode alterar valores, já a variável const, não pode modificar um valor. 

//cadastro = "cachorrinho caramelo"
//console.log(cadastro)


//Ex2 , Variável que está guardando uma função

const frutas = function (fruta1, fruta2, fruta3) {
    //console.log(fruta1, fruta2, fruta3)
    //console.log(`Eu amo ${fruta1} e ${fruta2}, mas um ${fruta3} cai super bem no café da manhã`)
}

frutas("maçã", "acerola", "mamão")

//Ex3
let multiplicar = function (numero1, numero2) {
    //console.log(numero1 * numero2)
}

multiplicar(4, 19)

//--UTILIZANDO VARIÁVEIS COMO VALOR DOS PARÂMETROS 

//criei a variável

let show = "Coldplay"

function queroFicarNaGrade(ocarinhaquetavendendolugar) {
    //console.log(`A Debora quer comprar um local na fila para o show do ${ocarinhaquetavendendolugar}e o seu lugar estava reservado com o "carinhaquetavendendolugar`)
}
queroFicarNaGrade(show)

// --- 
let animal = "Lua"
let racao = "golden"

function mostraNome(gatinha, comida) {
    //console.log(`A ${gatinha} está esbelta porque só quer comer ${comida}`)
}
mostraNome(animal, racao)


//FUNÇÃO COM RETORNO 

//Estrura

function somar(n1, n2) {
    return n1 + n2
}
//console.log(somar(96,44))

// Vitamina

function suco(polpa1, polpa2, polpa3) {
    return `Coloque no liquidificador o ${polpa1}e a ${polpa2}, depois finalize com ${polpa3}`
}

//console.log(suco('maracujá','manga', 'hortelã' ))

//---------------------

// FUNÇÃO COM RETORNO - CALCULANDO O IMC 

//peso, altura são os parâmetros 
function imc(peso, altura) {
    const imc = peso / (altura * altura) //peso dividido pela a altura ao quadrado (altura*altura)
    return imc //retorna o valor da variável imc
}
//console.log(imc(61, 1.67))

//CONDIÇÃO - IF, ELSE, ELSE IF 

// IF = SE (SE A INFORMAÇÃO FOR VERDADEIRA, FAÇA ISSO)

//ELSE IF = SENÃO SE (USADO PARA NOS DAR MAIS OPÇÕES DE ESCOLHA)

//ELSE = SENÃO (SE TODAS AS INFORMAÇÕES FOREM FALSAS, CAI NO ELSE)

let numeroDaSorte = 9

// if (numeroDaSorte == 9) {
//     console.log("Parabéns, você foi o primeiro sorteado")
// } else if (numeroDaSorte == 7) {
//     console.log("Parabéns, você foi o segundo sorteado")
// } else if (numeroDaSorte == 1) {
//     console.log("Parabéns, você foi o terceiro sorteado")
// } else {
//     console.log("Não foi desta vez, tente novamente")
// }

//OPERADORES LÓGICOS 
// ! (NOT) - INVERTE O VALOR QUE É DADO A ELE

let segunda = true 
//console.log(!segunda)

let terca = false 
//console.log(!terca)

//&& (E) COMPARA SE DAS DUAS OU MAIS INFORMAÇÕES SÃO VERDADEIRAS

let a = "Carol"
let b = "Oliveira"

if(a == "Carol" && b == "Moreira"){
console.log("Tá tudo certinho")
}else{
console.log("Respostas incorretas")
}

// || (OU) - COMPARA SE UM OU O OUTRO É VERDADEIRO 

let aniversario = "Junho"

if(aniversario === "Dezembro" || aniversario === "janeiro" || aniversario === "junho"){
console.log(`Você faz aniversário no mês de ${aniversario} `)
} else{
    console.log("Você não faz aniversário em Dezembro, Janeiro e Junho")
}

//---- 
// > MAIOR
// < MENOR
// >= MAIOR OU IGUAL 
// <= MENOR OU IGUAL 
// != SE O VALOR É DIFERENTE 
// !== SE O VALOR E O TIPO SÃO DIFERENTES
// == VERIFICA SE O VALOR É IGUAL 
// === VERIFICA SE O VALOR E O TIPO SÃO IGUAIS 

// !=== PEGADINHA


//LOOPS - SÃO LAÇOS DE REPETIÇÃO 


//forma completa
for(let numero = 1; numero <= 10; numero = numero + 1 ){
// console.log(numero)
}

//numero = numero + 1 
//(numero++) abreviação
//++ = atribui 1 valor (incremento)
// -- = retirar 1 valor (decremento)

//forma simplificada
for(let numero = 1; numero <= 10; numero++){
   // console.log(numero)
}
// 1 + 1 = 2
// 2 + 1 = 3 
//... 

//CONTAGEM REGRESSIVA 
for(let number = 10; number >= 1; number--){
//console.log(number)
}
//number = 10 
// 10 -1 = 9
// 9 -1 = 8 
//... 
// 2 - 1 = 1
// 1 

//numeros pares 
for(let par = 0; par <= 50; par = par + 2){ //completo
//console.log(par)
}

//números ímpares

for(let impar = 1; impar <= 50; impar += 2){ //simplicado
//console.log(impar)
}


//OPERADORES DE ATRIBUIÇÃO 

//soma 
//console.log(par = par + 2) //forma completa
//console.log(par += 2) //forma simplificada

//subtração
//console.log(par = par - 2) //forma completa
//console.log(par -= 2) //forma simplificada

//Multiplicação
//console.log(par = par * 2) //forma completa
//console.log(par *= 2) //forma simplificada

//Divisão
//console.log(par = par / 2) //forma completa
//console.log(par /= 2) //forma simplificada


//ARRAY []  , CADA ITEM É  SEPARADO POR VÍRGULA; CADA ELEMENTO POSSUI UMA POSIÇÃO NUMERADA CONHECIDA COMO INDEX. 


let numeros = [4,10,5]
console.log(numeros)

numeros.push(12)
// inseri um item no final da array
console.log(numeros)

numeros.unshift(2) // inseri um item no início da array
console.log(numeros)

numeros.shift()
//remove o primeiro item da array
console.log(numeros)

numeros.pop() 
//remove o último item da array
console.log(numeros)


