const express = require("express")
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,"./upload")
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage:storage,
    limits:{
        fileSize:2*1000*1000
    }
})
module.exports = upload