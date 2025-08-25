import emailjs from "@emailjs/browser";
import { Button, Card, Input } from "antd";
import Swal from "sweetalert2";
import Footer from "../footer/Footer.jsx";
import "./Contact.css";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
  process.env;

const { TextArea } = Input;

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

        <div className="container-contact">
          <form onSubmit={sendEmail}>
            <Card style={{ backgroundColor: "rgb(233,238,244)" }}>
              <h5 className="mb-0 datos-contact">Datos para el contacto</h5>
            </Card>
            <Input
              id="form4Example1"
              className="mb-4"
              placeholder="Nombre"
              name="Nombre"
              required
              style={{ backgroundColor: "rgb(233,238,244)" }}
            />
            <Input
              type="email"
              id="form4Example2"
              className="mb-4"
              placeholder="Email"
              name="Email"
              required
            />
            <Input
              id="form4Example1"
              className="mb-4"
              placeholder="Empresa"
              name="Empresa"
              required
            />
            <TextArea
              placeholder="Mensaje"
              id="textAreaExample"
              rows={4}
              name="Mensaje"
              required
            />
            <br />
            <Button className="boton-contact" htmlType="submit">
              Enviar
            </Button>
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
}
