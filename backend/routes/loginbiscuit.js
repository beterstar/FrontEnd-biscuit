const express = require("express")
const router = express.Router()
const multer = require("multer")
const moment = require('moment')

const { logincreate } = require('../controllers/loginController')
const { loginschema } = require('../models/loginSchema')

router.post('/createuser',logincreate)





module.exports = router




// //img storage path
// const imgconfig = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"./uploads")
//     },
//     filename:(req,file,callback) =>{
//         callback(null,`image-${Date.now()}. ${file.originalname}`)
//     }
// })

// // img filter
// const isImage = (req,file,callback)=>{
//     if(file.mimtype.startsWith("image")){
//         callback(null,true)
//     }else{
//         callback(new Error("only images is allowd"))
//     }
// }
// const upload = multer({
//     storage:imgconfig,
//     fileFilter:isImage
// })
// // user register    photo : name in tag <input name="photo" />

// router.post("/upload",upload.single("photo"), async (req,res)=>{
//     const { filename } = req.file;

//     if(!filename){
//         res.status(401).json({status:401,message:"fill all the data"})
//     }
    
//     const date = moment(new Date()).format("YYYY-MM-DD")
//     try{
//         const imagedata = new loginschema({
//             imgpath:filename,
//             date:date
//         })

//         const finaldata = await  imagedata.save()
//         res.status(201).json({status:201,finaldata})
//     }catch(err){
//         res.status(401).json({status:401,err})
//     }
// })

