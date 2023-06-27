const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    creation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
        
    }

});

const User=new mongoose.model('User',userSchema);
module.exports=User;