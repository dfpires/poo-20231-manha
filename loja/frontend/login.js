async function entrar(){
    // recupera dados do form
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const corpo = {username, password}
    let resposta = await fetch(`http://localhost:3333/user/verifica`, {
        method: 'POST',
        body: JSON.stringify(corpo),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    .then(resp => {
            return resp.json()
    })
    .catch(error => {
            alert(`Erro na execução ${error}`)
            exit(0) 
    })
    if (resposta == null){
        alert('Usuário/Senha não existem')
    }
    else {
        // guarda no cookie uma variável chamada id contendo o id do usuário
        document.cookie = `id=${resposta.id}`
        // vai direcionar o usuário para a tela principal do sistema
        // vamos usar a extensão live server
        window.open(`http://127.0.0.1:5500/frontend/index.html`);   
    }
   
}