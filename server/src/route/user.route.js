import { Router } from 'express'
import { identifyUser } from '../middleware/identifyuser.middleware.js'
import { followUserController, unfollowUserController } from '../controller/user.controller.js'

const userRouter = Router()

userRouter.post("/user/:username", identifyUser, followUserController)

userRouter.post("/unfollow/:username", identifyUser, unfollowUserController)

export default userRouter