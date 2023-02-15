import React from "react";
import "./services.css";
import Logo from "../../assets/LOGO CUADRADO blanco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <>
      <section id="about">
        <div className="container">
          <header className="section-header">
            <h1>Nuestros servicios</h1>
          </header>
          <div className="row about-cols">
            <div className="col-md-4 wow">
              <a href="/services" style={{ textDecoration: "none" }}>
                <div className="about-col about-bg1">
                  <div className="img">
                    <img src={Logo} alt="logo" className="img-logo" />
                  </div>
                  <h2 className="title">ANALIZAR</h2>
                  <p>
                    ANALIZAMOS DIARIAMENTE LAS VARIABLES DEL ECOMMERCE PARA
                    TODAS LAS INDUSTRIAS
                  </p>
                  <div className="icono">
                    <i className="ion-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 wow">
              <a href="/services" style={{ textDecoration: "none" }}>
                <div className="about-col about-bg1">
                  <div className="img">
                    <img src={Logo} alt="logo" className="img-logo" />
                  </div>
                  <h2 className="title">GESTIONAR</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, repellat.
                  </p>
                  <div className="icono">
                    <i className="ion-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 wow">
              <a href="/services" style={{ textDecoration: "none" }}>
                <div className="about-col about-bg1">
                  <div className="img">
                    <img src={Logo} alt="logo" className="img-logo" />
                  </div>
                  <h2 className="title">EVALUAR</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, aperiam.
                  </p>
                  <div className="icono">
                    <i className="ion-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
