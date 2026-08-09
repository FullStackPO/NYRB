import mongoose from 'mongoose'
import 'dotenv/config'

export async function connectToDB(){

    try {
      
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`connect to db`)
        
    } 
    catch (err) {
        
        console.log(err)

    }

}