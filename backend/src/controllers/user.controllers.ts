import {Request, Response} from "express";
import {CreateUserInput} from '../schema/user.schema.js'
import {createUserService} from "../services/user.services.js";
import User from "../models/user";

export const createUserController = async(req:Request<{},{},CreateUserInput>,res:Response)=>{
    const input = req.body
    try {
        const user = await createUserService(input)
    }catch (error) {

    }
}