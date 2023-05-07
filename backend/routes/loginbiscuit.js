const express = require("express")
const router = express.Router()

 
const { logincreate} = require('../controllers/loginController')
const { loginschema } = require('../models/loginSchema')
const { userdata } = require('../controllers/userImg')
const { requireLogin } = require('../controllers/authController')
const { createuser } = require('../controllers/createuser')


router.post('/otpcreateuser',logincreate)
router.post('/createuser',requireLogin,createuser)
router.get('/userdata/:slug',requireLogin,userdata)


module.exports = {
    routes:router
}




