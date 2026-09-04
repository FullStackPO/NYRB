import blogModel from "../model/blog.model.js";
import userModel from "../model/auth.model.js";

export const createBlogController = async(req, res) => {

    try {
      
        const { btype, subject, content } = req.body

        const blog = await blogModel.create({
            user : req.user.id,
            btype,
            subject,
            content
        })
        
        res.status(201).json({
            message : 'blog created successfully',
            blog
        })

    } 
    catch (error) {
        
        console.log(error)

    }

} 

export const getBlogController = async(req, res) => {

    try {
        
        const blog = await blogModel.find().populate("user", "username email")

        if(!blog){
            return res.status(200).json({
                message : 'No Blog Here to Show.'
            })
        }

        res.status(200).json({
            blogs : blog
        })

    } 
    catch (error) {
        console.log(error)
    }

}

export const getAllUserController = async(req, res) =>{

    try {
        const users = await userModel.find().select("-password")

        res.status(200).json({
            success : true,
            message :  `All users fetched successfully.`,
            user : users
        })
    } 
    catch (error) {
        console.log(error)
    }

}