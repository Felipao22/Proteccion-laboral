import React from "react";
import { useHistory } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const history = useHistory();
  const handleClickContact = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    history.push("/contact");
  };
  const handleClickHome = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    history.push("/");
  };
  const handleClickService = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    history.push("/services");
  };
  const handleClickNosotros = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    history.push("/nosotros");
  };

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conocé nuestras redes:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/people/Proteccion-Laboral/100090978247598/"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/proteccion_laboral/"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/proteccion-laboral-b2a21a26b/"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Protección Laboral
              </h6>
              <p>
                Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navegar</h6>
              <p>
                <a
                  href="!#"
                  onClick={(e) => handleClickHome(e)}
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  href="!#"
                  onClick={(e) => handleClickNosotros(e)}
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Nosotros
                </a>
              </p>
              <p>
                <a
                  href="!#"
                  onClick={(e) => handleClickService(e)}
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Servicios
                </a>
              </p>
              <p>
                <a
                  onClick={(e) => handleClickContact(e)}
                  href="!#"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Contacto
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                San Luis, ARG.
                <br />
              </p>
              <a
                style={{ textDecoration: "none", color: "#6C757D" }}
                href="mailto:info@proteccionlaboral.com.ar"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope size={17} className="me-3" />
                info@proteccionlaboral.com.ar
                <br />
              </a>
              <a
                style={{ textDecoration: "none", color: "#6C757D" }}
                href="https://api.whatsapp.com/send?phone=542664678961"
                target="_blank"
                rel="noreferrer"
              >
                <br />
                <IoLogoWhatsapp size={20} className="me-3" />
                2664 678961
              </a>
              <br />
              <a
                style={{ textDecoration: "none", color: "#6C757D" }}
                href="https://api.whatsapp.com/send?phone=542664722453"
                target="_blank"
                rel="noreferrer"
              >
                <br />
                <IoLogoWhatsapp size={20} className="me-3" />
                2664 722453
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        {`© ${year} Copyright: `}
        <a
          className="text-reset fw-bold"
          href="https://www.linkedin.com/in/felipeaviani/"
          target="_blank"
          rel="noreferrer"
        >
          Felipe Aviani
        </a>
      </div>
    </MDBFooter>
  );
}
