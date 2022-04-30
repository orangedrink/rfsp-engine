const express = require('express')
const router = express.Router()
const controllers = require('../controllers/goalController')

router.get('/', controllers.getGoals)

router.post('/', controllers.postGoals)

router.put('/:id', controllers.putGoals)

router.delete('/:id', controllers.deleteGoals)

module.exports = router