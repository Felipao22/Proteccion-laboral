import React, { useState, useEffect } from "react";
import bgImg from "../../assets/img1.jpg";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import "./Register.css";
import NavBar from "../navbar/NavBar";
import { Form, Input } from 'antd';
export default function Register() {
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    cuit: "",
    establishment: "",
    province: "",
    cityId: "",
    address: "",
    province: "",
    logo: "",
    phone: "",
    active: true,
  });

  const [error, setError] = useState({
    erroremail: "",
    errorpassword: "",
    errorconfirmPassword: "",
    errorbusinessName: "",
    errorcuit: "",
    errorestablishment: "",
    errorprovince: "",
    errorcityId: "",
    erroraddress: "",
    errorlogo: "",
    errorphone: "",
  });

  useEffect(() => {
    validate();
  }, [
    input.email,
    input.password,
    input.confirmPassword,
    input.businessName,
    input.cuit,
    input.establishment,
    input.province,
    input.cityId,
    input.address,
    input.logo,
    input.phone,
  ]);

  const validate = () => {
    let erroremail = "";
    let errorpassword = "";
    let errorconfirmPassword = "";
    let errorbusinessName = "";
    let errorcuit = "";
    let errorestablishment = "";
    let errorprovince = "";
    let errorcityId = "";
    let erroraddress = "";
    let errorlogo = "";
    let errorphone = "";
    if (
      !input.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email) ||
      input.email[0] === " "
    ) {
      erroremail = "Escriba un correo electrónico válido.";
    } else {
      erroremail = "Correo electrónico válido.";
    }
    if (
      !input.password ||
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.password)
    ) {
      errorpassword =
        "La contraseña debe tener entre 8 y 16 carácteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.";
    } else {
      errorpassword = "Contraseña válida.";
    }
    if (
      input.confirmPassword === "" ||
      input.password !== input.confirmPassword
    ) {
      errorconfirmPassword = "Las contraseñas no coinciden.";
    } else {
      errorconfirmPassword = "Hecho!";
    }
    if (
      !input.businessName ||
      !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.businessName) ||
      input.businessName[0] === " "
    ) {
      errorbusinessName = "La primera letra debe estar en mayúscula.";
    } else {
      errorbusinessName = "Hecho!";
    }
    if (
      !input.cuit ||
      !/^[1-9]\d*(\.\d+)?$/.test(input.cuit) ||
      input.cuit[0] === " "
    ) {
      errorcuit = "Solo números";
    } else {
      errorcuit = "Hecho!";
    }
    if (!input.establishment) {
      errorestablishment = "La primera letra debe estar en mayúscula.";
    } else {
      errorestablishment = "Hecho!";
    }
    if (!input.province) {
      errorprovince = "Seleccione una provincia.";
    } else {
      errorprovince = "Hecho!";
    }
    if (!input.cityId) {
      errorcityId = "Seleccione una ciudad.";
    } else {
      errorcityId = "Hecho!";
    }
    if (
      !input.address ||
      !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.address) ||
      input.address[0] == " "
    ) {
      erroraddress = "La primera letra debe estar en mayúscula.";
    } else {
      erroraddress = "Hecho!";
    }
    if (
      !input.phone ||
      !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(input.phone) ||
      input.phone[0] == "" ||
      input.phone.length < 10
    ) {
      errorphone = "";
    } else {
      errorphone = "Hecho!";
    }

    setError((prevInput) => {
      return {
        erroremail: erroremail,
        errorpassword: errorpassword,
        errorconfirmPassword: errorconfirmPassword,
        errorbusinessName: errorbusinessName,
        errorcuit: errorcuit,
        errorestablishment: errorestablishment,
        errorprovince: errorprovince,
        errorcityId: errorcityId,
        erroraddress: erroraddress,
        errorlogo: errorlogo,
        errorphone: errorphone,
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
        "Las contraseñas no coinciden",
        "Por favor vuelva a ingresar su contraseña",
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
      input.businessName !== "" &&
      input.cuit !== "" &&
      input.address !== "" &&
      input.province !== "" &&
      input.cityId !== "" &&
      input.establishment !== "" &&
      input.phone !== "" /* &&
          input.phone.length <= 10 */
    ) {
      Swal.fire("Buen trabajo", "Empresa creada con exito", "success");
      history.push("/");
    } else {
      Swal(
        "Faltan datos por llenar",
        "Por favor ingrese todos los datos",
        "error"
      );
    }
  }


  return (
    <section>
      <NavBar />
      <div className="register">
        <div className="col-1">
          <h2>Registrarse</h2>
          <span>Registre su empresa</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="mail">Ingrese su correo electrónico: (*)</label>
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
            <label htmlFor="password">Ingrese su contraseña: (*)</label>
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => handleChange(e)}
              value={input.password}
              name="password"
              id="password"
              required
            />
            {error.errorpassword && <small>{error.errorpassword}</small>}
            <label htmlFor="confirmpwd">Confirme su contraseña: (*)</label>
            <input
              type="password"
              placeholder="Confirmar contraseña"
              onChange={(e) => handleChange(e)}
              value={input.confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
              required
            />
            {error.errorconfirmPassword && <small>{error.errorconfirmPassword}</small>}
            <label htmlFor="namebusiness">
              Ingrese el nombre de la empresa: (*)
            </label>
            <input
              type="text"
              placeholder="Ingrese el nombre de la empresa"
              onChange={(e) => handleChange(e)}
              value={input.businessName}
              name="businessName"
              id="businessName"
              required
            />
            {error.errorbusinessName && <small>{error.errorbusinessName}</small>}
            <label htmlFor="namebusiness">
              Ingrese el nombre del establecimiento: (*)
            </label>
            <input
              type="text"
              placeholder="Ingrese el nombre del establecimiento"
              onChange={(e) => handleChange(e)}
              value={input.establishment}
              name="establishment"
              id="establishment"
              required
            />
            {error.errorestablishment && <small>{error.errorestablishment}</small>}
            <label htmlFor="cuit">Ingrese su número de CUIT: (*)</label>
            <input
              type="number"
              value={input.cuit}
              name="cuit"
              id="cuit"
              required
              placeholder="Ingrese su número de Cuit"
              onChange={(e) => handleChange(e)}
            />
            {error.errorcuit && <small>{error.errorcuit}</small>}
            <label htmlFor="province">Provincia: (*)</label>
            <select
              name="province"
              value={input.province}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="">{} </option>
            </select>
            {error.errorprovince && <small>{error.errorprovince}</small>}
            <label htmlFor="cityId">Ciudad: (*)</label>
            <select
              name="cityId"
              value={input.cityId}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="">{} </option>
            </select>
            {error.errorcityId && <small>{error.errorcityId}</small>}
            <label htmlFor="adress">Dirección: (*)</label>
            <input
              type="text"
              value={input.address}
              name="address"
              id="address"
              required
              placeholder="Ingrese su dirección"
              onChange={(e) => handleChange(e)}
            />
            {error.erroraddress && <small>{error.erroraddress}</small>}
            <label htmlFor="phone">Teléfono: (*)</label>
            <input
              type="text"
              value={input.phone}
              name="phone"
              id="phone"
              required
              placeholder="Ingresa tu número de contacto"
              onChange={(e) => handleChange(e)}
            />
            {error.errorphone && <small>{error.errorphone}</small>}
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
