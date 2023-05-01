
//ระบุข้อมูลที่ต้องจัดเก็บ   username , email , password
const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("login",loginSchema)