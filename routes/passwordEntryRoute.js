const express = require('express');
const passwordController = require('../controller/passwordController')


const router = express.Router()

router.get('/',passwordController.getEntries)
router.post('/',passwordController.createEntry)
router.get('/:id',passwordController.deleteEntry)


module.exports = router