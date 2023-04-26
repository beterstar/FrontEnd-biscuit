const jwt = require('jsonwebtoken')
const login = require('../models/loginSchema')


exports.login = (req,res) =>{
    //ข้อมูล username และ password
    const {username,password} = req.body

    //หา user ที่มี username ตรงกับที่รับเข้ามา
    login.findOne({username: username,password:password}, (err,user)=>{
        if(err){
            console.log(err)
            res.status(500).json({error:'เกิดข้อผิดพลาดในการค้นหา User'})
        } else if (!user) {
            //ไม่พบ user ที่ตรงกับ username ที่รับเข้ามา
            res.status(400).json({error:'ชื่อผู้ใช้ไม่ถูกต้องหรือไม่มีอยู่ในระบบ'})
        } else if (user.password !== password) {
            //password ไม่ตรงกับที่เก็บในฐานข้อมูล
            res.status(400).json({error:'รหัสผ่านไม่ถูกต้อง'})
        } else {
            //username และ password ถูกต้อง || ไม่มี error เข้ามา
            const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'1d'})
            return res.json({token,username})
            // res.send('เข้าสู่ระบบสำเร็จ')
        }
    })

}
