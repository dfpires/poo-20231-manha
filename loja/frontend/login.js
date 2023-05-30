async function entrar(){
    // recupera dados do form
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const corpo = {username, password}
    await fetch('http://localhost/user/verifica', {
        method: 'POST',
        body: JSON.stringify(corpo),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8' 
        }
    })
    .then(resp => {
        if (resp == null){
            alert('usuário/senha não conferem')
        }
        else {
            alert('OK')
        }
    })
    .catch(error => {
            alert(`Erro na execução ${error}`)
            return 
    })
    
   
}