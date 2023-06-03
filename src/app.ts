import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.route'

export const app: Application = express()

app.use(cors())

// parcer
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Working successfully')
})
