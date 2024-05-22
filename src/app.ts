import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// cwd --> current work directory
console.log(process.cwd())

export default app
