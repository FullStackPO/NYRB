import { Router } from 'express'
import { identifyUser } from '../middleware/identifyuser.middleware.js'
import { createBlogController, getAllUserController, getBlogController } from '../controller/blog.controller.js'

const blogRouter = Router()

blogRouter.post('/create', identifyUser, createBlogController)

blogRouter.get('/', identifyUser, getBlogController)

blogRouter.get('/get-user', identifyUser, getAllUserController)

export default blogRouter