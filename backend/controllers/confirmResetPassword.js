const  login  = require('../models/loginSchema')

exports.confirmResetPassword = async (req,res) =>{
    const { password , confirmpassword , username } = await req.body
    if(!password){
        res.status(400).json({error:"กรุณาป้อนรหัสผ่าน"})
    }else if(!confirmpassword){
        res.status(400).json({error:"กรุณาป้อนรหัสผ่านอีกครั้ง"})
    }else if(!username){
        res.status(400).json({error:"กรุณาส่งคำขอใหม่อีกครั้ง"})
    }else if(password.length <= 5 ){
        res.status(400).json({error:"รหัสผ่านต้องมีมากกว่า 5 ตัวอักษร"})
    }else if(password !== confirmpassword){
        res.status(400).json({error:"รหัสผ่านไม่ตรงกัน"})
    }else{
        login.findOneAndUpdate({username:username},{password:password,confirmpassword:confirmpassword}).exec()
        res.json({success:"เปลี่ยนรหัสผ่านเรียบร้อย"})
    }

    
}