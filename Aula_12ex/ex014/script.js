function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        //bomdiatardenoite.innerHTML = `Bom dia.`
        img.src = 'photomanha.png'
        document.body.style.background = '#FCE15D'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        //bomdiatardenoite.innerHTML = `Boa tarde.`
        img.src = 'phototarde.png'
        document.body.style.background = '#F5891A'
    } else {
        //BOA NOITE!
        //bomdiatardenoite.innerHTML = `Boa noite.`
        img.src = 'photonoite.png'
        document.body.style.background = '#3E6168'
    }
}