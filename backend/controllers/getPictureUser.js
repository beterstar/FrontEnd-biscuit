const singleFile = require('../models/singleFile')


exports.getPictureUser = async (req,res) => {
        try{
            const { slug } = await  req.body
            if(slug){
                await  singleFile.findOne({slug:slug}).exec((err,data)=>{
                      res.status(200).json(data)        
             });
            }else{
                 res.status(400).json({error:"Error slug undefine"})
            }
    
        }catch(error){
            res.status(400).json({message:"Server side error",status:error.message})
        }

}   

