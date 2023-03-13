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

}
class CarItem{ // classe Todo
    private product: Product// agregação
    private quantity: number 
    constructor(product: Product, quantity: number){
        this.product = product; this.quantity = quantity
    }
    // calcula o preço total
    calculateTotalPrice(): number {
        return this.quantity * this.product.getPrice()
    }
}