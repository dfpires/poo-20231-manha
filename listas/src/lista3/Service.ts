export class Service {
    private id: number
    private name: string
    private price: number
    constructor( id: number,  name: string,  price: number){
        this.id = id; this.name = name; this.price = price
        // chamar os setters aqui
    }
    getPrice(): number{
        return this.price
    }
    // criar os setter e getters
    toString(): string{
        return `{Id: ${this.id}, Name: ${this.name}, Price: ${this.price}}`
    }

}