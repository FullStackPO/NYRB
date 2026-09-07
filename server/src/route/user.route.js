import { Router } from 'express'
import { identifyUser } from '../middleware/identifyuser.middleware.js'
import { followUserController } from '../controller/user.controller.js'

const userRouter = Router()

userRouter.post("/user/:username", identifyUser, followUserController)

export default userRouter