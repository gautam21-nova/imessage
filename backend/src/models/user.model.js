import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    
    clerkId:{
        type:String,
        required:true,
        unique:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    profilePic:{
        type:String,
        default:""
    },
}, {timestamps:true});

// userSchema.pre('save', function(user, next){
//     if (!user.isModified('password')) return next();
//     next();
// })


const User = mongoose.model("User", userSchema);


export default User;