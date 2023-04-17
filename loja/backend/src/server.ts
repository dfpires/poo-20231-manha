// importa a classe Fastify da dependência fastify
import Fastify from 'fastify'
// instanciar o objeto da classe Fastify
const app = Fastify()
// definir uma rota chamada hello - verbo é GET, uma consulta
app.get('/hello', () => {
    return 'Hello World'
})

// vamos subir o servidor, vamos executá-lo, ele ficará ouvindo
// e aguardando as requisições
app.listen({
    port: 3333
})
.then(() => {
    console.log('HTTP server running and listening requests')
})