import { CellPhone } from "./CellPhone";

export class Client {
    private id: number
    private name: string
    private cpf: string
    private cellPhones: CellPhone[] // composição
    constructor( id: number,  name: string,  cpf: string){
        this.setId(id); this.name = name; this.cpf = cpf
        this.cellPhones = [] // aloca espaço no vetor de celulares
    }
    
    addCellPhone(cellPhone: CellPhone): void{
        this.cellPhones.push(cellPhone)
    }

    setId(id: number){
        if (id>=0){
            this.id = id
        }
    }
    getId(): number{
        return this.id
    }
    getCpf(): string {
        return this.cpf
    }
    toString(): string{
        return `{id: ${this.id}, Name: ${this.name}, CPF: ${this.cpf}, CellPhones: ${this.cellPhones}}`
    }
}

let objClient = new Client(-1, 'Pedro', '123-x' )