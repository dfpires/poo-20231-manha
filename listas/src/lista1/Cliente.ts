class Cliente {
    public nroConta: number
    public nroAgencia: number
    public nome: string
    public saldo: number

    constructor (nroConta: number, nroAgencia: number, nome: string, saldo: number){
        this.nroConta = nroConta
        this.nroAgencia = nroAgencia
        this.nome = nome
        this.saldo = saldo
    }
    depositar(x: number): void {
        this.saldo += x
    }
    sacar(x: number): void {
        this.saldo -= x
    }
    dadosCliente(): string {
        return `Conta: ${this.nroConta} Nome: ${this.nome} Saldo: ${this.saldo}`
    }
} 

let objCliente1 = new Cliente(123, 456, "Pedro", 1000)
let objCliente2 = new Cliente(321, 654, "Julio", 2000)
objCliente1.depositar(500)
objCliente2.depositar(900)
console.log(objCliente1.dadosCliente())
console.log(objCliente2.dadosCliente())
