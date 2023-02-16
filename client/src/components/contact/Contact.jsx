import React from "react";
// import NavBar from "../navbar/NavBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Contact.css";
import Footer from "../footer/Footer";
import {
  MDBCardHeader,
  MDBInput,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
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
    <section id="contact-section">
      <div className="background-contact">
        <h1 className="container-text">¿Qué desea consultarnos?</h1>
      {/* <NavBar /> */}

        <div className="container-contact">
          <form onSubmit={sendEmail}>
            <MDBCardHeader
              className="py-3"
              style={{ backgroundColor: "rgb(233,238,244)" }}
            >
              <MDBTypography tag="h5" className="mb-0 datos-contact">
                Datos para el contacto
              </MDBTypography>
            </MDBCardHeader>
            <MDBInput
              id="form4Example1"
              wrapperClass="mb-4"
              label="Nombre"
              name="Nombre"
              required
              style={{ fontFamily: "Quicksand" }}
            />
            <MDBInput
              type="email"
              id="form4Example2"
              wrapperClass="mb-4"
              label="Email"
              name="Email"
              required
              style={{ fontFamily: "Quicksand" }}
            />
            <MDBInput
              id="form4Example1"
              wrapperClass="mb-4"
              label="Empresa"
              name="Empresa"
              required
              style={{ fontFamily: "Quicksand" }}
            />
            <MDBTextArea
              label="Mensaje"
              id="textAreaExample"
              rows={4}
              name="Mensaje"
              required
              style={{ fontFamily: "Quicksand" }}
            />
            <br />
            <button className="boton-contact">Enviar</button>
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
}
