const { Router } = require("express");
const { getUsers, getUserByEmail } = require("../controllers/userControllers");
const { User } = require("../db");
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
// router.put("/:email", async (req, res) => {
//     const {email}= req.params;
//       try {
//         const modification = req.body; //json con atributos a modificar y nuevos valores
//         const body = await User.update(modification, {
//             where: { email: email }
//         });
//         // const foundUser = await User.findByPk(email);
//         // await foundUser.setUsers(modification.UserById);
//         // res.json({message: 'Usuario modificado correctamente', body})
//         res.status(201).send(`${body} Usuario modificado`)
//       } catch (e) {
//         res.send("error:" + e.message);
//       }
//   });
router.put("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const modification = req.body; // JSON con atributos a modificar y nuevos valores
    const result = await User.update(modification, {
      where: { email: email },
    });
    if (result[0] === 1) {
      res.status(200).send("Usuario modificado");
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  } catch (e) {
    res.status(500).send("Error: " + e.message);
  }
});

//PUT / baneo de User (SOLO LO PUEDE HACER ADMIN)
// http://localhost:3001/user/baneo/:email
router.put("/baneo/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    const newActiveState = user.active === true ? false : true;

    await User.update({ active: newActiveState }, { where: { email } });

    const message = newActiveState
      ? "Se activó el usuario correctamente"
      : "El usuario ha sido bloqueado exitosamente";
    return res.status(200).send(message);
  } catch (e) {
    return res.status(500).send("Error: " + e.message);
  }
});

// http://localhost:3001/user/baneo/:email
router.put("/activar/:email", async (req, res) => {
  const { email } = req.params;
  
  try {
    const user = await User.findOne({ where: { email } });
    const activeState = user.active === false;

    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    else if(activeState){
      await User.update({ active: true }, { where: { email } });
    }



    const message = "Se activó el usuario correctamente"
    
    return res.status(200).send(message);
  } catch (e) {
    return res.status(500).send("Error: " + e.message);
  }
});

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
        password: req.body.password,
      },
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

    res
      .status(201)
      .send(newUser[1] ? "Usuario creado" : "El usuario ya existe");
  } catch (e) {
    res.send("error:" + e);
  }
  // }
});

//POST / LOG IN para ingreso de usuario
// http://localhost:3001/user/login
// router.post("/login", async (req, res) => {
//   try {
//     const userLogin = await User.findByPk(req.body.email);
//     if (!userLogin) return res.status(201).send("Usuario no encontrado");
//     const hashedPassword = CryptoJS.AES.decrypt(userLogin.password, process.env.PASS_SEC);
//     const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
//     if(originalPassword !== req.body.password) return res.status(201).send(`Datos incorrectos`);
//     if (userLogin.deleted) return res.status(201).send('Usuario bloqueado');
//     const accessToken = jwt.sign({
//       email: userLogin.email,
//       isBusiness: userLogin.isBusiness,
//       isAdmin: userLogin.isAdmin
//     }, process.env.JWT_SEC, { expiresIn: '30m' });

//     const { password, ...others } = userLogin;

//     res.status(200).json({others, accessToken});
//   } catch (error) {
//     res.status(404).send(`error:${error.message}`);
//   }
// });

router.post("/login", async (req, res) => {
  const { email, password, active } = req.body;
  try {
    const userLogin = await User.findByPk(email);
    if (!userLogin) return res.status(201).send("Usuario no encontrado");
    else {
      if (
        userLogin.email === email &&
        userLogin.password === password &&
        userLogin.active === true
      ) {
        return res.status(201).json(userLogin);
      } else {
        return res.status(201).send("Datos incorrectos");
      }
    }
  } catch (error) {
    res.status(404).send(`error:${e.message}`);
  }
});

module.exports = router;
