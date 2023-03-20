export class Client {
    private id: number
    private name: string
    private cpf: string
    constructor( id: number,  name: string,  cpf: string){
        this.setId(id); this.name = name; this.cpf = cpf
    }
    setId(id: number){
        if (id>=0){
            this.id = id
        }
    }
    getId(): number{
        return this.id
    }
    toString(): string{
        return `{id: ${this.id}, Name: ${this.name}, CPF: ${this.cpf}}`
    }
}

let objClient = new Client(-1, 'Pedro', '123-x' )