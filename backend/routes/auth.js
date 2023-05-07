const express = require('express')
const router = express.Router()
const { login } = require('../controllers/authController')
const  { getPictureUser }  = require('../controllers/getPictureUser')

router.post('/login',login)
router.post('/getpictureuser',getPictureUser)


module.exports = router