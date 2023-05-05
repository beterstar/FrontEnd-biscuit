'use strict'
const SingleFile = require('../models/singleFile')
const singleFileUpload = async (req,res,next) => {
    try{
        const { slug }  = await req.body
        const file = new SingleFile({
            slug:slug,
            fileName : req.file.originalname,
            filePath : req.file.path,
            fileType : req.file.mimetype,
            fileSize : fileSizeFormatter(req.file.size , 2) // 0.00
        });
        await file.save()
        return res.status(201).json({success:'อัพโหลดรูปภาพเสร็จสิ้น',status:"OK"})

    }catch(error){
        res.status(400).json({err:"เกิดข้อผิดพลาด ไม่สามรถอัพโหลดไฟล์ได้"})
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes'
    }
    const dm = decimal || 2;
    const sizes = ['Bytes','KB','MB','GB','TB','PB','EB','YB','ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000))
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index];
}

module.exports = {
    singleFileUpload
}