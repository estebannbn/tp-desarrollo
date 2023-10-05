import express from 'express'
import config from 'config'
import routes from "./routes/index.js";
const app = express()
const PORT = config.get("port")

app.use(express.json())
app.use(routes)
app.listen(PORT,()=> console.log(`Server http://localhost:${PORT}/api/users`))