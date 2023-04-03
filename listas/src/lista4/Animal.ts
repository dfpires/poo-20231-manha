export class Animal {
    protected name: string
    constructor (name: string){
        this.setName(name)
    }
    // setter e getters como lição de casa
    setName(name: string) {
        this.name = name
    }
    toString(): string{
        return `Name: ${this.name}`
    }
    move(): string{
        return 'Animal se deslocando'
    }
}