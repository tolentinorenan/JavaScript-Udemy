const peso1 = 1.0
const peso2 = Number('2.0') // Define o que esta entre ('') como caracter do tipo numerico

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))  // Verifica se a const possue o valor inteiro
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.878

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))  // MOSTRA APENAS DUAS CASAS DECIMAIS
console.log(media.toString())  // TRANSFORMA O VALOR DE MEDIA EM UMA STRING
// console.log(media.toString(2)) <---- TRANSFORMA EM VALOR BINÁRIO

console.log(typeof media)

/*
TIP
Number com N maisculo é uma função
number com n minusculo é o tipo
*/
