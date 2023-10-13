import jwt from 'jsonwebtoken'
import * as process from "process";

// expira en una hora
const optionsForToken = {
    expiresIn: 60*60
}
// para test, sin entorno
const testSecret = 'test-secret'

export const generateToken = (id:number)=>{
    const userForToken = {
        id
    }
    return jwt.sign(userForToken,process.env.SECRET || testSecret,optionsForToken)
}

export const validateToken = (token:string)=>{
    return jwt.verify(token, process.env.SECRET || testSecret)
}