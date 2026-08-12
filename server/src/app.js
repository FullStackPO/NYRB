import express from 'express'
import authRouter from './route/auth.route.js'
import cookieParser from 'cookie-parser'
import blogRouter from './route/blog.route.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.use('/api/auth', authRouter)
app.use('/api/blog', blogRouter)

export default app