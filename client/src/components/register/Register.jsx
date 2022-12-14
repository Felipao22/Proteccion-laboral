import React, { useState, useEffect } from "react";
import bgImg from "../../assets/img1.jpg";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {createUser, getAllProvinces, getAllCities} from '../../redux/actions/index'
import "./Register.css";
import NavBar from "../navbar/NavBar";
import { Form, Input } from 'antd';
export default function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  let PROVINCES = useSelector((state) => state.provinces);
  console.log(PROVINCES)
  PROVINCES = PROVINCES.sort((a, b) => {
    if (a.nombre > b.nombre) return 1;
    if (b.nombre > a.nombre) return -1;
    return 0;
  })
  const gState = useSelector((state) => state);

  let CITIES = useSelector((state) => state.cities);
  CITIES = CITIES.sort((a, b) => {
    if (a.nombre > b.nombre) return 1;
    if (b.nombre > a.nombre) return -1;
    return 0;
  })


  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nombreEmpresa: "",
    cuit: "",
    nombreEstablecimiento: "",
    provincia: "",
    ciudad: "",
    direccion: "",
    provincia: "",
    // logo: "",
    telefono: "",
    active: true,
  });

  const [error, setError] = useState({
    erroremail: "",
    errorpassword: "",
    errorconfirmPassword: "",
    errornombreEmpresa: "",
    errorcuit: "",
    errornombreEstablecimiento: "",
    errorprovincia: "",
    errorciudad: "",
    errordireccion: "",
    // errorlogo: "",
    errortelefono: "",
  });

  useEffect(() => {
    validate();
  }, [
    input.email,
    input.password,
    input.confirmPassword,
    input.nombreEmpresa,
    input.cuit,
    input.nombreEstablecimiento,
    input.provincia,
    input.ciudad,
    input.direccion,
    // input.logo,
    input.telefono,
  ]);

  const validate = () => {
    let erroremail = "";
    let errorpassword = "";
    let errorconfirmPassword = "";
    let errornombreEmpresa = "";
    let errorcuit = "";
    let errornombreEstablecimiento = "";
    let errorprovincia = "";
    let errorciudad = "";
    let errordireccion = "";
    // let errorlogo = "";
    let errortelefono = "";
    if (
      !input.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email) ||
      input.email[0] === " "
    ) {
      erroremail = "Escriba un correo electr??nico v??lido.";
    } else {
      erroremail = "Correo electr??nico v??lido.";
    }
    if (
      !input.password ||
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.password)
    ) {
      errorpassword =
        "La contrase??a debe tener entre 8 y 16 car??cteres, al menos un d??gito, al menos una min??scula y al menos una may??scula.";
    } else {
      errorpassword = "Contrase??a v??lida.";
    }
    if (
      input.confirmPassword === "" ||
      input.password !== input.confirmPassword
    ) {
      errorconfirmPassword = "Las contrase??as no coinciden.";
    } else {
      errorconfirmPassword = "Hecho!";
    }
    if (
      !input.nombreEmpresa ||
      !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.nombreEmpresa) ||
      input.nombreEmpresa[0] === " "
    ) {
      errornombreEmpresa = "La primera letra debe estar en may??scula.";
    } else {
      errornombreEmpresa = "Hecho!";
    }
    if (
      !input.cuit ||
      !/^[1-9]\d*(\.\d+)?$/.test(input.cuit) ||
      input.cuit[0] === " "
    ) {
      errorcuit = "Solo n??meros";
    } else {
      errorcuit = "Hecho!";
    }
    if (!input.nombreEstablecimiento) {
      errornombreEstablecimiento = "La primera letra debe estar en may??scula.";
    } else {
      errornombreEstablecimiento = "Hecho!";
    }
    if (!input.provincia) {
      errorprovincia = "Seleccione una provincia.";
    } else {
      errorprovincia = "Hecho!";
    }
    if (!input.ciudad) {
      errorciudad = "Seleccione una ciudad.";
    } else {
      errorciudad = "Hecho!";
    }
    if (
      !input.direccion ||
      !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.direccion) ||
      input.direccion[0] == " "
    ) {
      errordireccion = "La primera letra debe estar en may??scula.";
    } else {
      errordireccion = "Hecho!";
    }
    if (
      !input.telefono ||
      !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(input.telefono) ||
      input.telefono[0] == "" ||
      input.telefono.length < 10
    ) {
      errortelefono = "";
    } else {
      errortelefono = "Hecho!";
    }

    setError((prevInput) => {
      return {
        erroremail: erroremail,
        errorpassword: errorpassword,
        errorconfirmPassword: errorconfirmPassword,
        errornombreEmpresa: errornombreEmpresa,
        errorcuit: errorcuit,
        errornombreEstablecimiento: errornombreEstablecimiento,
        errorprovincia: errorprovincia,
        errorciudad: errorciudad,
        errordireccion: errordireccion,
        // errorlogo: errorlogo,
        errortelefono: errortelefono,
      };
    });
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput((prevInput) => {
      return {
        ...prevInput,
        [event.target.name]: event.target.value,
      };
    });
  };

  function handleChange(e) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      Swal.fire(
        "Las contrase??as no coinciden",
        "Por favor vuelva a ingresar su contrase??a",
        "error"
      );
      return;
    }
    if (
      input.email !== "" &&
      input.password !== "" &&
      input.password === input.confirmPassword &&
      input.password.length >= 8 &&
      input.password.length <= 16 &&
      input.confirmPassword.length >= 8 &&
      input.confirmPassword.length <= 16 &&
      input.nombreEmpresa !== "" &&
      input.cuit !== "" &&
      input.direccion !== "" &&
      input.provincia !== "" &&
      input.ciudad !== "" &&
      input.nombreEstablecimiento !== "" &&
      input.telefono !== "" /* &&
          input.telefono.length <= 10 */
    ) {
      dispatch(createUser(input))
      Swal.fire("Buen trabajo", "Usuario creada con exito", "success");
      history.push("/");
    } else {
      Swal(
        "Faltan datos por llenar",
        "Por favor ingrese todos los datos",
        "error"
      );
    }
  }

  useEffect(() => {
    dispatch(getAllProvinces());
    dispatch(getAllCities());
  }, [dispatch]);


  return (
    <section>
      <NavBar />
      <div class="register" >
        <div className="col-1">
          <h2>Registrarse</h2>
          <span>Registre su empresa</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="mail">Ingrese su correo electr??nico:</label>
            <input
              type="email"
              value={input.email}
              name="email"
              id="email"
              required
              placeholder="mail@example.com"
              onChange={(e) => handleChange(e)}
            />
            {error.erroremail && <small>{error.erroremail}</small>}
            <label htmlFor="password">Ingrese su contrase??a:</label>
            <input
              type="password"
              placeholder="Contrase??a"
              onChange={(e) => handleChange(e)}
              value={input.password}
              name="password"
              id="password"
              required
            />
            {error.errorpassword && <small>{error.errorpassword}</small>}
            <label htmlFor="confirmpwd">Confirme su contrase??a:</label>
            <input
              type="password"
              placeholder="Confirmar contrase??a"
              onChange={(e) => handleChange(e)}
              value={input.confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
              required
            />
            {error.errorconfirmPassword && <small>{error.errorconfirmPassword}</small>}
            <label htmlFor="namebusiness">
              Ingrese el nombre de la empresa:
            </label>
            <input
              type="text"
              placeholder="Ingrese el nombre de la empresa"
              onChange={(e) => handleChange(e)}
              value={input.nombreEmpresa}
              name="nombreEmpresa"
              id="nombreEmpresa"
              required
            />
            {error.errornombreEmpresa && <small>{error.errornombreEmpresa}</small>}
            <label htmlFor="namebusiness">
              Ingrese el nombre del establecimiento:
            </label>
            <input
              type="text"
              placeholder="Ingrese el nombre del establecimiento"
              onChange={(e) => handleChange(e)}
              value={input.nombreEstablecimiento}
              name="nombreEstablecimiento"
              id="nombreEstablecimiento"
              required
            />
            {error.errornombreEstablecimiento && <small>{error.errornombreEstablecimiento}</small>}
            <label htmlFor="cuit">Ingrese su n??mero de CUIT:</label>
            <input
              type="number"
              value={input.cuit}
              name="cuit"
              id="cuit"
              required
              placeholder="Ingrese su n??mero de Cuit"
              onChange={(e) => handleChange(e)}
            />
            {error.errorcuit && <small>{error.errorcuit}</small>}
            <label htmlFor="provincia">Provincia:</label>
            <select
                  name="provincia"
                  value={input.provincia}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="">{ } </option>
                  {PROVINCES?.map((e) => (
                    <option key={e.id} value={e.nombre}>
                      {e.nombre}
                    </option>
                  ))}
                </select>
            {error.errorprovincia && <small>{error.errorprovincia}</small>}
            <label htmlFor="ciudad">Ciudad:</label>
            <select
              name="ciudad"
              value={input.ciudad}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="">{} </option>
              {
                    input.provincia
                      ? CITIES?.filter((e) => e.provinceId === gState.provinces?.filter((e) => e.nombre === input.provincia)[0].id
                        )
                        ?.map((e) => (
                          <option key={e.id} name={e.nombre} value={e.nombre}>
                            {e.nombre}
                          </option>
                        ))
                      : ""
                  }
            </select>
            {error.errorciudad && <small>{error.errorciudad}</small>}
            <label htmlFor="adress">Direcci??n:</label>
            <input
              type="text"
              value={input.direccion}
              name="direccion"
              id="direccion"
              required
              placeholder="Ingrese su direcci??n"
              onChange={(e) => handleChange(e)}
            />
            {error.errordireccion && <small>{error.errordireccion}</small>}
            <label htmlFor="telefono">Tel??fono:</label>
            <input
              type="text"
              value={input.telefono}
              name="telefono"
              id="telefono"
              required
              placeholder="Ingresa tu n??mero de contacto"
              onChange={(e) => handleChange(e)}
            />
            {error.errortelefono && <small>{error.errortelefono}</small>}
            <button className="btn">Registrarse</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
