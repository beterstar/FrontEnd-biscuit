const express = require("express")
const router = express.Router()

const { sendOtpResetpassword } = require('../controllers/resetpassword')
const { confirmResetPassword } = require('../controllers/confirmResetPassword')

router.post('/reset',sendOtpResetpassword)
router.post('/resetpassword',confirmResetPassword)

module.exports = router