import express, {Request, Response} from "express";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
const routes = express.Router()

routes.get('/api/users', async (req:Request,res:Response)=>{
    const result = await prisma.user.create({
        data:{
            name: 'esteban',
            lastName: 'bellini',
            email: 'estebannahuel29989@live.com',
            userType: 'cliente'
        }
    })
    console.log(result)
    res.json(result)
})

export default routes