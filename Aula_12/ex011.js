// Testes gerais com JavaScript

var idade = 73
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório`)
} 