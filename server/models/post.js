const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    prompt:{
        type:String,
        required:true
    }
},{timestamps:true});

const Post=new mongoose.model("Post",postSchema);
module.exports=Post;