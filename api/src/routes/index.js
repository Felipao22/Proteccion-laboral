const { Router } = require('express');
const userRoutes = require('./userRoutes')
const provinceRoutes = require('./provinceRoutes')
const uploadRoutes = require('./uploadRoutes')
const cityRoutes = require('./cityRoutes')


const router = Router();

router.use('/user', userRoutes)
router.use('/province', provinceRoutes)
router.use('/upload', uploadRoutes)
router.use('/cities', cityRoutes)




module.exports = router;
