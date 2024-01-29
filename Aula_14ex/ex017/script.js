
// ### Minha solução (sem considerear inserir os resultados em um "select"): ###
function gerarTabuada() {

    let numTab = window.document.getElementById('num')
    var n1 = Number(numTab.value)
    let res = document.getElementById('res')
    res.innerHTML = 'O resultado é: <br> <br>  '
    let tab = window.document.getElementById('seltab')

    if (numTab.value.length == 0) {
        res.innerHTML = '[ERRO] Favor inserir um valor!'
    } else {
        for (let i = 1; i <= 10; i++) {
            tab = i * n1
            res.innerHTML += `${n1} x ${i} = ${tab} <br>`
        }
    }
}

// ### Solução do curso: ### 
// function gerarTabuada() {
//     let num = document.getElementById('txtn')
//     let tab = document.getElementById('seltab')
//     if (num.value.length == 0) {
//         window.alert('Por favor digite um número')
//         //res.innerHTML = '[ERRO] Favor inserir um valor!'
//     } else {
//         let n = Number(num.value)
//         let c = 1
//         tab.innerHTML = ' '
//         while (c <= 10) {
//             let item = document.createElement('option')
//             item.text = `${n} x ${c} = ${n * c}`
//             item.value = `tab${c}` // os options precisam ter values quando for usar PHP, e assim consegue-se saber qual foi o item que foi selecionado
//             tab.appendChild(item)
//             c++
//         }
//     }
// }