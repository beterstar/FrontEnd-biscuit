const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const bodyParser = require('body-parser')
const path = require('path')


const loginRoute = require('./routes/loginbiscuit')
const authRoute = require('./routes/auth')
const resetpassword = require('./routes/reset')
const fileRoute = require('./routes/fileupload-Route')
const app = express()


// connect to cloud database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>console.log("connecting success!"))
.catch((err)=>{console.log(err)})


// middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())

//route
app.use('/api',loginRoute)
app.use('/api',authRoute)
app.use('/api',resetpassword)

app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use('/api',fileRoute.routes)

const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`start server in port ${port}`))