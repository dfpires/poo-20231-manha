class Rio {
    public nome: string
    public nivel: number
    public poluido: boolean
    constructor(nome: string, nivel: number, poluido: boolean){
        this.nome = nome ; this.nivel = nivel; this.poluido = poluido
    }
    chover(x: number): void{
        this.nivel += x
    }
    ensolarar(x: number): void{
        this.nivel -= x
    }
    limpar(): void {
        this.poluido = false
    }
    sujar(): void {
        this.poluido = true
    }
    mostra(): string{
        return `Nome: ${this.nome} Nível: ${this.nivel} Poluído: ${this.poluido? 'Sim': 'Não'}`
    }
}