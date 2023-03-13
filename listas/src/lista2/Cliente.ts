class ClienteEncapsulado {
    private nroConta: string
    private nroAgencia: string
    private nome: string
    private saldo: number
    constructor(nroConta: string, nroAgencia: string, nome: string, saldo: number){
        this.setNroConta(nroConta) // garante o encapsulamento
        this.setNroAgencia(nroAgencia) // garante o encapsulamento
        this.setNome(nome) // garante o encapsulamento
        this.setSaldo(saldo) // garante o encapsulamento
    }
    setNroConta(nroConta: string): void{
        if ((nroConta.length == 8) && (nroConta.charAt(6) == '-')){
            this.nroConta = nroConta
        }
        else {
            this.nroConta = ""
            console.log('Nro de conta inválido')
        }
    }
    setNroAgencia(nroAgencia: string): void{
        if ((nroAgencia.length == 6) && (nroAgencia.charAt(4) == '-')){
            this.nroAgencia = nroAgencia
        }
        else {
            this.nroAgencia = ""
            console.log('Nro de agência inválido')
        }
    }
    setNome(nome: string): void{
        nome.length <= 30 ? 
            this.nome = nome : (this.nome = "",
                                console.log('Nome muito grande')) 
    }
    setSaldo(saldo: number): void{
        (saldo >= 0) ? 
        this.saldo = saldo : (console.log('Saldo insuficiente'))
    }
    getNroConta(): string{
        return this.nroConta
    }
    getNroAgencia(): string {
        return this.nroAgencia
    }
    getSaldo(): number{
        return this.saldo
    }
    getNome(): string{
        return this.nome
    }
    depositar(x: number): void{
        this.setSaldo(this.saldo + x)
    }
    sacar(x: number): void{
        this.setSaldo(this.saldo - x)
    }
    mostra(): void{
        console.log(`Conta: ${this.nroConta} Agência: ${this.nroAgencia} Nome: ${this.nome} Saldo: ${this.saldo}`)
    }
}
let obj1ClienteEncapsulado = 
    new ClienteEncapsulado("111111-1", "2222-2", "Pedro", 1000)

    obj1ClienteEncapsulado.depositar(500)
    obj1ClienteEncapsulado.sacar(800)
    obj1ClienteEncapsulado.sacar(800)
    console.log(obj1ClienteEncapsulado)
    