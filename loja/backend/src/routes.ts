
import {prisma} from './lib/prisma'
// importa a dependência zod
import {z} from 'zod'
// importa a dependência dayjs
import dayjs from 'dayjs'
import { FastifyInstance } from 'fastify'

export async function AppRoutes(app: FastifyInstance) {
    
    // definir uma rota chamada hello - verbo é GET, uma consulta
    app.get('/hello', () => {
        return 'Hello World'
    })

    // define uma rota que consulta todos os produtos cadastrados no banco de dados
    app.get('/products', async () => {
        const products = await prisma.product.findMany()
        return products
    })
    // define uma rota que consulta os produtos no banco de dados que iniciam com o nome X
    app.get('/productByName/:name', async (request) => {
        // recupera o name informado pelo frontend
        const nameParam = z.object({
            name: z.string()
        })
        const {name} =nameParam.parse(request.params)

        const products = await prisma.product.findMany({
            where: {
                name: {
                    startsWith: name
                }
            }
        })
        return products
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
        let newProduct = await prisma.product.create({
            data: {
                name,
                description,
                quantity,
                created_at: today
            }
        })
        return newProduct
    })

    // rota pra atualizar a quantidade em estoque - compra
    app.patch('/product/compra', async (request) => {
        const compraBody = z.object({
            id: z.string().uuid(),
            x: z.number()
        })
        const {id, x} = compraBody.parse(request.body)

        let productUpdated = await prisma.product.update({
            where: {
                id: id
            },
            data: {
                quantity: {
                    increment: x
                }
            }
        })
        return productUpdated
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
            let productUpdated = await prisma.product.findUnique({
                where: {
                    id: id
                }
            })
            let response = {
                status: 'Venda com sucesso',
                product: productUpdated
            }
            return response
        }
        else {
            return 'Venda não realizada, estoque insuficiente'
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
        let productDeleted = await prisma.product.delete({
            where: {
                id: id
            }
        })
        return productDeleted
    })
}