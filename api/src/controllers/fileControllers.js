const { Pdf } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

//Fucion del POST Files
function uploadFile(req, res) {
  const {
    originalname: name,
    mimetype: type,
    path: data,
    size: size,
  } = req.file;

  Pdf.create({
    name,
    type,
    data,
    size,
  })
    .then((newFile) => res.json(newFile))
    .catch((error) => res.status(400).json({ error }));
}

//Fucion del GET Files por Id
async function getFileById(id) {
  try {
    const foundFile = await Pdf.findByPk(id);
    return foundFile;
  } catch (error) {
    return "No se encontró el archivo solicitado";
  }
}

//Fucion del GET Files, redirecciona segun haya query name o no
function getFiles(name) {
  if (name) {
    return getFilessByName(name);
  } else {
    return getAllFiles();
  }
}

//Funcion interna, es llamada por getFiles cuando no viene query name
async function getAllFiles() {
  try {
    const foundFilesComplete = await Pdf.findAll({});
    // const filtrado = foundFilesComplete.filter(e => (e.active))
    return foundFilesComplete;
    // return (foundProductsComplete)
  } catch (error) {
    console.log(error); //res.send(error.message);
  }
}

//Funcion interna, es llamada por getFiles cuando viene query name
async function getFilessByName(name) {
  try {
    const foundFilessName = await Pdf.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    if (foundFilessName.length) {
      return foundFilessName;
    } else {
      return "No se encontraron archivos asociados";
    }
  } catch (error) {
    throw new Error(
      `No se encontraron archivos con el nombre ${name}, ${error}`
    );
  }
}

module.exports = {
  getFiles,
  uploadFile,
  getFileById,
  getAllFiles,
  getFilessByName,
};
