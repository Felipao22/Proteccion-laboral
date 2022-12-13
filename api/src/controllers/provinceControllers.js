const axios = require ('axios');
// const { json } = require('body-parser');
const {Province } = require ('../db');


async function getProvincesDb(){
    try {
        const apiInfoProvince = await axios('https://apis.datos.gob.ar/georef/api/provincias')
        // console.log(apiInfoProvince.data)
        const apiInfoProvinces = apiInfoProvince.data.provincias?.map(c => {
            return {
                nombre: c.nombre,
                id: c.id,
            };
        });
        apiInfoProvinces.forEach(c => {
            Province.findOrCreate({
                where: {
                    nombre: c.nombre,
                    id: c.id
                }
            })
        })
        console.log('Database loaded')
    } catch (error) {
        console.log(error)
    }
  
        // fetch("https://apis.datos.gob.ar/georef/api/provincias")
        // .then(res => res.ok ? res.json() : Promise.reject(res))
        // .then(json => {
        //     json.provincias.forEach(el => el.nombre)
        // })
        
    
}

const getAllProvinces = async(req, res) => {
	try{
		const provinces = await Province.findAll();
		return res.status(200).json(provinces);
	} catch(error) {
		return res.status(500).send(`Error: ${error}`)
	}
}

module.exports = {
    getProvincesDb,
    getAllProvinces
}