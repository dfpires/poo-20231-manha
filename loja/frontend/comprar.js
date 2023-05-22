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

async function comprar(){
    // recupera os dados do formulário
    const id = document.getElementById("produto").value // recupera o id do produto
    const x = Number(document.getElementById("quantity").value)
    // cria objeto para enviar
    const objeto = {id, x}
    // consumir a API
    const resultado = await fetch('http://localhost:3333/product/compra', {
        method: 'PATCH',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    .then(resp => {
        // alert(resultado.status) ou resultado.data.status
        alert('Compra realizada com sucesso')
    })
    .catch(error => {
        // alert(resultado.status) ou resultado.data.status
        alert('Problema na compra')
    })
}