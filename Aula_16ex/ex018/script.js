let numInsert = window.document.getElementById('numb')
let result = window.document.getElementById('selNumList')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n) { //é um número entre 1 e 100?
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //o número já está na lista?
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addNum() {
    if (isNumero(numInsert.value) && !inLista(numInsert.value, valores)) {
        valores.push(Number(numInsert.value)) //adiciona o número no vetor
        let item = document.createElement('option') //adiciona o número na "janela" do select
        item.text = `Valor ${numInsert.value} adicionado.`
        result.appendChild(item)
        res.innerHTML = '' //ao clicar em finalizar, e após inserir ainda mais números, o resultado abaixo de "Finalizar" desaparece a fim de ser recalculado
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numInsert.value = ' ' //apaga o número já adicionado para deixar a caixa em branco disponível para receber um novo número a ser digitado
    numInsert.focus() //Ao clicar em adicionar, o cursor segue piscando dentro da caixa
}

function fin() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0

        for (let pos in valores) { //laço de percurso
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}