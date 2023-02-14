class Carro {
    // declaração das variáveis
    modelo: string; // tipo string 
    velocidade: number; // tipo número
    motor: boolean // tipo booleano
    // declaração e codificação dos métodos
    // ligar o carro
    ligar(){
        // this representa o objeto que chama o método
        this.motor = true
    }
    // desligar o carro
    desligar(){
        this.motor = false
    }
    // acelerar o carro em x unidades
    acelerar(x: number){
        this.velocidade = this.velocidade + x
    }
    // frear
    frear(x: number){
        this.velocidade = this.velocidade - x
    }
}
// cria os objetos - instanciar a classe
let obj1 = new Carro()
obj1.modelo = "Onix"
obj1.velocidade = 0
obj1.motor = false
console.log(obj1)

let obj2 = new Carro()
obj2.modelo = "Gol"
obj2.velocidade = 80
obj2.motor = true
console.log(obj2)

// vamos ligar o motor de obj1
obj1.ligar()
// vamos acelerar o obj1 em 40
obj1.acelerar(40)
console.log(obj1)

obj2.desligar();
obj2.frear(obj2.velocidade);
console.log(obj2)