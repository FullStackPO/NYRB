import mongoose from 'mongoose'

const blackListSchema = new mongoose.Schema({

    token : {
        type : String,
        required : [true, "Token is required"],
        unique : true
    }

}, { timestamps : true })

const blackListModel = mongoose.model("blackList", blackListSchema)

export default blackListModel