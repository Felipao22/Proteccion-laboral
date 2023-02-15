import React, { useState, useEffect } from "react";
import bgImg from "../../assets/img1.jpg";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {createUser, getAllProvinces, getAllCities} from '../../redux/actions/index'
import "./Register.css";
import NavBar from "../navbar/NavBar";


export default function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  let PROVINCES = useSelector((state) => state.provinces);
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

  const VALIDATE_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const VALIDATE_NOMBRE_EMPRESA = /^[A-Z]+[A-Za-z0-9\s]+$/g; 
  const VALIDATE_CUIT = /^[0-9]{11}$/;
  const VALIDATE_NOMBRE_ESTABLECIMIENTO = /^[A-Z]+[A-Za-z0-9\s]+$/g;
  const VALIDATE_DIRECCION = /^[A-Z]+[A-Za-z0-9\s]+$/g;
  const VALIDATE_TELEFONO = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g; 



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
    errortelefono: "",
  });

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
    let errortelefono = "";


    if(!input.email){
      erroremail = "";
    } else if(!VALIDATE_EMAIL.test(input.email)){
      erroremail = 'Escriba un correo electrónico válido.'
    } else{  
        erroremail = 'Correo electrónico válido.'
    }
    if (
      !input.password ||
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.password)
    ) {
      errorpassword =
      <ul className="lista">
        <li>
        La contraseña debe tener entre 8 y 16 carácteres.
        </li>
        <li>
        Al menos un dígito.
        </li>
        <li>
        Al menos una minúscula.
        </li>
        <li>
        Y al menos una mayúscula.
        </li>
      </ul>
    } else {
      errorpassword = "Contraseña válida.";
    }
    if(input.confirmPassword === "")
   { errorconfirmPassword = "";}
    else if(input.password !== input.confirmPassword){
      errorconfirmPassword = "Las contraseñas no coinciden.";
    } else {
      errorconfirmPassword = "Hecho!";
    }
    if (!input.nombreEmpresa){
        errornombreEmpresa = "";
      } else if(!VALIDATE_NOMBRE_EMPRESA.test(input.nombreEmpresa)){ 
      errornombreEmpresa = "La primera letra debe estar en mayúscula.";
    } else {
      errornombreEmpresa = "Hecho!";
    }

    //falta validar cantidad de numeros 11 y sin guión.
    if (!input.cuit){
      errorcuit= '';
    }else if(!VALIDATE_CUIT.test(input.cuit)){
      errorcuit = "Deben ser 11 números."
    }else {
      errorcuit = "Hecho!";
    }
    
    if(!input.nombreEstablecimiento){
      errornombreEstablecimiento= '';
    }else if(!VALIDATE_NOMBRE_ESTABLECIMIENTO.test(input.nombreEstablecimiento)){
      errornombreEstablecimiento = "La primera letra debe estar en mayúscula.";
    }else {
      errornombreEstablecimiento = "Hecho!";
    }
    if (!input.provincia) {
      errorprovincia = "";
    } else {
      errorprovincia = "Hecho!";
    }
    if (!input.ciudad) {
      errorciudad = "";
    } else {
      errorciudad = "Hecho!";
    }

    if(!input.direccion){
      errordireccion = '';
    }else if(!VALIDATE_DIRECCION.test(input.direccion)){
      errordireccion = "La primera letra debe estar en mayúscula.";
    } else{
      errordireccion = "Hecho!";
    }


    if (!input.telefono) {
      errortelefono = "";
    } else if( !VALIDATE_TELEFONO.test(input.telefono) ||
    input.telefono[0] === "" ||
    input.telefono.length < 10){
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
        errortelefono: errortelefono,
      };
    });
  };

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
    input.telefono,
  ]);
 

  

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
      input.nombreEmpresa !== "" &&
      input.cuit !== "" &&
      input.direccion !== "" &&
      input.provincia !== "" &&
      input.ciudad !== "" &&
      input.nombreEstablecimiento !== "" &&
      input.telefono !== ""
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
      <div className="register" >
        <div className="col-1">
          <h2>Registrarse</h2>        
          <form
            id="form"
            className="flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="mail">Ingrese su correo electrónico:</label>
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
            <label htmlFor="password">Ingrese su contraseña:</label>
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => handleChange(e)}
              value={input.password}
              name="password"
              id="password"
              required
              autoComplete="off"
            />
            {error.errorpassword && <small>
              {error.errorpassword}</small>}
            <label htmlFor="confirmpwd">Confirme su contraseña:</label>
            <input
              type="password"
              // placeholder="Confirmar contraseña"
              onChange={(e) => handleChange(e)}
              value={input.confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
              required
              autoComplete="off"
            />
            {error.errorconfirmPassword && <small>{error.errorconfirmPassword}</small>}
            <label htmlFor="namebusiness">
              Ingrese el nombre de la empresa:
            </label>
            <input
              type="text"
              // placeholder="Ingrese el nombre de la empresa"
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
              // placeholder="Ingrese el nombre del establecimiento"
              onChange={(e) => handleChange(e)}
              value={input.nombreEstablecimiento}
              name="nombreEstablecimiento"
              id="nombreEstablecimiento"
              required
            />
            {error.errornombreEstablecimiento && <small>{error.errornombreEstablecimiento}</small>}
            <label htmlFor="cuit">Ingrese su número de CUIT:</label>
            <input
              type="number"
              value={input.cuit}
              name="cuit"
              id="cuit"
              required
              placeholder="Ej. 2024244996"
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
            <label htmlFor="adress">Dirección:</label>
            <input
              type="text"
              value={input.direccion}
              name="direccion"
              id="direccion"
              required
              // placeholder="Ingrese su dirección"
              onChange={(e) => handleChange(e)}
            />
            {error.errordireccion && <small>{error.errordireccion}</small>}
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="number"
              value={input.telefono}
              name="telefono"
              id="telefono"
              required
              placeholder="Ingrese su número de contacto"
              onChange={(e) => handleChange(e)}
            />
            {error.errortelefono && <small>{error.errortelefono}</small>}
            <button className="boton-register">Registrarse</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
    // <div className="background-register">
    // <NavBar/>
    // <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'  >
    //   <div className='mask gradient-custom-3'></div>
    //   <MDBCard className='m-5' style={{maxWidth: '600px'}}>
    //     <MDBCardBody className='px-5'>
    //       <h2 className="text-uppercase text-center mb-5">Create an account</h2>
    //       <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
    //       <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
    //       <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
    //       <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
    //       <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
    //     </MDBCardBody>
    //   </MDBCard>
    // </MDBContainer>
    
    // </div>
   
  );
}