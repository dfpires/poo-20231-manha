class AlunoAula {
    public nroAluno: number
    public nome: string
    public idade: number
    public p1: number
    public p2: number

    constructor (nroAluno: number, nome: string, idade: number, p1: number, p2: number){
        this.nroAluno = nroAluno
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }

    notaFinal(): number { // retorna a média
        return (this.p1 + this.p2) / 2
    }
    passou(): void {
        (this.notaFinal() >= 6) ? console.log('Aluno passou') : console.log('Aluno não passou')
    }
    dadosAluno(): string{
        return (`Nro: ${this.nroAluno} Nome: ${this.nome} Idade: ${this.idade} Nota final: ${this.notaFinal()}`)
    }
}

let objAlunoAula = new AlunoAula(123, "Pedro", 18, 7.5, 6.3)
console.log(objAlunoAula.dadosAluno())
objAlunoAula.passou()