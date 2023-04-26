
const slugify = require('slugify')
const { v4: uuidv4 } = require('uuid')
const login = require('../models/loginSchema')

//บันทึกข้อมูลจาก from user
exports.logincreate = (req,res)=>{
    const { username, email , password } = req.body

    const slug = slugify(username)

    if(!slug) slug = uuidv4()
    switch(true){
        case !username : 
        return res.status(400).json({error:"กรุณาป้อนชื่อผู้ใช้"})
        break;
        case !email : 
        return res.status(400).json({error:"กรุณาป้อนอีเมล์"})
        break;
        case !password : 
        return res.status(400).json({error:"กรุณาป้อนพาสเวิร์ด"})
        break;
    }
    
    login.create({username,email,password,slug},(err,user)=>{
        if(err){
            res.status(400).json({error:"ชื่อผู้ใช้หรืออีเมลถูกใช้ไปแล้ว"})
        }
        res.json(user)
    })

}

exports.getdatauser = (req,res) =>{
    login.find({}).exec((err,logins)=>{
        res.json(logins)
    })
}