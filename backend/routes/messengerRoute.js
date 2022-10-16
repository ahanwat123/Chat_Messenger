const router = require("express").Router()
const {getFriends, messageUploadDB} = require("../controller/messengerController")
const { authMiddleWare} = require('../middleware/authMiddleware')

router.get('/get-friends', authMiddleWare, getFriends)
router.get('/send-message', authMiddleWare, messageUploadDB)
module.exports = router