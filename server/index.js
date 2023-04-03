import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import dalleRoutes from './routes/dalle.routes.js'

//setup env variables call dotenv.config()
dotenv.config()

//setup express application
const app = express()

//setup middleware
app.use(cors())
//setup the weight of the payload
app.use(express.json({ limit: "50mb" }))

app.use('/api/v1/dalle', dalleRoutes)

//create demo route
app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(8080, () => console.log('Server has started on port 8080'))