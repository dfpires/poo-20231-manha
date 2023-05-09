async function consulta(){
    let produtos = await fetch('http://localhost:3333/products')
        .then(resposta => {
            return resposta.json()
        })
    let conteudo = ""
    produtos.forEach(produto => {
        conteudo += `<tr> <td> ${produto.name} </td> <td> ${produto.description} </td> <td> ${produto.quantity} </td> <td> ${produto.created_at}</td> </tr>`
    })
    // envia os dados para o HTML
    document.getElementById("tabela").innerHTML = conteudo
}

async function cadastra(){
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let quantity = Number(document.getElementById("quantity").value)

    let produto = {name, description, quantity}

    await fetch('http://localhost:3333/product', { // cadastra no BD
        method: 'POST',
        body: JSON.stringify(produto), // converte objeto JSON em string
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(resposta => alert('Inserção realizada com sucesso'))
    .catch(erro => alert('Problema na inserção'))
    // chama a função consulta
    consulta()
}