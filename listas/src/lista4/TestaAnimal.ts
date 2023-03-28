import { Animal } from "./Animal";
import { Horse } from "./Horse";
import { Snake } from "./Snake";

function exemploPolimorfismo(cameleao: Animal): void{
    // se a função for chamada passando uma cobra, camaleao vai representar uma cobra
    // e portanto, será executado o toString() e o move() da cobra
    // se a função for chamada passando um cavalo, camaleao vai representar um cavalo
    // e portanto, será executado o toString() e o move() do cavalo
    console.log(cameleao.toString()) // polimorfismo
    console.log(cameleao.move()) // polimorfismo
}
// vamos instanciar os objetos
let objSnake = new Snake('Cobra má', true)

let objHorse = new Horse('Cavalo legal', true)

//console.log(objSnake.toString())
//console.log(objSnake.move())

//console.log(objHorse.toString())
//console.log(objHorse.move())

exemploPolimorfismo(objSnake)
exemploPolimorfismo(objHorse)