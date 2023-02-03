import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Contact.css";
import Footer from "../footer/Footer";
import {
  MDBCardHeader,
  MDBInput,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import Background from "../background/Background";
export default function Contact() {
  return (
    <>
      <div className="background-contact">
        <NavBar />

        <Background />
        <h2
          className="container-text"
          style={{ marginTop: "50px", color: "white" }}
        >
          ¿Qué desea consultarnos?
        </h2>

        <div className="container-contact">
          <form>
            <MDBCardHeader
              className="py-3"
              style={{ backgroundColor: "rgb(233,238,244)" }}
            >
              <MDBTypography tag="h5" className="mb-0">
                Datos para el contacto
              </MDBTypography>
            </MDBCardHeader>
            <MDBInput id="form4Example1" wrapperClass="mb-4" label="Nombre" />
            <MDBInput
              type="email"
              id="form4Example2"
              wrapperClass="mb-4"
              label="Email"
            />
            <MDBInput id="form4Example1" wrapperClass="mb-4" label="Empresa" />
            <MDBTextArea label="Mensaje" id="textAreaExample" rows={4} />
            <br />
            <button className="boton">Enviar</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
