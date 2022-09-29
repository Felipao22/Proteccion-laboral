import React from "react";
import IMG1 from "../../assets/colegio.png";
import IMG2 from "../../assets/tagle.png";
import IMG3 from "../../assets/ocasa.png";
import IMG4 from "../../assets/changomas.png";
import IMG5 from "../../assets/cmr.png";
import IMG6 from "../../assets/ladolfina.png";
import IMG7 from "../../assets/alimentos.png";
import "./Business.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Business() {
  return (
    <div>
      <div className="texto">
        <h4>Clientes</h4>
      </div>
      <div className="container-marcas">
        <img className="marca" src={IMG1} alt="..." />
        <img className="marca" src={IMG2} alt="..." />
        <img className="marca " src={IMG3} alt="..." />
        <img className="marca" src={IMG4} alt="..." />
        <img className="marca" src={IMG5} alt="..." />
        <img className="marca" src={IMG6} alt="..." />
        <img className="marca" src={IMG7} alt="..." />
      </div>
    </div>
  );
}
