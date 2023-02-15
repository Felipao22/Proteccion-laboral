import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBCheckbox } from "mdb-react-ui-kit";
import {
  getActiveUser,
  cleanUsers,
  activateUser,
  login,
} from "../../redux/actions";
import NavBar from "../navbar/NavBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Swal from "sweetalert2";
import "./Login.css";
import { Form } from "react-bootstrap";
import UsePasswordToggle from "../../hooks/UsePasswordToggle";
import log from '../../assets/authentication.png'

export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [PasswordInputType, ToggleIcon] = UsePasswordToggle();

  const VALIDATE_PASSWORD = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  const VALIDATE_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

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

    if (!input.email || !VALIDATE_EMAIL.test(input.email)) {
      errors.email = "Debe escribir una direccion de email correcta.";
    } else {
      errors.email = "✔ Email valido";
    }
    if (!input.password || !VALIDATE_PASSWORD.test(input.password)) {
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
      Swal.fire(
        "Tu cuenta se encuentra desactivada, ¿deseas activarla para iniciar sesión?",
        {
          buttons: ["No", "Si"],
        }
      ).then((value) => {
        if (value) {
          Swal.fire("Buen trabajo!", "Entró al sistema correctamente!", "success");
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
        title: "Tu cuenta se encuentra desactivada.",
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
    } else if (user.active === true) {
      Swal.fire("Buen trabajo!", "Has ingresado al sistema correctamente!", "success");
      setInput({
        email: "",
        password: "",
      });
      history.push("/user");
    }
    // }
  }, [user, dispatch, history]);

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
        icon: "error",
        title: "Ups ha ocurrido un error",
        text: "Verifica cumplir con los requisitos",
      });
    }
  }

  return (
    <div>
      <NavBar />

      <Form onSubmit={(e) => handleSubmitLoginUser(e)}>
        <MDBContainer fluid className="p-3 my-5">
          <MDBRow>
            <MDBCol col="10" md="6">
              <img
                src={log}
                className="img-fluid"
                alt="Phone"
                style={{marginTop:'-40px'}}
              />
            </MDBCol>

            <MDBCol col="4" md="6">
              <div className="input-text">
                <input
                  className="input-email"
                  type="email"
                  placeholder="Ingrese su mail"
                  name="email"
                  value={input.email}
                  id="email"
                  onChange={(e) => handleChange(e)}
                />
                <i className="fa fa-envelope"></i>
              </div>
              {errors.email && <small>{errors.email}</small>}
              <div className="input-text">
                <input
                  className="input-password"
                  type={PasswordInputType}
                  placeholder="Ingrese su contraseña"
                  name="password"
                  id="password"
                  value={input.password}
                  onChange={(e) => handleChange(e)}
                  autoComplete='off'
                />
                <i className="fa fa-lock"></i>
                <i className="eye">{ToggleIcon}</i>
              </div>
              {errors.password && <small>{errors.password}</small>}

              <div className="d-flex justify-content-between mx-4 mb-4 mt-4 label-font">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Recordar"
                />
                <a href="!#">¿Olvidaste tu contraseña?</a>
              </div>

              <button type="submit" className="boton-login" size="lg">
                Ingresar
              </button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Form>
    </div>
  );
}
