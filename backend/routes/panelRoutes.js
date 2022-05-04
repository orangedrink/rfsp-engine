const express = require('express')
const router = express.Router()
const controllers = require('../controllers/panelController')
const auth = require('../middleware/authMiddleware')

router.get('/', auth, controllers.getPanels)

router.get('/:id', controllers.getPanel)

router.post('/', auth, controllers.postPanels)

router.put('/:id', auth, controllers.putPanels)

router.delete('/:id', auth, controllers.deletePanels)

module.exports = router