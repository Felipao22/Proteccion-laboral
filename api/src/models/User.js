const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    email: {
      type: DataTypes.STRING, 
      allowNull: false,
      primaryKey: true,  
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
  },
    nombreEmpresa: {
      type: DataTypes.STRING,
      allowNull: true
    },     
    nombreEstablecimiento: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    cuit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {

    timestamps: false
  });
};
