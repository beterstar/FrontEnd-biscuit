'use strict'

const express = require('express')
const { upload } = require('../helper/filehelper')
const { singleFileUpload } = require('../controllers/fileuploaderController')
const router = express.Router();


router.post('/singleFile',upload.single('file'),singleFileUpload)


module.exports = {
    routes : router
}