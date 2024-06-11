const express = require('express')
const router = express.Router()
const infoController = require('../controllers/infoController')

router.post('/', infoController.createInfo)



module.exports = router