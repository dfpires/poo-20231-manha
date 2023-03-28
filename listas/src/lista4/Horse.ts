import { Animal } from "./Animal";

export class Horse extends Animal {
    private competitor: boolean

    constructor(name: string, competitor: boolean){
        super(name) // chama construtor do pai
        this.competitor = competitor
    }
    // anulação de método herdado do pai
    toString(): string { // não te quero, mas não te largo
        // super.toString() chama toString() do pai
        return `${super.toString()} Competitor: ${this.competitor ? 'Yes': 'No'}`
    }
    // anulação de método herdado do pai
    move(): string {
        return `horse trotting` 
    }
}