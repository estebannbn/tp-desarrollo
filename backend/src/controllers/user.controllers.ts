import bcrypt from "bcryptjs";
import {Request, Response} from "express";
import {CreateUserInput} from '../schema/user.schema.js'
import {createTecnicoService, createUserService, findUserByEmail} from "../services/user.services.js";
import {CreateSessionInput} from "../schema/create.session.js";

// Registramos un nuevo usuario
export const createUserController = async(req:Request<{},{},CreateUserInput>,res:Response)=>{
    const input = req.body

    // eliminamos la propiedad passwordConfirm para no guardarla en la base de datos
    // esta propiedad es solo necesaria para la validacion
    delete input.passwordConfirmation
    try {
        const user = await createUserService(input)
        const idReference = user.id
        if (user.userType==='tecnico'){
            const tecnico = await createTecnicoService(idReference)
            return res.status(201).json({tecnico})
        }
        return res.status(201).json({user})
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
            return res.status(200).json({user})
        }else{
            return res.status(400).json({
                message: 'user not found'
            })
        }
    }catch(error){
        return res.status(500).json(error)
    }
}