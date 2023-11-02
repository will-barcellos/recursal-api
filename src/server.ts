import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
