let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}
}

//console.log(typeof amigo)

/*let amigo02 = []
console.log(typeof amigo02)*/

//console.log(amigo)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)