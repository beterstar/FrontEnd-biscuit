const mongoose = require('mongoose');
// const { schema } = require('./loginSchema');
const Schema = mongoose.Schema;

const singleFileSchema = new Schema({
    slug:{
        type:String,
        required:true
    },
    fileName : {
        type:String,
        required:true
    },
    filePath: {
        type:String,
        required:true
    },
    fileType: {
        type:String,
        required:true
    },
    fileSize: {
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('SingleFile',singleFileSchema)