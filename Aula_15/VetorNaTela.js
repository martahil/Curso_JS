/*let valores = [8, 1, 7, 4, 2, 9]

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

console.log("--------------------")

console.log(valores)

console.log("--------------------")

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log("--------------------")

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

valores.sort()

console.log("Em ordem:")

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log("--------------------")*/

let num = [5, 8, 2, 9, 3]

/*let pos = num.indexOf(8)

console.log(`O valor de 8 está na posição ${pos}`) */

/*let pos = num.indexOf(4)

console.log(`O valor de 4 está na posição ${pos}`) //Não existe o número 4, logo será considerada a posição -1*/

let pos = num.indexOf(4)
//let pos = num.indexOf(8)

if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
console.log(`O valor está na posição ${pos}`) //Não existe o número 4, logo será considerada a posição -1
}

/*num.sort()
let pos = num.indexOf(8)
console.log(`O valor de 8 está na posição ${pos}`)*/