function contar(){
    //alert('Deu certo!')
    
    let numInicio = window.document.getElementById('num_inicio')
    let numFim = window.document.getElementById('num_fim')
    let numPasso = window.document.getElementById('num_passo')

    let res = document.getElementById('res')


if(numInicio.value.length == 0 || numFim.value.length == 0 || numPasso.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    //window.alert('[ERRO] Faltam dados!')
    
 } else{
    res.innerHTML = 'Contando: <br> ' //<br> quebra a linha
    var n1 = Number(numInicio.value)
    var n2 = Number(numFim.value)
    var n3 = Number(numPasso.value)

    if(n3 <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        n3 = 1
    }


    if (n1 < n2){
    //contagem crescente
    for (let n = n1; n <= n2; n += n3)
   {
        res.innerHTML += ` ${n} \u{1F449}`
        //Google: unicode emoji list  //o código vem assim: U+1F449 //deve ficar assim: u{1F449}
   } 
   
    } else {
        //contagem decrescente
        for(let n = n1; n >= n2; n -= n3)
        res.innerHTML += ` ${n} \u{1F449}`

    }
    res.innerHTML += `\u{1F3C1}`
    }
    
 }



   