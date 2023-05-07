const login = require('../models/loginSchema')
const slugify = require('slugify')


exports.createuser = (req,res) => {

    const { username , email , password, confirmpassword , images} = req.body
    const slug = typeof username === 'string' ? slugify(username) : uuidv4();

    if(!slug) slug = uuidv4()

      login.create({username,email,password,confirmpassword,images,slug},(err,user)=>{
        if(err){
            res.status(400).json({error:"ชื่อผู้ใช้หรืออีเมลถูกใช้ไปแล้ว"})
        }else{
        res.json({user:user,success:"บันทึกข้อมูลเรียบร้อย"}) 
        }
     })
}