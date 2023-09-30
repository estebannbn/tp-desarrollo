import express from 'express'
import config from 'config'
const app = express()
const PORT = config.get("port")
app.listen(PORT,()=> console.log('listening at port ' + PORT))