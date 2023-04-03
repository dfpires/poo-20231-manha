import { Funcionario } from "./Funcionario";
export class Diretor extends Funcionario{
    private acoes: number
    constructor(nome: string, endereco: string, cpf: string, salario: number, acoes: number){
        super(nome, endereco, cpf, salario) // reutilização
        this.acoes = acoes
    }
    // getter e setter das ações
    // calcula salário do Diretor
    calculaSalario(): number {
        let valorAcao = 10
        let percReceber = 10
        return this.salario + ((valorAcao * this.acoes)*percReceber/100)
    }
    // converte diretor para um string
    toString(): string {
        return `Diretor: ${super.toString()} Ações ${this.acoes}`
    }
}