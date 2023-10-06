const banco = {
    conta: 123456,
    saldo: 100,
    tipoDeConta:"corrente",
    agencia: 111,
   buscarSaldo (){
    return this.saldo 
    },
    fazerDeposito(deposito){
        return this.saldo += deposito
    },
    fazerSaque(saque){
        return this.saldo -= saque
    },
    buscarNUmeroConta(){
        return this.conta
    }
}

console.log(banco.fazerDeposito(50))
console.log(banco.fazerSaque(20))
console.log(banco.buscarNUmeroConta())
console.log(banco.buscarSaldo())