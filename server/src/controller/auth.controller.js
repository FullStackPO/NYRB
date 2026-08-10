import userModel from '../model/auth.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerController = async(req, res) => {

    try {
       
        const { username, email, password } = req.body

        const isUserAlreadyExist = await userModel.findOne({
            $or : [ {username} , {email}  ]
        })

        if(isUserAlreadyExist){
            return res.status(409).json({
                success : false,
                message : 'user already exist'
            })
        }

        const hash = await bcrypt.hash(password, 10)

        const user = await userModel.create({ username, email, password:hash })

        res.status(201).json({
            message : 'user created successfully',
            user : {
                id : user.id,
                email : user.email,
                username : user.username
            }
        })

    } 
    catch (err) {
        
        console.log(err)

    }

} 

export const loginController = async(req, res) =>{

    try {
        
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if(!user){
            return res.status(404).json({
                success : false,
                message : 'user not found'
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if(!isPasswordMatch){
            return res.status(409).json({
                success : false,
                message : 'Invalid password'
            })
        }

        const token = jwt.sign({
            id : user.id,
            username : user.username,
            email : user.email
        }, process.env.JWT_SECRET, {expiresIn : '1h'})

        res.cookie("token", token)

        res.status(200).json({
            success : true,
            message : 'user logged in successfully',
            user : {
                id : user.id,
                username : user.username,
                email : user.email
            }
        })
        
    } 
    catch (error) {
        console.log(error)
    }

}

export const getmeController = async(req, res) => {

    const userId = req.user.id 

    const user = await userModel.findById(userId).select("-password")

    if(!user){
        return res.status(404).json({
            success : false,
            message : 'User Not Found'
        })
    }

    res.status(200).json({
        success : true,
        message : 'User data fetched successfully.',
        user
    })

}