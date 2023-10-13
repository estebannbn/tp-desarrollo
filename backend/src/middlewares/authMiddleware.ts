import {Request, Response, NextFunction} from "express";
import * as process from "process";
import {validateToken} from "../utils/jwt.js";
interface JwtPayload{
    id:number,
    iat:number,
    exp:number
}
export const authMiddleware = (req:Request,res:Response,next:NextFunction) =>{
    const token = req.header(process.env.HEADER_FOR_TOKEN || 'test-header-for-token')
    if (!token) return res.status(401).json({error: 'Not authorized'})
    const payload = validateToken(token) as JwtPayload
    console.log(payload)
    req.userId = payload.id
    next()
}