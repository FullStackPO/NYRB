import followModel from '../model/user.model.js'
import userModel  from '../model/auth.model.js'

export async function followUserController(req, res) {
    try {
        const userFollower = req.user.id
        const username = req.params.username

        const userFollowee = await userModel.findOne({
            username: username
        })

        if (!userFollowee) {
            return res.status(404).json({
                message: "User does not exist"
            })
        }

        if (userFollower === userFollowee._id.toString()) {
            return res.status(400).json({
                message: "User cannot follow themselves"
            })
        }

        const isAlreadyFollow = await followModel.findOne({
            follower: userFollower,
            followee: userFollowee._id
        })

        if (isAlreadyFollow) {
            return res.status(200).json({
                message: `You are already following ${userFollowee.username}`
            })
        }

        const followRecord = await followModel.create({
            follower: userFollower,
            followee: userFollowee._id
        })

        res.status(201).json({
            message: "User followed successfully",
            follow: followRecord
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function unfollowUserController(req, res) {
    try {
        const userFollower = req.user.id
        const username = req.params.username


        const userFollowee = await userModel.findOne({
            username: username
        })

        if (!userFollowee) {
            return res.status(404).json({
                message: "User does not exist"
            })
        }

        const isUserFollowing = await followModel.findOne({
            follower: userFollower,
            followee: userFollowee._id
        })

        if (!isUserFollowing) {
            return res.status(200).json({
                message: `You are not following ${userFollowee.username}`
            })
        }


        await followModel.findByIdAndDelete(isUserFollowing._id)

        res.status(200).json({
            message: `You unfollowed ${userFollowee.username}`
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function getFollowedUserController(req, res) {
    try {
        const userID = req.user.id

        const followedUser = await followModel
            .find({ follower: userID })
            .populate("followee", "_id username email")

        if (followedUser.length === 0) {
            return res.status(200).json({
                message: "You aren't following anyone.",
                followedUser: []
            })
        }

        res.status(200).json({
            message: "Your following list.",
            followedUser
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}