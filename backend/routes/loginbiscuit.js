const express = require("express")
const router = express.Router()

 
const { logincreate} = require('../controllers/loginController')
const { loginschema } = require('../models/loginSchema')


router.post('/createuser',logincreate)


module.exports = {
    routes:router
}




