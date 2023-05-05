//--------------------------ใช้สำหรับ อัพเดตชื่อ slug------------------------------
const { singleFileSchema } = require('../models/singleFile')
const slugNameImage = (req,res) => {
    try{
        const { slug } = req.body

        

    }catch(error){
        res.status(400).json({err:error.message,detail:"Server side notworking"})
    }
}



module.exports = {
    slugNameImage
}