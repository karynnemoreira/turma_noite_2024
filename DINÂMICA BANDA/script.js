//              0        1          2          3         4
let banda = ["Lady", "Madonna", "Beyonce", "Rihanna", "Taylor"]


//SUBSTITUIR A INTEGRANTE DA POSIÇÃO 3, O ÍNDICE É O 2.
banda.splice(2,1,"Demi")
console.log(banda)
//[ 'Lady', 'Madonna', 'Demi', 'Rihanna', 'Taylor' ]

banda.splice(1,2,"Avril", "Adele")
console.log(banda)

//[ 'Lady', 'Avril', 'Adele', 'Rihanna', 'Taylor' ]

//----ADICIONAR UTILIZANDO O SPLICE 
 
//[ 'Lady', 'Avril', 'Witney', 'Adele', 'Rihanna', 'Taylor' ] NO ÍNDICE 2 ADICIONE A WITNEY
banda.splice(2,0,"Witney", "Shakira")
console.log(banda)


//--REMOVER - à partir do índice 2 remova dois itens
banda.splice(2,2)
console.log(banda)
//[ 'Lady', 'Shakira', 'Adele', 'Rihanna', 'Taylor' ]