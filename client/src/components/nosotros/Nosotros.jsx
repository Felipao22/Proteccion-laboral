import React from "react";
// import NavBar from "../navbar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
import "./Nosotros.css";
import uno from "../../assets/1.jpg";

export default function Nosotros() {
  return (
    <>
      <div>{/* <NavBar /> */}</div>
      <h1 className="container-pregunta">¿QUIÉNES SOMOS?</h1>
      <div data-testid="aboutPage" className="about-layout-main">
        <section>
          <div className="flex-dave-layout-main_inner __flex-reverse-column">
            <div className="flex-dave-wrapper_left">
              <div className="text-inner-wrapper-main">
                <h4 className="header-title-right">NUESTRA MISIÓN</h4>
                <div className="description-paragraph">
                  <div>
                    <p className="paragraph-wrapper">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nulla cumque omnis dolor totam dolorum dignissimos
                      consequuntur distinctio doloribus modi veniam aspernatur
                    </p>
                  </div>
                  <div>
                    <p className="paragraph-wrapper">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Error, culpa esse accusamus explicabo beatae ratione
                      perspiciatis. Iste at iure a autem
                    </p>
                  </div>

                  <div>
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
                  </div>
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
        <section>
          <div className="flex-dave-layout-main_inner __flex-reverse-column">
            <div className="flex-dave-wrapper_right">
              <div className="image_wrapper-right founding-story">
                <img alt="algo" src={uno} style={{ height: "100%" }} />
              </div>
            </div>
            <div className="flex-dave-wrapper_left2">
              <div className="text-inner-wrapper-main">
                <h4 className="header-title-right">NUESTRA MISIÓN</h4>
                <div className="description-paragraph">
                  <div>
                    <p className="paragraph-wrapper">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nulla cumque omnis dolor totam dolorum dignissimos
                      consequuntur distinctio doloribus modi veniam aspernatur
                    </p>
                  </div>
                  <div>
                    <p className="paragraph-wrapper">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Error, culpa esse accusamus explicabo beatae ratione
                      perspiciatis. Iste at iure a autem
                    </p>
                  </div>
                  <div>
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
                  </div>
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
