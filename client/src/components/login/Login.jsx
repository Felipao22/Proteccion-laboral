import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { getActiveUser, cleanUsers, activateUser, login } from "../../redux/actions";
import NavBar from "../navbar/NavBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Swal from "sweetalert2";
import swal from 'sweetalert';
import "./Login.css";
import { Form } from "react-bootstrap";
export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  console.log(user)

  const [input, setInput] = useState({
    email: "",
    password: "",
    active: true,
  });

  useEffect(() => {
    dispatch(getActiveUser());
  }, [dispatch]);

  const validateUsers = (input) => {
    const errors = {};

    if (
      !input.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)
    ) {
      errors.email = "Debe escribir una direccion de email correcta.";
    } else {
      errors.email = "✔ Email valido";
    }
    if (
      !input.password ||
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.password)
    ) {
      errors.password = "La contraseña debe tener entre 8 y 16 caracteres";
    } else {
      errors.password = "✔ Contraseña valida";
    }

    return errors;
  };

  useEffect(() => {
      // if (user === "clean") return;
      // if (user === "Usuario creado") return;
      if (user === "Usuario no encontrado") {
        Swal.fire({
          icon: "error",
          title: "Usuario no encontrado",
          text: "El email parece no estar registrado",
        });
        setInput({
          email: "",
          password: "",
        });
        dispatch(cleanUsers());
        history.push("/login");
        return;
      } else if (user === "Datos incorrectos") {
        Swal.fire({
          icon: "error",
          title: "Datos incorrectos",
          text: "El email o la contraseña no son correctas",
        });
        setInput({
          email: "",
          password: "",
        });
        dispatch(cleanUsers());
        return;
      } else if (user === "Usuario bloqueado") {
        Swal.fire({
          icon: "error",
          title: "Su cuenta ha sido bloqueda por el administrador",
          text: "Para más información comuniquese con",
        });
      } else if (user?.active === false) {
        swal(
          "Tu cuenta se encuentra desactivada, ¿deseas activarla para iniciar sesión?",
          {
            buttons: ["No", "Si"],
          }
        ).then((value) => {
          if (value) {
            swal("Buen trabajo!", "Entró al sistema correctamente!", "success");
            dispatch(activateUser(user.email));
            setInput({
              email: "",
              password: "",
            });
            history.push("/user");
          } else {
            history.push("/");
          }
        });
        Swal.fire({
          title:
            "Tu cuenta se encuentra desactivada.",
          text: "¿Deseas activarla para iniciar sesión?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "Buen trabajo!",
              "Entró al sistema correctamente!",
              "success"
            );
            dispatch(activateUser(user.email));
            setInput({
              email: "",
              password: "",
            });
            history.push("/user");
          } else {
            history.push("/");
          }
        });
        // const swalWithBootstrapButtons = Swal.mixin({
        //   customClass: {
        //     confirmButton: 'btn btn-success',
        //     cancelButton: 'btn btn-danger'
        //   },
        //   buttonsStyling: false
        // })

        // swalWithBootstrapButtons.fire({
        //   title: 'Are you sure?',
        //   text: "You won't be able to revert this!",
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonText: 'Yes, delete it!',
        //   cancelButtonText: 'No, cancel!',
        //   reverseButtons: true
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     swalWithBootstrapButtons.fire(
        //       'Deleted!',
        //       'Your file has been deleted.',
        //       'success'
        //     )
        //   } else if (
        //     /* Read more about handling dismissals below */
        //     result.dismiss === Swal.DismissReason.cancel
        //   ) {
        //     swalWithBootstrapButtons.fire(
        //       'Cancelled',
        //       'Your imaginary file is safe :)',
        //       'error'
        //     )
        //   }
        // })
      } else if (user.active === true) {
        Swal.fire(
          "Buen trabajo!",
          "Entró al sistema correctamente!",
          "success"
        );
        setInput({
          email: "",
          password: "",
        });
        history.push("/user");
      }
    // }
  }, [user]);


  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateUsers({
        ...input,
        [e.target.name]: e.target.name,
      })
    );
  }

  function handleSubmitLoginUser(e) {
    e.preventDefault();
    if (
      input.email !== "" &&
      input.password !== "" &&
      input.password.length >= 8 &&
      input.password.length <= 16
    ) {
      dispatch(login(input));
      setInput({
        email: "",
        password: "",
   
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ups ha ocurrido un error',
        text: 'Verifica cumplir con los requisitos',
      })
    }
  }

  return (
    <div>
      <NavBar />

        <Form onSubmit={(e) => handleSubmitLoginUser(e)}>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow >
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Correo electrónico"
              name="email"
              value={input.email}
              id="email"
              type="email"
              size="lg"
              onChange={(e) => handleChange(e)}
              required
            />
            {errors.email && <small>{errors.email}</small>}
            <MDBInput
              wrapperClass="mb-4"
              label="Contraseña"
              id="password"
              type="password"
              name="password"
              size="lg"
              value={input.password}
              onChange={(e) => handleChange(e)}
              required
            />
            {errors.password && <small>{errors.password}</small>}

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Recordar"
              />
              <a href="!#">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className="btn" size="lg">
              Ingresar
            </button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        </Form>
      {/* <form onSubmit={(e) => handleSubmitLoginUser(e)}>
        <input  label="Correo electrónico"
              name="email"
              value={input.email}
              id="email"
              type="email"
              size="lg"
              onChange={(e) => handleChange(e)}
              required/>
        <input
        label="Contraseña"
        id="password"
        type="password"
        name="password"
        size="lg"
        value={input.password}
        onChange={(e) => handleChange(e)}
        required
        />
        <button type="submit">ingresar</button>
      </form> */}
    </div>
  );
}
