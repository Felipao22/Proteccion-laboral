import { useState, useEffect, useRef } from "react";



const VALIDATE_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const VALIDATE_PASSWORD = !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
const VALIDATE_NOMBRE_EMPRESA = /^[A-Z]+[A-Za-z0-9\s]+$/g; 
const VALIDATE_CUIT = /^[0-9]{11}$/;
const VALIDATE_NOMBRE_ESTABLECIMIENTO = /^[A-Z]+[A-Za-z0-9\s]+$/g;
const VALIDATE_DIRECCION = /^[A-Z]+[A-Za-z0-9\s]+$/g;
const VALIDATE_TELEFONO = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

// const [error, setError] = useState({
//     erroremail: "",
//     errorpassword: "",
//     errorconfirmPassword: "",
//     errornombreEmpresa: "",
//     errorcuit: "",
//     errornombreEstablecimiento: "",
//     errorprovincia: "",
//     errorciudad: "",
//     errordireccion: "",
//     // errorlogo: "",
//     errortelefono: "",
//   });

// useEffect(() => {
//     validate();
//   }, [
//     input.email,
//     input.password,
//     input.confirmPassword,
//     input.nombreEmpresa,
//     input.cuit,
//     input.nombreEstablecimiento,
//     input.provincia,
//     input.ciudad,
//     input.direccion,
//     // input.logo,
//     input.telefono,
//   ]);

//   export const validate = () => {
//     // let erroremail = "";
//     let errorpassword = "";
//     let errorconfirmPassword = "";
//     let errornombreEmpresa = "";
//     let errorcuit = "";
//     let errornombreEstablecimiento = "";
//     let errorprovincia = "";
//     let errorciudad = "";
//     let errordireccion = "";
//     let errortelefono = "";

    // if (
    //   !input.email ||
    //   !VALIDATE_EMAIL.test(input.email) ||
    //   input.email[0] === " "
    // ) {
    //   erroremail = "Escriba un correo electrónico válido.";
    // } else {
    //   erroremail = "Correo electrónico válido.";
    // }
    // if (
    //   !input.password ||
    //   VALIDATE_PASSWORD.test(input.password)
    // ) {
    //   errorpassword =
    //     "La contraseña debe tener entre 8 y 16 carácteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.";
    // } else {
    //   errorpassword = "Contraseña válida.";
    // }
    // if (
    //   input.confirmPassword === "" ||
    //   input.password !== input.confirmPassword
    // ) {
    //   errorconfirmPassword = "Las contraseñas no coinciden.";
    // } else {
    //   errorconfirmPassword = "Hecho!";
    // }
    // if (
    //   !input.nombreEmpresa ||
    //   !VALIDATE_NOMBRE_EMPRESA.test(input.nombreEmpresa) ||
    //   input.nombreEmpresa[0] === " "
    // ) {
    //   errornombreEmpresa = "La primera letra debe estar en mayúscula.";
    // } else {
    //   errornombreEmpresa = "Hecho!";
    // }
    // if (
    //   !input.cuit ||
    //   !VALIDATE_CUIT.test(input.cuit) ||
    //   input.cuit[0] === " "
    //   //falta validar cantidad de numeros 11 y sin guión.
    // ) {
    //   errorcuit = "Deben ser 11 números.";
    // } else {
    //   errorcuit = "Hecho!";
    
    // if ( !input.nombreEstablecimiento ||
    //   !VALIDATE_NOMBRE_ESTABLECIMIENTO.test(input.nombreEstablecimiento) ||
    //   input.nombreEstablecimiento[0] === " ") {
    //   errornombreEstablecimiento = "La primera letra debe estar en mayúscula.";
    // } else {
    //   errornombreEstablecimiento = "Hecho!";
    // }
    // if (!input.provincia) {
    //   errorprovincia = "Seleccione una provincia.";
    // } else {
    //   errorprovincia = "Hecho!";
    // }
    // if (!input.ciudad) {
    //   errorciudad = "Seleccione una ciudad.";
    // } else {
    //   errorciudad = "Hecho!";
    // }
    // if (
    //   !input.direccion ||
    //   !VALIDATE_DIRECCION.test(input.direccion) ||
    //   input.direccion[0] == " "
    // ) {
    //   errordireccion = "La primera letra debe estar en mayúscula.";
    // } else {
    //   errordireccion = "Hecho!";
    // }
    // if (
    //   !input.telefono ||
    //   !VALIDATE_TELEFONO.test(input.telefono) ||
    //   input.telefono[0] == "" ||
    //   input.telefono.length < 10
    // ) {
    //   errortelefono = "";
    // } else {
    //   errortelefono = "Hecho!";
    // }




export function validate () {
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');
    const [confirmPassword, updateConfirmPassword] = useState('');
    const [nombreEmpresa, updateNombreEmpresa] = useState('');
    const [nombreEstablecimiento, updateNombreEstablecimiento] = useState('');
    const [cuit, updateCuit] = useState('');
    const [provincia, updateProvincia] = useState('');
    const[ciudad, updateCiudad] = useState('');
    const[dirección, updateDireccion] = useState('');
    const[telefono, updateTelefono] = useState('');

    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = email &&  password && confirmPassword && nombreEmpresa && nombreEstablecimiento && cuit && provincia && ciudad && dirección && telefono === ''
        return
      }
      if(email ||
        !VALIDATE_EMAIL.test(email) ||
        email[0] === " ")
        setError('Escriba un correo electrónico válido.')
        else {
            setError("Correo electrónico válido.");
          }
    
    if(password ||
        VALIDATE_PASSWORD.test(password)
      ) {
        setError("La contraseña debe tener entre 8 y 16 carácteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.");
      } else {
        setError("Contraseña válida.");
      }
      if (
        confirmPassword === "" ||
        password !== confirmPassword
      ) {
        setError("Las contraseñas no coinciden.");
      } else {
        setError("Hecho!");
      }

      if (
        !nombreEmpresa ||
        !VALIDATE_NOMBRE_EMPRESA.test(nombreEmpresa) ||
        nombreEmpresa[0] === " "
      ) {
        setError("La primera letra debe estar en mayúscula.");
      } else {
        setError("Hecho!");
      }

      if (
        !cuit ||
        !VALIDATE_CUIT.test(cuit) ||
        cuit[0] === " "
        //falta validar cantidad de numeros 11 y sin guión.
      ) {
        setError("Deben ser 11 números.");
      } else {
        setError("Hecho!");

        if ( !nombreEstablecimiento ||
            !VALIDATE_NOMBRE_ESTABLECIMIENTO.test(nombreEstablecimiento) ||
            nombreEstablecimiento[0] === " ") {
            setError("La primera letra debe estar en mayúscula.");
          } else {
            setError("Hecho!");
          }

          if (provincia) {
           setError("Seleccione una provincia.");
          } else {
            setError("Hecho!");
          }

          if (ciudad) {
            setError("Seleccione una ciudad.");
          } else {
            setError("Hecho!");
          }
          if (
            !dirección ||
            !VALIDATE_DIRECCION.test(dirección) ||
            dirección[0] == " "
          ) {
              setError("La primera letra debe estar en mayúscula.");
        } else {
            setError("Hecho!");
          }

          if (
            !telefono ||
            !VALIDATE_TELEFONO.test(telefono) ||
            telefono[0] == "" ||
            telefono.length < 10
          ) {
            setError("");
          } else {
            setError("Hecho!");
          }  
      setError(null)
        }
    }, [email,
        password,
       confirmPassword,
       nombreEmpresa,
       nombreEstablecimiento,
       cuit,
       provincia,
       ciudad,
       dirección,
       telefono])
  
    return {email,
        password,
       confirmPassword,
       nombreEmpresa,
       nombreEstablecimiento,
       cuit,
       provincia,
       ciudad,
       dirección,
       telefono, error, updateEmail,
       updatePassword,
       updateConfirmPassword,
       updateNombreEmpresa,
       updateNombreEstablecimiento,
       updateCuit,
       updateProvincia,
       updateCiudad,
       updateDireccion,
       updateTelefono }
  }