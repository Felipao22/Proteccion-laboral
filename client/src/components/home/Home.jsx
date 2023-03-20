import React, { useEffect } from "react";
import Carousel from "../carousel/Carousel";
import "./Home.css";
import Footer from "../footer/Footer";
import Services from "../services/Services";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function Home() {
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
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <div>
      <Carousel />
      <div className="hidden">
        <p>
          La Seguridad e Higiene Laboral tiene como objetivo principal articular
          e implementar las medidas necesarias para prevenir la ocurrencia de
          accidentes y enfermedades laborales, debido a los riesgos o peligros
          que están expuestos los trabajadores durante o con motivo de su
          trabajo.
        </p>
      </div>
      <Services />
      <Footer />
    </div>
  );
}
