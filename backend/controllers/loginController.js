'use strict';

const slugify = require('slugify')
const { v4: uuidv4 } = require('uuid')
const login = require('../models/loginSchema')

//บันทึกข้อมูลจาก from user
   const logincreate = async  ( req,res )=>{
   try{
    const { username, email , password, confirmpassword } = req.body

    const slug = typeof username === 'string' ? slugify(username) : uuidv4();

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
    
    //เช็ค ความถูกต้อง username and email
    if(!/^[a-zA-z0-9 ]*$/.test(username)){
        return res.status(400).json({
            status:"FAILED",
            error:"กรุณาระบุชื่อผู้ใช้เป็นภาษาอังกฤษเท่านั้น"
        })
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        return res.status(400).json({
                    status:"FAILED",
                    error:"รูปแบบอีเมลไม่ถูกต้อง"
                });
    }else if(password.length < 5){
        return res.status(400).json({
                    status:"FAILED",
                    error:"กรุณาป้อนพาสเวิร์ดอย่างน้อย 6 ตัว"
               })
    }else if(password != confirmpassword){
        return res.status(400).json({
            status:"FAILED",
            error:"รหัสผ่านไม่ตรงกัน"
        })
    }

    // ------------------------push to database---------------------------
     login.create({username,email,password,confirmpassword,slug},(err,user)=>{
        if(err){
            res.status(400).json({error:"ชื่อผู้ใช้หรืออีเมลถูกใช้ไปแล้ว"})
        }else{
        res.json({user:user,success:"บันทึกข้อมูลเรียบร้อย"})
            
        }
    })

    //----------------------------เอาไว้ดัก error------------------------------ 
   }catch(error){
     res.status(400).send(error.message)
   }
}



exports.getdatauser = (req,res) =>{
    login.find({}).exec((err,logins)=>{
        res.json(logins)
    })
}


// ------------------export module-----------------
module.exports = {
    logincreate
}