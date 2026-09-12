import followModel from '../model/user.model.js'
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

    const isAlreadyFollow = await followModel.findOne({
        follower : userFollower,
        followee : userFollowee
    })
    
    if(isAlreadyFollow){
        return res.status(200).json({
            message : `you already following ${userFollowee}`
        })
    }

    const followRecord = await followModel.create({
        follower : userFollower,
        followee : userFollowee
    })

    res.status(201).json({
        message : "user follow successfully",
        follow : followRecord
    })

}

export async function unfollowUserController(req, res){

    const userFollower = req.user.username;
    const userFollowee = req.params.username;


    const isUserFollowing = await followModel.findOne({
        follower : userFollower,
        followee : userFollowee
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message : `you are not following the ${userFollower}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message : `you unfollow the user.`
    })

}