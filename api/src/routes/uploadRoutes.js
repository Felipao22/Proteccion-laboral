const controller = require('../controllers/uploadControllers');
const { Router } = require('express');

const router = Router();

router.post('/', 
controller.upload,
controller.uploadFile
)

module.exports = router;