// importa a classe Fastify da dependência fastify
import Fastify from 'fastify'
// importa o prisma
import { PrismaClient } from '@prisma/client'
// importa a dependência zod
import {z} from 'zod'
// importa a dependência dayjs
import dayjs from 'dayjs'

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
// define uma rota que consulta os produtos no banco de dados que iniciam com o nome X
app.get('/productByName/:name', async (request) => {
    // recupera o name informado pelo frontend
    const nameParam = z.object({
        name: z.string()
    })
    const {name} =nameParam.parse(request.params)

    const habits = await prisma.product.findMany({
        where: {
            name: {
                startsWith: name
            }
        }
    })
    return habits
})

// define uma rota que cria um produto no banco de dados, usando o verbo post
app.post('/product', async (request) => {
    // recupera os dados do corpo da requisição
    const createProductBody = z.object({
        name: z.string(),
        description: z.string(),
        quantity: z.number()
    })
    const {name, description, quantity} = createProductBody.parse(request.body)
    // insere o produto no banco de dados
    // recupera a data atual - de hoje
    const today = dayjs().startOf('day').toDate() // sem hora, minuto e segundo
    await prisma.product.create({
        data: {
            name,
            description,
            quantity,
            created_at: today
        }
    })
})

// rota pra atualizar a quantidade em estoque - compra
app.patch('/product/compra', async (request) => {
    const compraBody = z.object({
        id: z.string().uuid(),
        x: z.number()
    })
    const {id, x} = compraBody.parse(request.body)

    await prisma.product.update({
        where: {
            id: id
        },
        data: {
            quantity: {
                increment: x
            }
        }
    })
})

// rota pra atualizar a quantidade em estoque - venda
app.patch('/product/venda', async (request) => {
    const vendaBody = z.object({
        id: z.string().uuid(),
        x: z.number()
    })
    const {id, x} = vendaBody.parse(request.body)

    let resp = await prisma.product.updateMany({
        where: {
            id: id,
            quantity: {
                gte: x
            }
        },
        data: {
            quantity: {
                decrement: x
            }
        }
    })
  //  return resp.count
    if ((resp.count) > 0){
        return 'Venda com sucesso'
    }
    else {
        return 'Venda não realizada'
    }
})


// rota para remover um produto, usando o verbo delete
app.delete('/product/:id', async (request) => {
    // recupera o id para remoção
    const idParam = z.object({
        id: z.string().uuid()
    })
    const {id} = idParam.parse(request.params)
    // remove o produto
    await prisma.product.delete({
        where: {
            id: id
        }
    })
})



// vamos subir o servidor, vamos executá-lo, ele ficará ouvindo
// e aguardando as requisições
app.listen({
    port: 3333
})
.then(() => {
    console.log('HTTP server running and listening requests')
})