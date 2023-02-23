import React from "react";
import "./services.css";
import Logo from "../../assets/LOGO CUADRADO blanco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <>
      <section id="about-services">
        <div className="container-services">
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
                  <h2 className="title">Gestión</h2>
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
                  <h2 className="title">Prevención</h2>
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
                  <h2 className="title">Asesoramiento</h2>
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

// import React from "react";
// // import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "./services.css";
// import IMAGE from "../../assets/LOGO CUADRADO blanco.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// export default function Services() {
//   return (
//     <>
//       <section id="about-services">
//         <div class="container-services">
//           <header class="section-header">
//             <h1>Nuestras soluciones</h1>
//           </header>
//           <div class="row about-cols">
//             <div class="col-md-4 wow">
//               <a href="/services" style={{ textDecoration: "none" }}>
//                 <div class="about-col about-bg1">
//                   <div class="img">
//                     <img src={IMAGE} alt class="img-logo" />
//                   </div>
//                   <h2 class="title">ANALIZAR</h2>
//                   <p>
//                     ANALIZAMOS DIARIAMENTE LAS VARIABLES DEL ECOMMERCE PARA
//                     TODAS LAS INDUSTRIAS
//                   </p>
//                   <div class="icono">
//                     <i class="ion-chevron-down">
//                       <FontAwesomeIcon icon={faChevronDown} />
//                     </i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div class="col-md-4 wow">
//               <a href="/services" style={{ textDecoration: "none" }}>
//                 <div class="about-col about-bg1">
//                   <div class="img">
//                     <img src={IMAGE} alt class="img-logo" />
//                   </div>
//                   <h2 class="title">GESTIONAR</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Eos, repellat.
//                   </p>
//                   <div class="icono">
//                     <i class="ion-chevron-down">
//                       <FontAwesomeIcon icon={faChevronDown} />
//                     </i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div class="col-md-4 wow">
//               <a href="/services" style={{ textDecoration: "none" }}>
//                 <div class="about-col about-bg1">
//                   <div class="img">
//                     <img src={IMAGE} alt class="img-logo" />
//                   </div>
//                   <h2 class="title">EVALUAR</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                     Quae, aperiam.
//                   </p>
//                   <div class="icono">
//                     <i class="ion-chevron-down">
//                       <FontAwesomeIcon icon={faChevronDown} />
//                     </i>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }