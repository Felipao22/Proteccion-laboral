import React, { useEffect, useState } from "react";
import "./services.css";
import Logo from "../../assets/LOGO CUADRADO blanco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import { useHistory } from "react-router-dom";

export default function Services() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".section-header");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  const history = useHistory();

  const [isModalGestionOpen, setIsModalGestionOpen] = useState(false);
  const showModal = () => {
    setIsModalGestionOpen(true);
  };
  const handleGestionOk = () => {
    setIsModalGestionOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    history.push("/services");
  };
  const handleGestionCancel = () => {
    setIsModalGestionOpen(false);
  };

  const [isModalPrevencionOpen, setIsModalPrevencionOpen] = useState(false);
  const showModalPrevencion = () => {
    setIsModalPrevencionOpen(true);
  };
  const handlePrevencionOk = () => {
    setIsModalPrevencionOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    history.push("/services");
  };
  const handlePrevencionCancel = () => {
    setIsModalPrevencionOpen(false);
  };

  const [isModalAsesoramientoOpen, setIsModalAsesoramientoOpen] =
    useState(false);
  const showModalAsesoramiento = () => {
    setIsModalAsesoramientoOpen(true);
  };
  const handleAsesoramientoOk = () => {
    setIsModalAsesoramientoOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    history.push("/services");
  };
  const handleAsesoramientoCancel = () => {
    setIsModalAsesoramientoOpen(false);
  };

  return (
    <>
      <section id="about-services">
        <div className="container-services">
          <header className="section-header">
            <h1>Nuestros servicios</h1>
          </header>
          <div className="fsl-title-deco"></div>
          <div className="row about-cols">
            <div className="col-md-4 wow">
              <button
                onClick={showModal}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <div className="about-col about-bg1">
                  <div className="img">
                    <img src={Logo} alt="logo" className="img-logo" />
                  </div>
                  <h2 className="title">Gestión</h2>
                  <p>
                  Planificamos, organizamos y ejecutamos las acciones necesarias para lograr la excelencia en seguridad laboral.
                  </p>
                  <div className="icono">
                    <i className="ion-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                  </div>
                </div>
              </button>
            </div>
            <Modal
              title="GESTION"
              open={isModalGestionOpen}
              onOk={handleGestionOk}
              onCancel={handleGestionCancel}
              okText="VER TODOS"
              cancelText="VOLVER"
            >
              <p>
                Capacitaciones en materia de Prevención de Accidentes de Trabajo
                y Enfermedades Profesionales.{" "}
              </p>
              <p>
                Mediciones protocolarizadas de Ruido (Resolución S.R.T. N°
                85/2012).
              </p>
              <p>
                Mediciones protocolarizadas de Iluminación (Resolución S.R.T. N°
                84/2012).
              </p>
              <p>
                {" "}
                Evaluaciones Ergonómicas protocolarizadas (Resolución S.R.T. N°
                886/2015).
              </p>
              <p>Estudios técnicos de Carga de Fuego.</p>
            </Modal>
            <div className="col-md-4 wow">
              <button
                onClick={showModalPrevencion}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <div className="about-col about-bg1">
                  <div className="img">
                    <img src={Logo} alt="logo" className="img-logo" />
                  </div>
                  <h2 className="title">Prevención</h2>
                  <p>
                  Detectamos riesgos para la prevención de accidentes de trabajo y enfermedades profesionales.
                  </p>
                  <div className="icono">
                    <i className="ion-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                  </div>
                </div>
              </button>
            </div>
            <Modal
              title="PREVENCION"
              open={isModalPrevencionOpen}
              onOk={handlePrevencionOk}
              onCancel={handlePrevencionCancel}
              okText="VER TODOS"
              cancelText="VOLVER"
            >
              <p>
                {" "}
                Estudio técnico de valoración de Puesta a Tierra y Continuidad
                (Resolución S.R.T. N°900/2015).
              </p>
              <p>
                {" "}
                Programas de Seguridad para obras (Resoluciones S.R.T. N°
                51/1997, 35/1998, 319/1999).
              </p>
              <p>Supervisión de obras (Resolución S.R.T. 231/1996).</p>
              <p>
                Asesoramiento sobre gestión de siniestros y coberturas de A.R.T.
              </p>
              <p>
                Implementación y desarrollo de programas para la reducción de la
                siniestralidad.
              </p>
            </Modal>
            <div className="col-md-4 wow">
              <button
                onClick={showModalAsesoramiento}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <div className="about-col about-bg1">
                  <div className="img">
                    <img src={Logo} alt="logo" className="img-logo" />
                  </div>
                  <h2 className="title">Asesoramiento</h2>
                  <p>
                  Brindamos información clara y actualizada sobre los requerimientos de cumplimiento legal.
                  </p>
                  <div className="icono">
                    <i className="ion-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                  </div>
                </div>
              </button>
            </div>
            <Modal
              title="ASESORAMIENTO"
              open={isModalAsesoramientoOpen}
              onOk={handleAsesoramientoOk}
              onCancel={handleAsesoramientoCancel}
              okText="VER TODOS"
              cancelText="VOLVER"
            >
              <p>
                Servicios mensuales de asesoramiento y gestión en Higiene y
                Seguridad (Decreto S.R.T. 1338/1996 y Resolución S.R.T.
                900/2015).
              </p>
              <p>Confección de Planos de Evacuación.</p>
              <p>Desarrollo de Planes de acción ante Emergencias.</p>
              <p>
                {" "}
                Relevamientos direccionados sobre el control de infraestructura,
                y elementos de prevención.
              </p>
              <p>
                Confección, adecuación y control de legajos técnicos sobre el
                registro de documentación en materia de Higiene y Seguridad.
              </p>
            </Modal>
          </div>
        </div>
      </section>
    </>
  );
}
