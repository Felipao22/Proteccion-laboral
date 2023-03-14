import React from "react";
// import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import "./Soluciones.css";
import { Carousel } from "react-bootstrap";
import soluciones from "../../assets/soluciones.jpg";
import soluciones2 from "../../assets/soluciones2.jpg";
import soluciones3 from "../../assets/soluciones3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Popover } from "antd";

export default function Soluciones() {
  const content = (
    <div>
      <p>
        Podes solicitar sin cargo un Diagnóstico del estado siniestral y del
        cumplimiento{" "}
      </p>
      <p>
        {" "}
        sobre las obligaciones legales en materia de higiene y seguridad de tú
        empresa.
      </p>
    </div>
  );

  return (
    <section id="soluciones">
      <div>
        <div className="background">
          {/* <NavBar /> */}
          <Carousel variant="dark" indicators={false}>
            <Carousel.Item interval={2000}>
              <h2 className="text-overlaySoluciones">GESTIón</h2>
              <img
                className="d-block w-100 "
                src={soluciones}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <h2 className="text-overlaySoluciones">Prevención</h2>
              <img
                className="d-block w-100"
                src={soluciones2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <h2 className="text-overlaySoluciones">Asesoramiento</h2>
              <img
                className="d-block w-100"
                src={soluciones3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <main>        
          <h1 className="header-soluciones">Servicios</h1>
          <div className="description-paragraph">
            <ul className="column-ul">
              <li>
                Informes para habilitación Municipal.
                <Popover placement="bottom" content={content}>
                  <button
                    style={{ all: "unset", cursor: "pointer", color: "red" }}
                  >
                    ¡Novedad!
                  </button>
                </Popover>
              </li>
              <li>
                Capacitaciones en materia de Prevención de Accidentes de Trabajo
                y Enfermedades Profesionales.{" "}
              </li>
              <li>
                Mediciones protocolarizadas de Ruido (Resolución S.R.T. N°
                85/2012).
              </li>
              <li>
                Mediciones protocolarizadas de Iluminación (Resolución S.R.T. N°
                84/2012).
              </li>
              <li>
                Evaluaciones Ergonómicas protocolarizadas (Resolución S.R.T. N°
                886/2015).
              </li>
              <li>Estudios técnicos de Carga de Fuego.</li>
              <li>
                Estudio técnico de valoración de Puesta a Tierra y Continuidad
                (Resolución S.R.T. N°900/2015).
              </li>
              <li>
                Programas de Seguridad para obras (Resoluciones S.R.T. N°
                51/1997, 35/1998, 319/1999).
              </li>
              <li>Supervisión de obras (Resolución S.R.T. 231/1996).</li>
              <li>
                Asesoramiento sobre gestión de siniestros y coberturas de A.R.T.
              </li>
              <li>
                Implementación y desarrollo de programas para la reducción de la
                siniestralidad.
              </li>
              <li>
                Servicios mensuales de asesoramiento y gestión en Higiene y
                Seguridad (Decreto S.R.T. 1338/1996 y Resolución S.R.T.
                900/2015).
              </li>
              <li>Confección de Planos de Evacuación.</li>
              <li>Desarrollo de Planes de acción ante Emergencias.</li>
              <li>
                Relevamientos direccionados sobre el control de infraestructura,
                y elementos de prevención.
              </li>
              <li>
                {" "}
                Confección, adecuación y control de legajos técnicos sobre el
                registro de documentación en materia de Higiene y Seguridad.
              </li>
            </ul>
          </div>
          </main>
        </div>
        <br />
        <Footer />
      </div>
    </section>
  );
}
