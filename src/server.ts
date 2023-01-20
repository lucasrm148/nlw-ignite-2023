import fastify from "fastify"
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.register(cors,{
    origin: ['http://localhost:3000'] // apenas o local host 3000 pode usar acessar o back and 
})

app.get('/',async ()=>{
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'beber'
            }
        }
    })
    return habits
})

app.listen({
    port:3333
}).then(()=>{
    console.log('HTTP server running !')
})
