import jwt from 'jsonwebtoken'

export const identifyUser = (req, res, next) => {

    const token = req.cookie.token

    if(!token){
        return res.status(404).json({
            success : false,
            message : 'Unauthorised Token'
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