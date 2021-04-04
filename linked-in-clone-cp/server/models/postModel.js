import mongoose from 'mongoose'



const linkedInPosts = new mongoose.Schema({
    name: String,
    description: String,
    message: String  , 
    photoUrl: String
    

})



export default mongoose.model("linkedInPosts", linkedInPosts)



