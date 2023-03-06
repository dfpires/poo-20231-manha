class Pessoa{
	private nome: string
	private idade: number
	private estaVivo: boolean

  constructor(nome: string, idade: number, estaVivo: boolean){
    this.nome = nome
    this.idade = idade
    this.estaVivo = estaVivo
  }

    setNome(nome: string){
    this.nome = nome;
  }

  getNome(): string{
    return this.nome;
  }
}

let pessoa = new Pessoa("carlos", 20, true);
pessoa.setNome('TW');
console.log(pessoa.getNome());