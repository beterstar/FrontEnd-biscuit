//schema
const login = require('../models/loginSchema')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

//resetpassword
exports.sendOtpResetpassword = async (req,res) =>{
    try{
        const { email } = req.body;
        const otp =  Math.floor(1000 + Math.random() * 9000);

        await login.findOne({ email:email },async (err,user)=>{
            if(!user){
                return res.status(400).json({error:"ไม่มีข้อมูลผู้ใช้อยู่ในระบบ"})
             }else{
                const transporter =  await nodemailer.createTransport({
                    host: 'smtp-mail.outlook.com',                 
                    service: 'outlook',                            
                    secureConnection: false,
                    tls: {
                        ciphers: 'SSLv3',
                        rejectUnauthorized: false                           
                    },
                    port: 587,                                      
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASSWORD
                    }
                  });

            //send email      
              const mailOptions = await  {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'This is OTP for reset password',
                text: `OTP : ${otp}`
              };
        
            // OTP Send
            // await transporter.sendMail(mailOptions, (err, info) => {
            //     if (err) {
            //       console.log(err);
            //     } else {
            //       console.log(`Email sent: ${info.response}`);
            //     }
            //   });
             }
            const token = await jwt.sign({otp},process.env.JWT_SECRET,{expiresIn:'1d'})

            
            await res.json({email:email,token:token,otp:otp,username:user.slug})
        })

    }catch(error){
        console.log(error)
    }
   
}