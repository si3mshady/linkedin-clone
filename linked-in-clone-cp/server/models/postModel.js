import mongoose from 'mongoose'



const linkedInPosts = new mongoose.Schema({
    name: String,
    description: String,
    message: String  , 
    userImage: String
    

})



export default mongoose.model("linkedInPosts", linkedInPosts)



