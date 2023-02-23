import React from "react";
// import NavBar from "../navbar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
import "./Nosotros.css";
import uno from "../../assets/1.jpg";

export default function Nosotros() {
  return (
    <>
      <div>{/* <NavBar /> */}</div>
      {/* <h1 className="container-pregunta">¿QUIÉNES SOMOS?</h1> */}
      <div data-testid="aboutPage" className="about-layout-main" style={{marginTop:'6rem'}}>
        <section>
          <div className="flex-dave-layout-main_inner __flex-reverse-column">
            <div className="flex-dave-wrapper_left">
              <div className="text-inner-wrapper-main">
                <h4 className="header-title-right">¿QUIÉNES SOMOS?</h4>
                <div className="description-paragraph">
                  <div>
                    <p className="paragraph-wrapper">
                      Somos una empresa con más de quince años de experiencia en
                      el ámbito de la seguridad laboral, a lo largo de estos
                      años hemos podido desarrollar e implementar un sistema de
                      gestión y asesoramiento con el fin de brindar soporte a
                      nuestros clientes para la prevención de contingencias
                      laborales.
                    </p>
                  </div>
                  <div>
                    {/* <p className="paragraph-wrapper">
                      Contamos con un equipo de trabajo multidisciplinario con
                      el propósito de lograr un asesoramiento preciso, ágil y
                      actualizado. Implementamos estándares de control de
                      gestión dinámicos, adaptados a la necesidad de cada
                      empresa, así como también de la verificación sobre el
                      desarrollo seguro de las tareas y procesos. Trabajamos
                      para que nuestros clientes puedan alcanzar la excelencia
                      en seguridad e higiene, tomando cómo parámetros el
                      cumplimiento de la legislación vigente.
                    </p> */}
                  </div>

                  {/* <div>
                    <p className="paragraph-wrapper">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit similique hic magni eius iusto quibusdam est
                      itaque quis at consequatur sapiente corporis, blanditiis
                      eum molestiae tenetur earum.
                    </p>
                  </div>
                  <div>
                    <p className="paragraph-wrapper">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid hic quaerat cupiditate ad, dolorum cumque nobis
                      debitis amet, officia accusamus harum incidunt quidem
                      iusto.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex-dave-wrapper_right">
              <div className="image_wrapper-right founding-story">
                <img alt="algo" src={uno} style={{ height: "100%" }} />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section style={{marginBottom:'6rem'}}>
          <div className="flex-dave-layout-main_inner __flex-reverse-column" >
            <div className="flex-dave-wrapper_right">
              <div className="image_wrapper-right founding-story">
                <img alt="algo" src={uno} style={{ height: "100%" }} />
              </div>
            </div>
            <div className="flex-dave-wrapper_left2">
              <div className="text-inner-wrapper-main">
                <h4 className="header-title-right">¿qué nos distingue?</h4>
                <div className="description-paragraph">
                  <div>
                    <p className="paragraph-wrapper">
                    Contamos con un equipo de trabajo multidisciplinario con
                      el propósito de lograr un asesoramiento preciso, ágil y
                      actualizado. Implementamos estándares de control de
                      gestión dinámicos, adaptados a la necesidad de cada
                      empresa, así como también de la verificación sobre el
                      desarrollo seguro de las tareas y procesos.
                    </p>
                  </div>
                  <div>
                    <p className="paragraph-wrapper">
                    Trabajamos
                      para que nuestros clientes puedan alcanzar la excelencia
                      en seguridad e higiene, tomando cómo parámetros el
                      cumplimiento de la legislación vigente.
                    </p>
                  </div>
                  {/* <div>
                    <p className="paragraph-wrapper">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit similique hic magni eius iusto quibusdam est
                      itaque quis at consequatur sapiente corporis, blanditiis
                      eum molestiae tenetur earum.
                    </p>
                  </div>
                  <div>
                    <p className="paragraph-wrapper">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid hic quaerat cupiditate ad, dolorum cumque nobis
                      debitis amet, officia accusamus harum incidunt quidem
                      iusto.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
