import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import logoBlanco from '../../assets/LOGO CUADRADO blanco.webp';
import exit from '../../assets/exit.webp';
import im1 from '../../assets/im1.webp';
import im3 from '../../assets/im3.webp'

export default function Carrusel() {
  return (
    <Carousel interval={3000} >
      <Carousel.Item>
        <img className="img-overlay" src={logoBlanco} alt="log" />
        <div className="box-text">
      <h2 className="text-overlay">Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.</h2>
        </div>
        <img
          className="d-block w-100"
          src={exit}
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
