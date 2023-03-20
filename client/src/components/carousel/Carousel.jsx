import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import logoBlanco from '../../assets/LOGO CUADRADO blanco.png';
import exit6 from '../../assets/exit6.jpg';
import im1 from '../../assets/im1.jpg';
import im3 from '../../assets/im3.jpg'

export default function Carrusel() {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
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
      <Carousel.Item >
        <img className="img-overlay" src={logoBlanco} alt="log" />
        <div className="box-text">
      <h2 className="text-overlay">Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.</h2>
        </div>
        <img
          className="d-block w-100"
          src={im3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img className="img-overlay" src={logoBlanco} alt="log" />
        <div className="box-text">
      <h2 className="text-overlay">Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.</h2>
        </div>
        <img
          className="d-block w-100"
          src={im1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
