const { DataTypes} = require('sequelize');
const uniqid = require ('uniqid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    userId:{
      type: DataTypes.STRING,
      defaultValue: () => uniqid(),
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false,
      primaryKey: true,  
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
  },
    nombreEmpresa: {
      type: DataTypes.STRING,
    },     
    nombreEstablecimiento: {
        type: DataTypes.STRING,
    }, 
    cuit: {
      type: DataTypes.STRING,
    },
    provincia: {
      type: DataTypes.STRING,
    },
    ciudad: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,

    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    active: {
      type: DataTypes.BOOLEAN,

      defaultValue: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, );
};
