import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required :true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default: "customer"
    }
})

let userModel = mongoose.model('user', userSchema)

export default userModel;