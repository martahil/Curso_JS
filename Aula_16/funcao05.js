//como fazer o fatorial de uma forma recursiva (uma recursão acontece quando uma função chama ela mesma)

function fatorial(n) {
    if(n==1) {
        return 1
    } else {
        return n * fatorial(n - 1) //aqui a função chama ela mesma = RECURSIVIDADE
    } 
}
console.log(fatorial(5))

//Em "return n * fatorial(n - 1)", se n = 5, logo 5 * (5 - 1) = 5 * 4 = 120


// 5! = 5 * 4 * 3 * 2 * 1
// ou seja, 5! = 5 * 4!
// logo, n! = n * (n-1)! (o  que não se aplica ao fatorial de 1 (1!))