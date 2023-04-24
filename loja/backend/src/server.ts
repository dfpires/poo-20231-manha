// importa a classe Fastify da dependência fastify
import Fastify from 'fastify'
// importa o prisma
import { PrismaClient } from '@prisma/client'

// instanciar o objeto da classe Fastify
const app = Fastify()

// instanciar o objeto da classe PrimaClient
const prisma = new PrismaClient()

// definir uma rota chamada hello - verbo é GET, uma consulta
app.get('/hello', () => {
    return 'Hello World'
})

// define uma rota que consulta todos os produtos cadastrados no banco de dados
app.get('/products', async () => {
    const habits = await prisma.product.findMany()
    return habits
})

app.get('/productByName', async () => {
    const habits = await prisma.product.findMany({
        where: {
            name: {
                startsWith: 'X'
            }
        }
    })
    return habits
})

// vamos subir o servidor, vamos executá-lo, ele ficará ouvindo
// e aguardando as requisições
app.listen({
    port: 3333
})
.then(() => {
    console.log('HTTP server running and listening requests')
})