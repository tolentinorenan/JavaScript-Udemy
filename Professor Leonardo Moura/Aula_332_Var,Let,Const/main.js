var a = 3  // CRIA UMA VARIAVEL
let b = 4  // variaveis criadas com var tem escopo global as criadas com let tem escopo de bloco

/*
Podemos redeclarar uma variavel criada com var
Porém nao podemos redeclarar uma variavel criada com let
*/

var a = 10
// let b = 20  <----- GERARIA UM ERRO

console.log(a, b)

// Depois que declaramos a variavel podemos mudar o valor quantas vezes quiser

a = 300
b = 600

console.log(a, b)

const c = 5  // POR SER UMA CONSTANTE NAO CONSEGUIMOS ATRIBUIR OUTRO VALOR
// c = 50  <------- ERRO
console.log(c)

/*
TIP: QUANTO MAIS CONSTANTES O CODIGO TIVER É MELHOR
*/

