import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../navbar/NavBar";
import { cleanUsers } from "../../redux/actions/index";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./User.css";
export default function User() {
  const userActive = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout() {
    dispatch(cleanUsers());
    Swal.fire("Buen trabajo!", "Usuario deslogueado correctamente!", "success");
    history.push("/");
  }

  return (
    <div>
      <NavBar />
      <h1>Nombre: {userActive.nombreEmpresa}</h1>
      <h4>Ciudad: {userActive.ciudad}</h4>
      <h4>Cuit: {userActive.cuit}</h4>
      <h4>Direccion: {userActive.direccion}</h4>
      <h4>Email: {userActive.email}</h4>
      <h4>Provincia: {userActive.provincia}</h4>
      <h4>Telefono: {userActive.telefono}</h4>
      <button className="boton-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
