//alert(`Olá!`)

let insertedNum = document.getElementById('numero')
let res = document.querySelector('div#res')
let selectNumber = document.getElementById('selectValores')
//

let vetorNum = []

function inLista(n, l) { //o número já está na lista?
    if (l.indexOf(n) != -1) {
        return true 
    } else {
        return false
    }
}

function addNum() {

let numberIns = Number(insertedNum.value)

if (numberIns >= 1 && numberIns <= 100 && !inLista(numberIns, vetorNum)) { //numberIns > 1 && numberIns < 100
    vetorNum.push(numberIns)
    //res.innerHTML += `O valor adicionado é ${vetorNum}`

    let item = document.createElement('option')
    item.text =`Valor ${numberIns} adicionado.`
    selectNumber.appendChild(item)
    res.innerHTML = ''  

} else {
    window.alert('Valor inválido ou já encontrado na lista.')
}
insertedNum.value = ''
insertedNum.focus()
}

function finalResult() {

if (vetorNum.length == 0) {
    window.alert('Adicione um valor antes de clicar em Finalizar.')
} else {

tot = vetorNum.length
let soma = 0
let media = 0

let maior = vetorNum[0]
let menor = vetorNum[0]

for(let pos in vetorNum) {
    soma += vetorNum[pos]

    if(vetorNum[pos] > maior)
    {
        maior = vetorNum[pos]
    } 
    if(vetorNum[pos] < menor)
    {
        menor = vetorNum[pos]
    } 
    
}

media = soma / tot

/*if(vetorNum.length = 1) {
    res.innerHTML = `<p>Existe somente um valor no vetor, e por isso não é possível calcular a diferença entre o maior e menor valor.`
} else {
sub = maior - menor
res.innerHTML += `<p>A diferença entre o maior e o menor número é ${sub}.`  //teste
}*/

res.innerHTML = ''
res.innerHTML = `O número de elementos no vetor é ${tot}.`
res.innerHTML += `<p>A soma dos elementos do vetor é ${soma}.`
res.innerHTML += `<p>A média dos elementos do vetor é ${media}.`
res.innerHTML += `<p>O menor valor do vetor é ${menor}.`
res.innerHTML += `<p>O maior valor do vetor é ${maior}.`  
res.innerHTML += `<p>O vetor é ${vetorNum}.`  //teste

if(vetorNum.length == 1) { //teste
    res.innerHTML += `<p>Existe somente um valor no vetor, e por isso não é possível calcular a diferença entre o maior e menor valor.`
} else {

sub = maior - menor
res.innerHTML += `<p>A diferença entre o maior e o menor número é ${sub}.`  //teste
}

}
}


