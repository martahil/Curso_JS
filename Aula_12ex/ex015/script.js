//window.alert(`Olá!`)
function verificar(){
    var data = new Date() //pega a data atual
    var ano = data.getFullYear() //pega o ano atual //"full year" tem 4 dígitos
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       //res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       img.style.padding = '20px'
       if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'menino.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'adolescento.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
       }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
                
                img.setAttribute('src', 'menina.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'adolescenta.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
       }
       res.style.textAlign = 'center'
       
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       
       res.appendChild(img)
       //res.style.padding = '100px'
    }
}