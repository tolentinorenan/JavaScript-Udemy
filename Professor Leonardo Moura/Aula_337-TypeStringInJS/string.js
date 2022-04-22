const escola = "Cod3r"

console.log(escola.charAt(4))  // RETORNA A LETRA DO INDICE 4
console.log(escola.charCodeAt(3)) // RETORNA O ITEM 3 POREM DA TABELA ASCII
console.log(escola.indexOf('3'))  // VERIFICA O INDICE QUE O VALOR ESTA NA CONSTANTE ESCOLA
console.log(escola.substring(1))  // VAI A PARTIR DO INDICE 1 ATE O FINAL
console.log(escola.substring(0,3))  // VAI DO INDICE 0 ATÉ 3


console.log("ESCOLA".concat(escola).concat("!"))  // CONCATENA 
console.log('escola' + escola + '!')  // concatena tambem

console.log(escola.replace(3, "e"))  // SUBSTITUI 3 POR E

console.log('Ana,Maria,Pedro'.split(',')) // GERA UM ARRAY COM SEPARADOR COM BASE NA VIRGULA
