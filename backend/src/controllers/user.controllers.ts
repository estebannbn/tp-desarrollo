import {Request, Response} from "express";
import {CreateUserInput} from '../schema/user.schema.js'
import {createUserService} from "../services/user.services.js";
export const createUserController = async(req:Request<{},{},CreateUserInput>,res:Response)=>{
    const input = req.body
    try {
        const user = await createUserService(input)
        res.status(201).json({user})
    }catch (error) {
        console.log('Error creating user')
        res.status(500).json({error})
    }
}