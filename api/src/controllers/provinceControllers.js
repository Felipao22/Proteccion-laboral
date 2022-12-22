const axios = require("axios");
const { Province } = require("../db");
const jsonProvinces = require("../json/provincias.json");
const provinces = jsonProvinces.provincias;

// SAVE DATA FROM JSON TO DB ----> PROVINCES VERSION

const apiProvince = async (req, res) => {
  try {
    const foundProvince = await Province.findOne();
    if (!foundProvince) {
      await Province.bulkCreate(provinces);
      console.log(`Provinces loaded successfully!`);
    } else {
      console.log(`Provinces already loaded`);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllProvinces = async (req, res) => {
  try {
    const provinces = await Province.findAll();
    res.status(200).json(provinces);
  } catch (error) {
    res
      .status(200)
      .json(`Error at getAllProvinces controller function: ${error}`);
  }
};

module.exports = { getAllProvinces, apiProvince };
