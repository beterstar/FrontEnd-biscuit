const login = require('../models/loginSchema')

exports.userdata = ( req , res ) => {
    const { slug } = req.params
    login.findOne({slug}).exec((error,user)=>{
        res.status(200).json(user)
    })
}