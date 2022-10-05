const { Router } = require('express');
const { getUsers, getUserByEmail} = require('../controllers/userControllers')
const {User} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

//GET / GET ALL USERS
// http://localhost:3001/user
router.get("/", async (req, res) => {
    try {
      const dbUsers = await getUsers();
      res.status(201).send(dbUsers);
    } catch (e) {
      res.send("error:" + e.message);
    }
  });

  router.get("/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const dbUserByEmail = await getUserByEmail(email);
      res.status(201).send(dbUserByEmail);
    } catch (e) {
      res.send("error:" + e.message);
    }
  });

  //PUT / baneo de User (SOLO LO PUEDE HACER ADMIN)
// http://localhost:3001/user/baneo/:email
// router.put("/baneo/:email", verifyToken, async (req, res) => {
//     const email=req.params.email; 
//     //console.log(`email ${email} de la ruta put`)
//     //Agrego verificacion de token, userLogin viene de la fc verifyToken
//     //si el usuario es admin entra, xq el admin puede banear, nadie mas puede.
//     //console.log(`req.userLogin.isAdmin de la ruta put baneo ${req.userLogin.isAdmin}`);
//     if(req.userLogin.isAdmin){ 
//       try {
//         await User.update({deleted: true},{
//           where: {
//               email:email,
//           }
//       })
//       res.status(200).send('Se bloqueo el usuario correctamente');
//       } catch (e) {
//         res.send("error:" + e.message);
//       } } else{
//       res.status(403).json(`No tiene permiso para bloquear esta cuenta usuario`);
//     }   
//   });

router.post("/", async (req, res) => {
    try {
      const newUser = await User.findOrCreate({
        where: {
          email: req.body.email,
          nombreEmpresa: req.body.nombreEmpresa,
          nombreEstablecimiento: req.body.nombreEstablecimiento,
          cuit: req.body.cuit,
          telefono: req.body.telefono,
          provincia: req.body.provincia,
          ciudad: req.body.ciudad,
          direccion: req.body.direccion,
          password: req.body.password
        }
      });

    //   // nodemailer
    //   const transporter = nodemailer.createTransport(sendgridTransport({
    //         auth: {
    //            api_key: process.env.CREDENTIAL,
    //         },
    //      }))

    //      await transporter.sendMail({
    //         to: req.body.email,
    //         from: "pruebabringit@gmail.com",
    //         subject: "Correo recibido satisfactoriamente",
    //         html: `<h3>Bienvenido a Bring It App, ${req.body.name}!</h3>
    //           <p>Estamos muy contentos de que formes parte de esta gran comunidad
    //           te invito a que te suscribas a nuestra newsletter
    //           <br />
    //           para recibir ofertas interesantes a futuro
    //           </p>
    //           `,
    //      });

      res.status(201).send(newUser[1] ? "Usuario creado" : "El usuario ya existe");
    } catch (e) {
      res.send("error:" + e);
    }
  // }
});




module.exports = router;