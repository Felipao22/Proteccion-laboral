const axios = require ('axios');
const {User } = require ('../db')

//Funcion del GET / GET ALL USERS
async function getUsers (){
    try {
       const dbUser = await User.findAll();
       return dbUser;
    }catch(e){
        return (`error:${e.message}`)
    }
}

// Funcion del GET / GET ALL USERS
async function getUserByEmail (email){
    try {
        const userByEmail = await User.findByPk (email);      
        return userByEmail;  
    }catch(e){
        return "No se encontró el usuario solicitado";
    }
}

module.exports = {
    getUsers,
    getUserByEmail
}