const {sendMail} = require('../controller/controller') 
const express = require('express')
const router = express.Router()


//routes
router.post('/mail',sendMail)



module.exports=router