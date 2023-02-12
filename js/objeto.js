
// Objetos (Suer Variáveis) //

var yoda =  {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostraIdade: function() {
        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    }
}

console.log(yoda)
yoda.mostraIdade()