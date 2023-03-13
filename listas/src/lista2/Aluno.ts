class AlunoEncapsulado {
    private nroAluno: number
    private nome: string
    private idade: number; private p1: number; private p2: number
    constructor(nroAluno: number, nome: string, idade: number, p1: number, p2: number){
        this.setNroAluno(nroAluno); this.setNome(nome); this.setIdade(idade);
        this.setP1(p1); this.setP2(p2);
    }
    setNome(nome: string): void{
        if (nome.length <= 30){
            this.nome = nome
        }
        else {
            this.nome = "Não definido"
            console.log('Nome inválido')
        }
    }
    setIdade(idade: number): void{
        (idade >= 0) ? (this.idade = idade) : (this.idade = 0 , console.log('Idade inválida'))
    }
    setP1(p1: number): void{
        (p1 >= 0) ? (this.p1 = p1) : (this.p1 = 0 , console.log('Nota 1 inválida'))
    }
    setP2(p2: number): void{
        (p2 >= 0) ? (this.p2 = p2) : (this.p2 = 0 , console.log('Nota 2 inválida'))
    }
    setNroAluno(nroAluno: number){
        // converte nroAluno para string
        // aux é uma variável local ao método
        let aux = nroAluno.toString()
        if (aux.length == 6){
            this.nroAluno = nroAluno
        }
        else {
            console.log('Nro do aluno é inválido')
            this.nroAluno = 0
        }
    }
    getNroAluno(): number{
        return this.nroAluno
    }
    getNome(): string{
        return this.nome
    }
    getIdade(): number{
        return this.idade
    }
    getP1(): number{
        return this.p1
    }
    getP2(): number{
        return this.p2
    }
    notaFinal(): void{
        console.log(`A nota final é ${(this.p1 + this.p2) / 2}`)
    }
    dadosAluno(): void{
        console.log(`Nro. ${this.nroAluno} Nome ${this.nome} Idade ${this.idade} P1 ${this.p1} P2 ${this.p2}`)
    }
}

let obj1Aluno = new AlunoEncapsulado(123, "João", -12, -3, -5)
console.log(obj1Aluno)
console.log(`Valor do nroAluno de obj1 ${obj1Aluno.getNroAluno()}`)