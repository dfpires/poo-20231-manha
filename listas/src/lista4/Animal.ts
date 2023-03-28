export class Animal {
    protected name: string
    constructor (name: string){
        this.name = name
    }
    // setter e getters como lição de casa
    toString(): string{
        return `Name: ${this.name}`
    }
    move(): string{
        return 'Animal se deslocando'
    }
}