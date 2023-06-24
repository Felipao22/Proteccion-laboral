const axios = require ('axios');
const {User, File } = require ('../db');
const jsonUsers = require('../json/users.json');
const users = jsonUsers.usuarios

//Funcion del GET / GET ALL USERS
async function getUsers (){
    try {
       const foundUsers = await User.findAll({
        include: [{ model: File }],
       });
       return foundUsers;
    }catch(e){
        return (`No se encontraron usuarios cargados en la base de datos, ${e.message}`)
    }
}

// Funcion del GET / GET ALL USERS
async function getUserByEmail (email){
    try {
        const foundUser = await User.findByPk (email,{
            include: [{ model: File }]
        });      
        return foundUser;  
    }catch(e){
        return "No se encontró el usuario solicitado";
    }
}

  // SAVE DATA FROM JSON TO DB
  const apiUsers = async () => {
    try {
      const foundUsers = await User.findOne();
      if (!foundUsers) {
        await User.bulkCreate(users);
        console.log(`Users saved successfully!`);
      } else {
        console.log(`Users already loaded`);
      }
    } catch (error) {
      console.log(`Error at apiUsers function: ${error}`);
    }
  };

module.exports = {
    getUsers,
    getUserByEmail,
    apiUsers
}