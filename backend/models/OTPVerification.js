const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserOTPVerificationSchema = new Schema({
    userID:String,
    otp:String,
    createAt:Date,
    expiresAt:Date
});

const UserOTPVerification = mongoose.model(
    "userOtpVerification",
    UserOTPVerificationSchema
)

module.exports = UserOTPVerification