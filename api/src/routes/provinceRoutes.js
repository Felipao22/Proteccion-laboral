const { Router } = require ("express");
const { Province } = require ('../db');
const { getAllProvinces } = require('../controllers/provinceControllers');

const router = Router();

// GET ALL PROVINCES ROUTE
router.get('/', async (req, res) =>{                                                                            
    const {name} = req.query;

    if(!name){                                                                  
        let provinces = await getAllProvinces();                                        
        return res.status(200).send(provinces);
    }else{
        try{
            const province = await getAllProvinces();                                     
            province.length ?
            res.status(200).send(province) : res.status(404).send('Province name does not exist!');                                                   
        }
        catch(error){
         res.send(error)
        }; 
    };
});





module.exports = router;