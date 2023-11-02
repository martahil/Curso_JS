//window.alert(`Olá!`)
function verificar(){
    var data = new Date() //pega a data atual
    var ano = data.getFullYear() //pega o ano atual //"full year" tem 4 dígitos
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
       // var fsex = 
    }
}