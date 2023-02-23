import React, {useEffect} from "react";
import IMG1 from "../../assets/colegio.png";
import IMG2 from "../../assets/tagle.png";
import IMG5 from "../../assets/cmr.png";
import IMG6 from "../../assets/ladolfina.png";
import IMG7 from "../../assets/alimentos.png";
import "./Business.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Business() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else {
       entry.target.classList.remove('show')
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".texto-business");
    hiddenElements.forEach((el) => observer.observe(el));

  });
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".container-marcas");
    hiddenElements.forEach((el) => observer.observe(el));

  });
  return (
    <div>
      <div className="texto-business">
        <h1>Clientes</h1>
      </div>
        <div className="fls-title-deco"></div>
      <div className="container-marcas">
        <img className="marca" src={IMG1} alt="..." />
        <img className="marca" src={IMG2} alt="..." />
        <img className="marca" src={IMG5} alt="..." />
        <img className="marca" src={IMG6} alt="..." />
        <img className="marca" src={IMG7} alt="..." />
      </div>
    </div>
  );
}
