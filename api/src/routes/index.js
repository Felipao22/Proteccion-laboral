const { Router } = require('express');
const userRoutes = require('./userRoutes')
const provinceRoutes = require('./provinceRoutes')
const cityRoutes = require('./cityRoutes')
const categoryRoutes = require('./categoryRoutes')
const fileRoutes = require('./fileRoutes')
const kindRoutes = require('./kindRoutes.js')


const router = Router();

router.use('/user', userRoutes)
router.use('/province', provinceRoutes)
router.use('/cities', cityRoutes)
router.use('/category', categoryRoutes)
router.use('/file', fileRoutes)
router.use('/kind', kindRoutes)




module.exports = router;
