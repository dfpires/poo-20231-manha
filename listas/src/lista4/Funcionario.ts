export class Funcionario {
    protected nome: string; protected endereco: string;
    protected cpf: string; protected salario: number
    constructor(nome: string, endereco: string, cpf: string, salario: number){
        this.nome = nome; this.endereco = endereco;
        this.cpf = cpf; this.salario = salario;
    }
    // getters e setters
    // calcula salário do funcionária
    calculaSalario(): number{
        return this.salario
    }
    // converte funcionário para string
    toString(): string{
        return `{Nome: ${this.nome} Endereço: ${this.endereco} Cpf: ${this.cpf} Salário: ${this.salario}}`
    }
}