const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pdf",
    {
      type: {
        type: DataTypes.STRING
        },
        name: {
        type: DataTypes.STRING
        },
        data: {
        type: DataTypes.STRING
        },
        size:{
          type:DataTypes.INTEGER
        }
    }
  );
};