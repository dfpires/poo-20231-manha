import { Client } from './Client'
import { Service } from './Service'
import { Employee } from './Employee'

class Attendance{
    private id: number
    private date: Date
    private client: Client // agregação
    private service: Service // agregação
    private employee: Employee // agregação
    
    constructor( id: number, date: Date, client: Client, service: Service, employee: Employee){
        this.id = id; this.date = date; this.setClient(client); this.service = service; this.employee = employee
    }
    setClient(client: Client) {
        this.client = client
    }
    getClient(): Client {
        return this.client
    }
    toString(): string{
        return `{Id: ${this.id}, Date: ${this.date} Client: ${this.client} Employee ${this.employee}, Service: ${this.service}}`
    }
}
let obj1Client = new Client(1, 'Pedro', '123-x')
let obj2Client = new Client(2, 'João', '456-7')

let obj1Employee = new Employee(1, 500, 'Bruno')
let obj2Employee = new Employee(2, 600, 'Carlos')

let obj1Service = new Service(1, 'Escova', 100)
let obj2Service = new Service(2, 'Corte', 60)

let obj1Attendance = new Attendance(1, new Date(), obj1Client, obj1Service, obj1Employee)
console.log(obj1Attendance.toString())
// mostre apenas o preço do serviço de obj1Attendance

let obj2Attendance = new Attendance(1, new Date(), obj2Client, obj2Service, obj2Employee)
console.log(obj2Attendance.toString())
// mostre apenas o nome do empregado de obj2Attendance
// mostre apenas o cpf do cliente de obj2Attendance