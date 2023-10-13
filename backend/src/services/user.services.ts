import {PrismaClient} from '@prisma/client'
import {User} from "../models/user.js";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import * as process from "process";

dotenv.config()
const prisma = new PrismaClient()
export const createUserService = async(input:User)=>{
    console.log({input})
    // Hay que arreglar el problema que resuelve el '!'
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS!))
    input.password = await bcrypt.hash(input.password,salt)
    return prisma.user.create({
        data:input
    })
}
export const createTecnicoService = (input:number)=>{
    return prisma.tecnico.create({
        data:{
            id: input
        }
    })
}
export const findUserByEmail = (email:string) => {
    return prisma.user.findFirstOrThrow({
        where:{
            email
        }
    })
}
export const findUserById = (id:number) => {
    return prisma.user.findFirst({
        where:{
            id
        }
    })
}