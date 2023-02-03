import React from "react";
import { SpinnerCircular } from "spinners-react";
import Carousel from "../carousel/Carousel";
import NavBar from "../navbar/NavBar";
import "./Home.css";
import Footer from "../footer/Footer";
import Services from "../services/Services";
import Business from "../business/Business";
import { MDBBtn } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div name="Home">
      <NavBar />
      <Carousel />
      <div className="header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        accusamus? Eveniet, eius. Autem, ratione nulla. Ut a enim pariatur,
        numquam eum quos suscipit. Debitis ad dolorum, quasi repudiandae, eum
        dicta earum incidunt quis alias error minus possimus impedit enim illum
        minima optio saepe labore excepturi qui fugit obcaecati natus voluptates
        laboriosam? Temporibus error mollitia doloremque facilis architecto
        impedit eius laudantium corporis itaque minus nostrum velit earum
        debitis libero neque quisquam quaerat sapiente id non, omnis repudiandae
        ex tenetur placeat obcaecati? Alias sunt eius labore soluta ut quas
        possimus maiores sit provident deleniti molestiae cum, excepturi, ad
        distinctio? Dolorem, nobis fuga.
      </div>
      <div>
        <h1 className="texto">Nosotros</h1>
        <div className="nosotros">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          incidunt rem? Accusantium libero, debitis eum iusto ducimus
          consequuntur sint commodi magni perspiciatis dolor sapiente,
          necessitatibus quae porro nemo iure corrupti repellendus aliquam cum,
          laboriosam veritatis. Harum at quidem itaque, incidunt minima culpa
          iure, porro nostrum unde a temporibus! Ullam ab libero voluptates
          repudiandae asperiores enim nemo dicta eveniet distinctio dolorum nisi
          aspernatur impedit officiis minima, accusamus maiores ducimus placeat
          quod magni, quia accusantium qui natus sint esse. Perspiciatis, fugit.
          Hic voluptatibus necessitatibus porro tempora. Nostrum beatae porro
          alias. Aperiam laborum asperiores impedit ab eveniet! Dicta quia modi
          placeat beatae et sequi cum dolorum, saepe ullam qui repellendus
          voluptas vel inventore nam sint eius debitis deleniti. Earum
          distinctio architecto sequi delectus tenetur nulla nesciunt doloremque
          amet, cumque cupiditate iste ducimus assumenda, omnis porro dolor, cum
          voluptas! Distinctio dolorum deserunt, expedita eum, reiciendis
          voluptates fugit cumque, corrupti dolor suscipit eligendi. Asperiores
          consequatur consectetur qui. Iusto, molestiae? Inventore non ipsam
          dolores explicabo itaque ad veniam! Voluptatem, eveniet nulla! Aliquam
          doloremque repellat, architecto vitae et corporis voluptatem officia
          impedit accusantium modi, corrupti magni, laboriosam possimus
          consequatur voluptatum eaque placeat! Tempore veniam inventore vero
          maxime minus iusto obcaecati neque quo corporis et accusamus, ipsam
          itaque?
        </div>
        <Link className="link" to="/nosotros">
          <button className="boton">Leer más</button>
        </Link>
      </div>
      <Services />
      <Business />
      <Footer />
    </div>
  );
}
