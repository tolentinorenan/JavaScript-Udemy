function soma(valor1, valor2){
    console.log(valor1 + valor2);
}
//soma(1,2);
function somaReturn(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
}
//console.log(somaReturn(2,5));
//let umafuncao = soma;
//umafuncao(1,2222);
let novaFunc = function(teste){
    console.log("Olá");
    console.log(teste);
}
novaFunc("teste teste teste");
novaFunc(123);
novaFunc(1 == 1);
