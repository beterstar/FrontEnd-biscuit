const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const loginRoute = require('./routes/loginbiscuit')
const authRoute = require('./routes/auth')

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


//route
app.use('/api',loginRoute)
app.use('/api',authRoute)
// app.use('uploads',express.static("./uploads"));

const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`start server in port ${port}`))