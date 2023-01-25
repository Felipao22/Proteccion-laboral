import React from "react";
import {Link} from 'react-router-dom'
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./services.css";
import IMAGE from "../../assets/LOGO CUADRADO blanco.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services() {
  return (
    // <div className="container-services">
    //   <div className="service">
    //     <i id="icon" class="fas fa-industry"></i>
    //     <h5 className="text">Servicio para industrias</h5>
    //   </div>

    //   <div className="service">
    //     <i id="icon" class="fas fa-globe"></i>
    //     <h5 className="text"> Ambiental </h5>
    //     <small>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //       nostrum!
    //     </small>
    //   </div>
    //   <div className="service">
    //     <i id="icon" class="fas fa-atlas"></i> <h5 className="text"> Diagnostico </h5>
    //     <small>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //       nostrum!
    //     </small>
    //   </div>
    //   <div className="service">
    //     <i id="icon" class="fas fa-microscope"></i> <h5 className="text">Analisis integral</h5>
    //     <small>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //       nostrum!
    //     </small>
    //   </div>
    // </div>
    <>
    <section id='about'>
      <div class='container'>
        <header class='section-header'>
          <h3>Nuestras soluciones</h3>
        </header>
        <div class='row about-cols'>
          <div class='col-md-4 wow'>
            <Link to="/services">
              <div class='about-col about-bg1'>
                <div class='img'>
                  <img src={IMAGE} alt class="img-logo" />
                </div>
                <h2 class='title'>ANALIZAR</h2>
                <p>ANALIZAMOS DIARIAMENTE LAS VARIABLES DEL ECOMMERCE PARA TODAS LAS INDUSTRIAS</p>
                <div class='icono'>
                  <i class='ion-chevron-down'>
                  </i>
                </div>
              </div>
            </Link>
          </div>
          <div class='col-md-4 wow'>
            <Link to="/services">
              <div class='about-col about-bg1'>
                <div class='img'>
                  <img src={IMAGE} alt class="img-logo" />
                </div>
                <h2 class='title'>GESTIONAR</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat.</p>
                <div class='icono'>
                  {/* <i class='ion-chevron-down'> */}
                  {/* <i class="fa-sharp fa-solid fa-chevron-down"></i> */}
                  {/* <i class="fa-sharp fa-solid fa-chevron-down"></i> */}
                  {/* <i class="fa-solid fa-chevron-down"></i> */}
                  
 
 
<FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-down" />
                  {/* </i> */}
                </div>
              </div>
            </Link>
          </div>
          <div class='col-md-4 wow'>
            <Link to="/services">
              <div class='about-col about-bg1'>
                <div class='img'>
                  <img src={IMAGE} alt class="img-logo" />
                </div>
                <h2 class='title'>EVALUAR</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, aperiam.</p>
                <div class='icono'>
                  <i class='ion-chevron-down'>
                  </i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
