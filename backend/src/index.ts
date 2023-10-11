import express, {Request, Response} from 'express'
import cors from 'cors'
import config from 'config'
import routes from "./routes/index.js";
const app = express()
const PORT = config.get("port")

app.use(express.json())
app.use(cors())
app.get('/',(req:Request,res:Response)=>{
    res.send('hola')
})

app.use(routes)
app.listen(PORT,()=> console.log(`Server http://localhost:${PORT}`))