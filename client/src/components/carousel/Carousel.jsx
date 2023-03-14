import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import logoBlanco from '../../assets/LOGO CUADRADO blanco.png';
import proteccion from '../../assets/proteccion.jpg';
import uno from '../../assets/1.jpg';
import exit6 from '../../assets/exit6.jpg'

export default function Carrusel() {
  return (
    <Carousel>
      {/* <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src="https://uploads-ssl.webflow.com/5e95bff252d2e8729955e6e7/60c3358cc3ab0c37fd2297be_10-Health-%26-Safety-procedures-used-by-organisations-blog-compressed.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://www.hseblog.com/wp-content/uploads/2022/03/Internal-And-External-Influences-On-The-Health-And-Safety-Culture.jpg"
          alt="Second slide"
        />
      </Carousel.Item> */}
      <Carousel.Item interval={2000} >
        <img className="img-overlay" src={logoBlanco} alt="log" />
        <div className="box-text">
      <h2 className="text-overlay">Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.</h2>
        </div>
        <img
          className="d-block w-100"
          src={exit6}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} >
        <img className="img-overlay" src={logoBlanco} alt="log" />
        <div className="box-text">
      <h2 className="text-overlay">Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.</h2>
        </div>
        <img
          className="d-block w-100"
          src={proteccion}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} >
        <img className="img-overlay" src={logoBlanco} alt="log" />
        <div className="box-text">
      <h2 className="text-overlay">Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.</h2>
        </div>
        <img
          className="d-block w-100"
          src={uno}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
