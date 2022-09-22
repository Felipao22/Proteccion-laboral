import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./services.css";

export default function Services() {
  return (
    <div className="container">
      <div className="service">
        <i id="icon" class="fas fa-industry"></i>
        <h5>Servicio para industrias</h5>
      </div>

      <div className="service">
        <i id="icon" class="fas fa-globe"></i>
        <h5> Ambiental </h5>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          nostrum!
        </small>
      </div>
      <div className="service">
        <i id="icon" class="fas fa-atlas"></i> <h5> Diagnostico </h5>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          nostrum!
        </small>
      </div>
      <div className="service">
        <i id="icon" class="fas fa-microscope"></i> <h5>Analisis integral</h5>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          nostrum!
        </small>
      </div>
    </div>
  );
}
