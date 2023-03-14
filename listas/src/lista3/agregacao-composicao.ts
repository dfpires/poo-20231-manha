class Product { // classe Parte
    private name: string
    private price: number
    constructor(name: string, price: number){
        this.name = name; this.price = price
    }
    // setters e getter - fazer como lição de casa
    getPrice(): number{
        return this.price
    }
    // converte um objeto em string
    toString(): string{
        return `Name: ${this.name} Price: ${this.price}`
    }
}

class CarItem{ // classe Todo para a associação com Product
                // classe Parte para a associação com ShoppingCart
    private product: Product// agregação
    private quantity: number 
    constructor(product: Product, quantity: number){
        this.product = product; this.quantity = quantity
    }
    // calcula o preço total
    calculateTotalPrice(): number {
        return this.quantity * this.product.getPrice()
    }
    // converte objeto em string
    toString(): string{
        return `Produto: ${this.product.toString()} Quantity: ${this.quantity}`
    }
}

let obj1Product = new Product("Alexa", 400);
let obj2Product = new Product("Auto-falante JBL", 150);
let obj1CarItem = new CarItem(obj1Product, 2);
console.log(obj1CarItem)
console.log(`Preço total do item ${obj1CarItem.calculateTotalPrice()}`)
let obj2CarItem = new CarItem(obj2Product, 5);
console.log(`Preço total do item ${obj2CarItem.calculateTotalPrice()}`)

class ShoppingCart { // classe Todo
    private id: number
    private carItens: CarItem[]; // composição com vetor
    constructor(id: number){
        this.id = id;
        this.carItens = [] // inicializa vetor com vazio
    }
    addCarItem(item: CarItem){
        this.carItens.push(item); // adiciona 1 item no vetor de carrinho
    }
    // converte objeto em string
    toString(): string {
        let saidaVetor = ""
        for(let i=0;i<this.carItens.length;i++){
            // chama toString() para cada elemento do vetor
            saidaVetor = saidaVetor + "\n " + this.carItens[i].toString()
        }
        return `ID: ${this.id} Itens do carrinho ${saidaVetor}`
    }
}
// vamos criar um carrinho de compra
let obj1ShoppingCart = new ShoppingCart(1)
// vamos adicionar itens no vetor do carrinho de compra
obj1ShoppingCart.addCarItem(obj1CarItem)
obj1ShoppingCart.addCarItem(obj2CarItem)
console.log(obj1ShoppingCart.toString())
