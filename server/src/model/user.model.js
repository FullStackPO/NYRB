import mongoose from 'mongoose'

const followSchema = new mongoose.Schema({

    follower : {
        type : String,
        required : true
    },

    followee : {
        type : String,
        required : true
    }
}, 
{timestamps : true})

const followModel = mongoose.model("follow", followSchema)

followSchema.index({ follower : 1, followee : 1}, {unique : true})

export default followModel



