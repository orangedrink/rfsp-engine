const express = require('express')
const router = express.Router()
const controllers = require('../controllers/userController')
const auth = require('../middleware/authMiddleware')
router.post('/', controllers.addUser)
router.post('/login', controllers.login)
router.get('/info', auth, controllers.info)

module.exports = router