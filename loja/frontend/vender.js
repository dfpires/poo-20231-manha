async function montarSelect(){
    const produtos = await fetch('http://localhost:3333/products')
        .then(resposta => {
           return resposta.json()
        })
        .catch(error => {
            alert('Não carregou os produtos')
        })
     // alimenta o select
     let conteudoSelect = '' 
     produtos.forEach( prod => {
        conteudoSelect += `<option value='${prod.id}'> ${prod.name} </option>`
     })
     document.getElementById("produto").innerHTML = conteudoSelect
}

async function vender(){
    // recupera os dados do formulário
    const id = document.getElementById("produto").value // recupera o id do produto
    const x = Number(document.getElementById("quantity").value)
    // cria objeto para enviar
    const objeto = {id, x}
    // consumir a API
    const resultado = await fetch('http://localhost:3333/product/venda', {
        method: 'PATCH',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    .then(resposta => {
        return resposta.json()
    })
    .catch(error => {
        // alert(resultado.status) ou resultado.data.status
        alert('Erro na venda')
    })
    alert(resultado.estado)
}

async function consultaQtde(){
    // recupera o produto selecionado
    const idProduto = document.getElementById("produto").value
    const produto = await fetch(`http://localhost:3333/productById/${idProduto}`)
        .then( (resposta) => {
            return resposta.json()
        })
    // jogo conteúdo no HTML
    document.getElementById("disponivel").innerHTML = produto.quantity
}