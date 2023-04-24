const { Router } = require ("express");
const { getAllProvinces } = require('../controllers/provinceControllers');

const router = Router();

// GET ALL PROVINCES ROUTE
router.get('/', getAllProvinces);





module.exports = router;