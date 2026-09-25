import { Router } from 'express'
import { identifyUser } from '../middleware/identifyuser.middleware.js'
import { followUserController, getFollowedUserController, unfollowUserController } from '../controller/user.controller.js'

const userRouter = Router()

userRouter.post("/user/:username", identifyUser, followUserController)

userRouter.post("/unfollow/:username", identifyUser, unfollowUserController)

userRouter.get("/getfolloweduser", identifyUser, getFollowedUserController)

export default userRouter