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
      allowNull: false
    },     
    nombreEstablecimiento: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    cuit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
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
