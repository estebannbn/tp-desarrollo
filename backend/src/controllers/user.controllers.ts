import bcrypt from "bcryptjs";

import {Request, Response} from "express";
import {CreateUserInput} from '../schema/user.schema.js'
import {createTecnicoService, createUserService, findUserByEmail, findUserById} from "../services/user.services.js";
import {CreateSessionInput} from "../schema/create.session.js";
import {generateToken} from "../utils/jwt.js";


const headerForToken = 'auth-token'

// Registramos un nuevo usuario
export const createUserController = async(req:Request<{},{},CreateUserInput>,res:Response)=>{
    const input = req.body

    // eliminamos la propiedad passwordConfirm para no guardarla en la base de datos
    // esta propiedad es solo necesaria para la validacion
    delete input.passwordConfirmation
    try {
        const user = await createUserService(input)
        const token = generateToken(user.id)
        if (user.userType==='tecnico'){
            const tecnico = await createTecnicoService(user.id)
            return res.status(201).json({
                tecnico,
                token
            })
        }
        return res.status(201).header(headerForToken,token).json({
            user
        })
    }catch (error) {
        return res.status(500).json({error})
    }
}
export const createSessionController = async(req:Request<{},{},CreateSessionInput>, res:Response)=>{
    try{
        const {email, password} = req.body
        const user = await findUserByEmail(email)
        const passwordCorrect = user===null ? false : await bcrypt.compare(password, user.password)
        if(user && passwordCorrect){
            const token = generateToken(user.id)
            return res.header(headerForToken,token).status(200).json({user})
        }else{
            return res.status(400).json({
                message: 'user not found'
            })
        }
    }catch(error){
        return res.status(500).json(error)
    }
}
export const profileController = async(req:Request, res:Response)=>{
    try {
        const id = req.userId
        const user = await findUserById(id)
        if(user) return res.json({user})
        return res.status(400).json({error:'not user found'})
    }catch (error){
        return res.status(500).json({error:'internal server error'})
    }
}
export const testController = async (req:Request,res:Response)=>{
    res.send('hola')
}