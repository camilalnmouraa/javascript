
// Arrays //

//var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
//console.log(gaveteiro[0])

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.push('C3pO')
personagens.push('R2D2')
personagens.pop()

personagens = personagens.filter(function(p) {
    return p !== 'Darth Vader'
})

personagens = personagens.filter(function(p) {
    return p === 'Mestre Yoda'
})

console.log(personagens)