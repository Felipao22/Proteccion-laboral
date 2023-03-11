import React, { useEffect } from "react";
import Carousel from "../carousel/Carousel";
// import NavBar from "../navbar/NavBar";
import "./Home.css";
import Footer from "../footer/Footer";
import Services from "../services/Services";
import Business from "../business/Business";
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
        {/* <p>
          voluptates laboriosam? Temporibus error mollitia doloremque facilis
          architecto impedit eius laudantium corporis itaque minus nostrum velit
          earum debitis libero neque quisquam quaerat sapiente id non, omnis
          repudiandae ex tenetur placeat obcaecati? Alias sunt eius labore
          soluta ut quas possimus maiores sit provident deleniti molestiae cum,
          excepturi, ad distinctio? Dolorem, nobis fuga.
        </p> */}
      </div>
      {/* <div>
        <h1 className="texto-nosotros">Nosotros</h1>
        <div className="nosotros">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolor
            tenetur rem quo, illo est suscipit maxime labore ad aspernatur
            magnam libero cumque praesentium eligendi, nihil error. Repellendus
            sed sunt perferendis necessitatibus possimus molestiae, ipsum fugit
            nisi officia, et aperiam vitae quisquam quasi odio commodi similique
            consequuntur nam, nihil mollitia beatae exercitationem temporibus
            non in dignissimos. Asperiores voluptates vitae dolorum laudantium
            quo? Eveniet, quae, omnis quos optio odio repellendus aperiam
            tempora mollitia expedita dignissimos recusandae praesentium
            architecto rem sapiente, nisi consectetur quis? Dolores iste sint
            culpa molestiae voluptatum, quidem quo necessitatibus architecto
            totam harum. Vitae laborum dicta quas iste atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolor
            tenetur rem quo, illo est suscipit maxime labore ad aspernatur
            magnam libero cumque praesentium eligendi, nihil error. Repellendus
            sed sunt perferendis necessitatibus possimus molestiae, ipsum fugit
            nisi officia, et aperiam vitae quisquam quasi odio commodi similique
            consequuntur nam, nihil mollitia beatae exercitationem temporibus
            non in dignissimos. Asperiores voluptates vitae dolorum laudantium
            quo? Eveniet, quae, omnis quos optio odio repellendus aperiam
            tempora mollitia expedita dignissimos recusandae praesentium
            architecto rem sapiente, nisi consectetur quis? Dolores iste sint
            culpa molestiae voluptatum, quidem quo necessitatibus architecto
            totam harum. Vitae laborum dicta quas iste atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolor
            tenetur rem quo, illo est suscipit maxime labore ad aspernatur
            magnam libero cumque praesentium eligendi, nihil error. Repellendus
            sed sunt perferendis necessitatibus possimus molestiae, ipsum fugit
            nisi officia, et aperiam vitae quisquam quasi odio commodi similique
            consequuntur nam, nihil mollitia beatae exercitationem temporibus
            non in dignissimos. Asperiores voluptates vitae dolorum laudantium
            quo? Eveniet, quae, omnis quos optio odio repellendus aperiam
            tempora mollitia expedita dignissimos recusandae praesentium
            architecto rem sapiente, nisi consectetur quis? Dolores iste sint
            culpa molestiae voluptatum, quidem quo necessitatibus architecto
            totam harum. Vitae laborum dicta quas iste atque.
          </p>
        </div>
        <Link className="link" to="/nosotros">
          <button className="boton">Leer más</button>
        </Link>
      </div> */}
      <Services />
      <Business />
      <Footer />
    </div>
  );
}
