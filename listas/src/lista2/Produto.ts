class ProdutoEncapsulado {
    public id: number
    public descricao: string
    private qtde: number
    private preco: number
    constructor(id: number, descricao: string, qtde: number, preco: number){
        this.id = id
        this.descricao = descricao
        this.setQtde(qtde) // garante encapsulamento
        this.setPreco(preco) // garante encapsulamento
    }
    comprar(x: number): void{
        this.qtde += x // aumenta estoque
    }
    vender(x: number): void{
        this.setQtde(this.qtde - x) // diminui estoque
    }
    subir(x: number): void{
        this.preco += x
    }
    descer(x: number): void{
        this.setPreco(this.preco - x)
    }
    mostra(): string {
        return `ID: ${this.id} Descrição: ${this.descricao} Preço: ${this.preco} Qtde: ${this.qtde}`
    }
    setQtde(qtde: number): void{
        if (qtde >= 0 ){
            this.qtde = qtde
        }
        else {
            this.qtde = 0
            console.log('Valor de qtde não pode ser negativo')
        }
    }
    setPreco(preco: number): void{
        if (preco >= 0){
            this.preco = preco
        }
        else {
            this.preco = 0
            console.log('Valor de preço não pode ser negativo')
        }
    }
    getQtde(): number{
        return this.qtde
    }
    getPreco(): number{
        return this.preco
    }
}
let obj1ProdutoEncapsulado = new ProdutoEncapsulado(1, "bolo de chocolate", -3, -82.5)
let obj2ProdutoEncapsulado = new ProdutoEncapsulado(2, "X Egg Salada", 5, 25.7)
obj1ProdutoEncapsulado.setQtde(-7)
obj2ProdutoEncapsulado.setPreco(-84)
obj1ProdutoEncapsulado.vender(2)
obj2ProdutoEncapsulado.vender(3)
obj1ProdutoEncapsulado.subir(1)
obj2ProdutoEncapsulado.subir(2)
console.log(obj1ProdutoEncapsulado.mostra())
console.log(obj2ProdutoEncapsulado.mostra())
console.log(`Qtde: ${obj1ProdutoEncapsulado.getQtde()}`)
console.log(`Preç: ${obj2ProdutoEncapsulado.getPreco()}`)
