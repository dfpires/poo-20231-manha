import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
    private bonus: number;
    constructor(nome: string, endereco: string, cpf: string, salario: number, bonus: number){
        super(nome, endereco, cpf, salario) // reutilização
        this.bonus = bonus
    }
    // getter e setter do bônus
    // calcula salário do gerente
    calculaSalario(): number {
        return this.salario + this.bonus
    }
    // converte gerente em string
    toString(): string {
        return `Gerente: ${super.toString()} Bônus ${this.bonus}`
    }
}