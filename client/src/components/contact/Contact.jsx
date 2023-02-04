import React from "react";
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
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
  process.env;

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${REACT_APP_SERVICE_ID}`,
        `${REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Mensaje enviado correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

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
          <form onSubmit={sendEmail}>
            <MDBCardHeader
              className="py-3"
              style={{ backgroundColor: "rgb(233,238,244)" }}
            >
              <MDBTypography tag="h5" className="mb-0">
                Datos para el contacto
              </MDBTypography>
            </MDBCardHeader>
            <MDBInput
              id="form4Example1"
              wrapperClass="mb-4"
              label="Nombre"
              name="Nombre"
              required
            />
            <MDBInput
              type="email"
              id="form4Example2"
              wrapperClass="mb-4"
              label="Email"
              name="Email"
              required
            />
            <MDBInput
              id="form4Example1"
              wrapperClass="mb-4"
              label="Empresa"
              name="Empresa"
              required
            />
            <MDBTextArea
              label="Mensaje"
              id="textAreaExample"
              rows={4}
              name="Mensaje"
              required
            />
            <br />
            <button className="boton">Enviar</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
