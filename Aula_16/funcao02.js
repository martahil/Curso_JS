// Testes gerais com JavaScript

// function soma(n1, n2) {
//     return n1 + n2
// }

//console.log(soma(2, 5))

/*
console.log(soma(2)) //como o segundo parâmetro não foi definido, o resultado é "not a number", pois 2 mais indefinido = NaN
*/

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log('resultado 1: ' + soma(2)) //o segundo parâmetro seguirá zero
console.log('resultado 2: ' + soma(2, 7))
