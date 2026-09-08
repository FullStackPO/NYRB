import { Router } from 'express'
import { getmeController, loginController, logoutController, registerController } from '../controller/auth.controller.js'
import { identifyUser } from '../middleware/identifyuser.middleware.js'

const authRouter = Router()

authRouter.post('/register', registerController)

authRouter.post('/login', loginController)

authRouter.get('/get-me', identifyUser, getmeController)

authRouter.post('/logout', identifyUser, logoutController)

export default authRouter