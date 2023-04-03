import { Funcionario } from "./Funcionario";
export class Assistente extends Funcionario{
    private horaExtra: number
    constructor(nome: string, endereco: string, cpf: string, salario: number, horaExtra: number){
        super(nome, endereco, cpf, salario) // reutilização
        this.horaExtra = horaExtra
    }
    // getter e setter somente da horaExtra
    getHoraExtra(): number{
        return this.horaExtra
    }
    setHoraExtra(horaExtra: number): void{
        this.horaExtra = horaExtra
    }
    // calcula salário do Assistente - anulação de método
    calculaSalario(): number {
        let aux = 20
        return this.salario + (aux * this.horaExtra)
    }
    toString(): string{
        return `Assistente: ${super.toString()} Hora-Extra ${this.horaExtra} `
    }
}

