import {PrismaClient} from '@prisma/client'
import User from "../models/user.js";
const prisma = new PrismaClient()


export const createUserService = (input:User)=>{
    console.log({input})

    return prisma.user.create({
        data:input
    })
}