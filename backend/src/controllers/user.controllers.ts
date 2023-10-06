import {Request, Response} from "express";
import {CreateUserInput} from '../schema/user.schema.js'
import {createUserService} from "../services/user.services.js";

export const createUserController = async(req:Request<{},{},CreateUserInput>,res:Response)=>{

    try {
        // const user = await createUserService()
    }catch (error) {

    }
}