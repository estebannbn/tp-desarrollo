import {Request, Response} from "express";
import {CreateUserInput} from '../schema/user.schema.js'
import {createTecnicoService, createUserService} from "../services/user.services.js";

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
        console.log('Error creating user')
        return res.status(500).json({error})
    }
}