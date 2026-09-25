import mongoose from 'mongoose'

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pracusers",
        required: true
    },

    followee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pracusers",
        required: true
    }
}, { timestamps: true })

const followModel = mongoose.model("follow", followSchema)

followSchema.index({ follower : 1, followee : 1}, {unique : true})

export default followModel



