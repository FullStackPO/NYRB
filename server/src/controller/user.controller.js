import userModel  from '../model/user.model.js'

export async function followUserController(req, res){

    const userFollower = req.user.username
    const userFollowee = req.params.username
    
    if(userFollowee == userFollower){
        return res.status(400).json({
            message : "user cannot follow own"
        })
    }

    const isFolloweeExist = await userModel.findOne({
        username : userFollowee
    })

    if(!isFolloweeExist){
        return res.status(401).json({
            message : "user not exist"
        })
    }

    const isAlreadyFollow = await userModel.findOne({
        follower : userFollower,
        followee : userFollowee
    })
    
    if(isAlreadyFollow){
        return res.status(200).json({
            message : `you already following ${userFollowee}`
        })
    }

    const followRecord = await userModel.create({
        follower : userFollower,
        followee : userFollowee
    })

    res.status(201).json({
        message : "user follow successfully",
        follow : followRecord
    })

}