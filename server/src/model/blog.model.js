import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'pracusers',
        required : true
    },

    btype : {
        type : String,
        trim : true,
        required : true
    },

    subject : {
        type : String,
        trim : true,
        required : true
    },

    content : {
        type : String,
        trim  : true,
        required : true
    }

}, {timestamps : true})

const blogModel = mongoose.model("blogs", blogSchema)

export default blogModel



