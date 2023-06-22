const { Pdf, Kind } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");
const path = require('path');
const fs = require('fs');

//Fucion del POST Files
async function uploadFile(req, res) {
  const {
    originalname: name,
    mimetype: type,
    path: data,
    size: size,
  } = req.file;
  const {kindId} = req.body;

  Pdf.create({
    name,
    type,
    data,
    size,
    kindId: kindId
  })
    .then((newFile) => res.json(newFile))
    .catch((error) => res.status(400).json({ error }));
}

//Fucion del GET Files por Id
//http://localhost:3001/file/1
// async function getFileById(id) {
//   try {
//     const foundFile = await Pdf.findByPk(id);
//     return foundFile;
//   } catch (error) {
//     console.log(`No se encontró el archivo solicitado,${error}`)
//   }
// }

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
    const foundFilesComplete = await Pdf.findAll({
    });
    // const filtrado = foundFilesComplete.filter(e => (e.active))
    return foundFilesComplete;
  } catch (error) {
    console.log(error); //res.send(error.message);
  }
}

//Funcion interna, es llamada por getFiles cuando viene query name
//http://localhost:3001/file?name=nombre
async function getFilessByName(name) {
  try {
    const foundFilessName = await Pdf.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include:[{model: Kind}]
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

const getFilePath = (data) => {
  return path.join(__dirname, '../..', data);
}

async function downloadFile(req, res) {
  const fileId = req.params.id;
  
  try {
    const file = await Pdf.findByPk(fileId);
    
    if (!file) {
      return res.status(404).json({ message: 'Archivo no encontrado' });
    }
    
    const filePath = getFilePath(file.data);
    const fileStream = fs.createReadStream(filePath); // crear un flujo de lectura del archivo
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${file.name}"`);
    fileStream.pipe(res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}


async function deleteFileById(req, res) {
  try {
    const fileId = req.params.id;
    const fileToDelete = await Pdf.findOne({ where: { id: fileId } });
    if (!fileToDelete) {
      return res.status(404).json({ message: 'Archivo no encontrado' });
    }
    const filePath = getFilePath(fileToDelete.data);
    console.log(filePath)
    fs.unlinkSync(filePath);
    await fileToDelete.destroy();
    return res.status(200).json({ message: 'Archivo eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar el archivo' });
  }
}


module.exports = {
  getFiles,
  uploadFile,
  deleteFileById,
  getAllFiles,
  getFilessByName,
  downloadFile
};
