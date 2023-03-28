import { Animal } from "./Animal";

export class Snake extends Animal {
    private poisonous: boolean
    constructor(name: string, poisonous: boolean){
        // reutilização de código
        super(name) // chama construtor da superclasse
        this.poisonous = poisonous
    }
    // herdamos toString(), mas ele não é suficiente
    // vamos anular o método toString() herdado
    toString(): string {
        return `${super.toString()} Poisonous: ${this.poisonous}`
    }
    // herdamos move(), mas não o queremos
    // vamos anular o método move()
    move(): string {
        return `snake crawling`
    }
}