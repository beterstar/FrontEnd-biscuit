const express = require("express")
const router = express.Router()
const { requireLogin } = require('../controllers/authController')

const { sendOtpResetpassword } = require('../controllers/resetpassword')
const { confirmResetPassword } = require('../controllers/confirmResetPassword')

router.post('/reset',sendOtpResetpassword)
router.post('/resetpassword',requireLogin,confirmResetPassword)

module.exports = router