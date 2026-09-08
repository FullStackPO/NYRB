import jwt from 'jsonwebtoken'
import blackListModel from '../model/blacklist.model.js'

export const identifyUser = async(req, res, next) => {

    const token = req.cookies.token

    if(!token){
        return res.status(404).json({
            success : false,
            message : 'Unauthorised Token'
        })
    }

    const blacklistedToken = await blackListModel.findOne({
        token: token
    })

    if (blacklistedToken) {
        return res.status(401).json({
            success: false,
            message: 'Token has been logged out'
        })
    }

    let decoded;

    try {

        decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } 
    catch (error) {
        console.log(error)
    }


}