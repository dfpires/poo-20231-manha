class Produto {
    public id: number
    public descricao: string
    public qtde: number
    public preco: number
    constructor(id: number, descricao: string, qtde: number, preco: number){
        this.id = id
        this.descricao = descricao
        this.qtde = qtde
        this.preco = preco
    }
    comprar(x: number): void{
        this.qtde += x // aumenta estoque
    }
    vender(x: number): void{
        this.qtde -= x // diminui estoque
    }
    subir(x: number): void{
        this.preco += x
    }
    descer(x: number): void{
        this.preco -= x
    }
    mostra(): string {
        return `ID: ${this.id} Descrição: ${this.descricao} Preço: ${this.preco} Qtde: ${this.qtde}`
    }
}
let objProd1 = new Produto(1, "bolo de chocolate", 3, 82.5)
let objProd2 = new Produto(2, "X Egg Salada", 5, 25.7)
objProd1.vender(2)
objProd2.vender(3)
objProd1.subir(1)
objProd2.subir(2)
console.log(objProd1.mostra())
console.log(objProd2.mostra())
