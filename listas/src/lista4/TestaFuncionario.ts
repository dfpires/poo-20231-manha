import { Assistente } from "./Assistente";
import { Diretor } from "./Diretor";
import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";

function mostraDados(obj: Funcionario){
    // polimorfismo
    console.log(obj.toString())
    // polimorfismo
    console.log(` Salário total recebido ${obj.calculaSalario()}`)
}

let objAssistente = new Assistente("Carlos", "Franca", "123", 3000, 4)
mostraDados(objAssistente)
let objGerente = new Gerente("Paulo", "Franca", "456", 4000, 1000)
mostraDados(objGerente)
let objDiretor = new Diretor("João", "Cristais", "987", 6000, 1000)
mostraDados(objDiretor)