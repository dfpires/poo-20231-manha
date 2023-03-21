export class CellPhone {
    private id: number
    private nro: number
    private company: string

    constructor( id: number, nro: number, company: string){
        this.id = id; this.nro = nro; this.company = company;
    }

    toString(): string {
        return `{Id: ${this.id}, Number: ${this.nro}, Company: ${this.company}}`
    }
}