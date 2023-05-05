'use strict'

const express = require('express')
const { upload } = require('../helper/filehelper')
const { singleFileUpload } = require('../controllers/fileuploaderController')
const { slugNameImage } = require('../controllers/imageSlug')
const router = express.Router();


router.post('/singleFile',upload.single('file'),singleFileUpload)
router.post('/uploadimgslug',slugNameImage)

module.exports = {
    routes : router
}