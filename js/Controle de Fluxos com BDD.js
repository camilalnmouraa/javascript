
// Controle de Fuxos //

// Sendo um Cliente Correntista do Banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam cartão de crédito ou débito

var saldo = 1000

function saque(valor) {
    saldo = saldo - valor
}

saque(500)
console.log(saldo)

// Cenario 1: Saque com Sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

var saldo = 1000

function saque(valor) {

    if (valor > saldo) {
        console.log('Valor do saque superior ao saldo.')
    } else {
        saldo = saldo - valor
    }
    
}

saque(1001)
console.log(saldo)

//Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

var saldo = 1000

function saque(valor) {

    if (valor > saldo) {
        console.log('Valor do saque superior ao saldo.')
    } else if (valor > 700) {
        console.log('Valor do saque é superior ao máximo permitido por operação!')

    } else {
        saldo = saldo - valor
    }
    
}

saque(701)
console.log(saldo)


//Cenario 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque um valor de 7001 reais
// Então não deve deduzir do meu saldo
// E deve  mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

