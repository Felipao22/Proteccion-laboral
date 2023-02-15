import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import "./Soluciones.css";
import { Carousel } from "react-bootstrap";
// import Logo from '../../assets/LOGO ALARGADO.png'
import soluciones from "../../assets/soluciones.jpg";
import soluciones2 from "../../assets/soluciones2.jpg";
import soluciones3 from "../../assets/soluciones3.jpg";

export default function Soluciones() {
  return (
    <section id="soluciones">
      <div>
        <div className="background">
          <NavBar />
          <Carousel variant="dark" indicators={false}>
            <Carousel.Item interval={2000}>
              {/* <h3 className="image-overlay" src={IMAGE} alt="Logo" /> */}
              <h3 className="text-overlay">GESTIONAMOS TUS SERVICIOS</h3>
              <img
                className="d-block w-100 "
                src={soluciones}
                alt="First slide"
              />
              {/* <Carousel.Caption></Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <h3 className="text-overlay">GESTIONAMOS TUS SERVICIOS</h3>
              <img
                className="d-block w-100"
                src={soluciones2}
                alt="Second slide"
              />
              {/* <Carousel.Caption></Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <h3 className="text-overlay">GESTIONAMOS TUS SERVICIOS</h3>
              <img
                className="d-block w-100"
                src={soluciones3}
                alt="Third slide"
              />
              {/* <Carousel.Caption></Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
          <h1 className="header-soluciones">Servicios</h1>
          <div className="text-soluciones">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              vel pariatur esse consectetur, temporibus placeat, accusamus
              doloremque qui incidunt possimus asperiores ullam eaque beatae?
              Unde incidunt sapiente doloribus debitis illum enim a earum, culpa
              iure asperiores velit non delectus officia. Soluta porro
              praesentium fuga minus id asperiores quam officia iste labore
              earum minima, repellat distinctio excepturi omnis aperiam velit,
              fugiat incidunt dicta. Aut, fuga explicabo alias possimus
              excepturi delectus ipsum nisi? Qui ad atque quidem dolore dolores
              officiis. Porro distinctio totam officia suscipit pariatur
              temporibus magni asperiores fugiat, cumque voluptatibus ipsa
              explicabo maxime tempora voluptate excepturi dignissimos
              architecto beatae ad.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              possimus incidunt quibusdam architecto, ex magnam? Iure nihil
              laborum eius laudantium est qui, assumenda maxime ipsam, quo illo,
              itaque consectetur commodi deleniti impedit sapiente repellat.
              Consectetur, nobis saepe nostrum quam voluptate maiores incidunt
              atque provident error odio quo laborum, fugit aliquid? Quam optio
              iste aliquam delectus aut suscipit expedita inventore ad nisi
              modi, fugit similique, sint ratione? Veritatis eligendi, veniam
              eius cupiditate excepturi sequi! Vel placeat ut delectus
              laudantium, neque numquam mollitia dicta animi quod tempore
              expedita iure odio labore excepturi unde voluptatem esse
              perspiciatis cum! A ipsa exercitationem eius maiores.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              possimus incidunt quibusdam architecto, ex magnam? Iure nihil
              laborum eius laudantium est qui, assumenda maxime ipsam, quo illo,
              itaque consectetur commodi deleniti impedit sapiente repellat.
              Consectetur, nobis saepe nostrum quam voluptate maiores incidunt
              atque provident error odio quo laborum, fugit aliquid? Quam optio
              iste aliquam delectus aut suscipit expedita inventore ad nisi
              modi, fugit similique, sint ratione? Veritatis eligendi, veniam
              eius cupiditate excepturi sequi! Vel placeat ut delectus
              laudantium, neque numquam mollitia dicta animi quod tempore
              expedita iure odio labore excepturi unde voluptatem esse
              perspiciatis cum! A ipsa exercitationem eius maiores.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              possimus incidunt quibusdam architecto, ex magnam? Iure nihil
              laborum eius laudantium est qui, assumenda maxime ipsam, quo illo,
              itaque consectetur commodi deleniti impedit sapiente repellat.
              Consectetur, nobis saepe nostrum quam voluptate maiores incidunt
              atque provident error odio quo laborum, fugit aliquid? Quam optio
              iste aliquam delectus aut suscipit expedita inventore ad nisi
              modi, fugit similique, sint ratione? Veritatis eligendi, veniam
              eius cupiditate excepturi sequi! Vel placeat ut delectus
              laudantium, neque numquam mollitia dicta animi quod tempore
              expedita iure odio labore excepturi unde voluptatem esse
              perspiciatis cum! A ipsa exercitationem eius maiores.
            </p>
            {/* <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            asperiores, ullam quae laborum cupiditate modi veritatis? Harum est
            doloremque unde non, eveniet et ea quaerat dolores eos quis quisquam
            quasi debitis repellat totam omnis labore minima vitae. Itaque quos
            provident incidunt explicabo fuga asperiores quam maxime? Excepturi
            iusto accusamus velit tenetur eos doloremque molestias sunt quisquam
            beatae in delectus adipisci unde pariatur repudiandae cupiditate
            autem dignissimos, debitis eius doloribus impedit voluptas?
            Excepturi ea non veritatis accusamus, obcaecati cum iusto
            dignissimos unde ad, harum odit. Cum deserunt et, sapiente nihil
            ipsam aspernatur, eos fugit saepe eius adipisci ullam, incidunt
            possimus quisquam molestias ipsum! Doloremque excepturi quo earum,
            suscipit commodi eius assumenda eum sapiente, nemo cum quos sit
            totam odit voluptate repudiandae, quaerat dolorum perspiciatis
            atque! Modi, eius, rerum consequuntur repudiandae libero sequi,
            dolorum esse cupiditate dignissimos iure voluptate veritatis error!
            Eum nihil dolores quaerat dolor voluptates obcaecati rem,
            reprehenderit eveniet iusto natus odit dicta aliquid! Culpa
            laboriosam quis eos, minus delectus illum suscipit perferendis
            inventore, ullam vero nisi amet accusantium obcaecati eius totam
            molestiae alias dolores ratione ad pariatur dolorem facilis debitis
            ducimus. Ullam pariatur, optio laboriosam aperiam maiores, aliquid
            consequatur eum officia fuga in culpa hic? Ut nobis cumque fugiat
            autem voluptatibus maiores repellendus, quo consequuntur atque.
            Impedit in, magnam error rerum atque voluptatibus ratione
            perferendis libero sequi delectus necessitatibus soluta eos,
            consectetur ab numquam dolorem porro vero aut nihil! Dolorum sint,
            impedit deserunt voluptas suscipit tempora molestias esse id odit ab
            optio laudantium, sequi mollitia ea recusandae quo similique
            nesciunt expedita incidunt nisi. Laborum ea harum facere libero
            eaque cum nemo quasi, rerum ipsa officia similique natus nihil
            quisquam delectus vel, nam illum quidem minus? Facilis eius cumque
            ullam deleniti excepturi, tempore earum sed porro omnis doloribus
            quidem, voluptatum delectus sunt. Praesentium eligendi repellendus
            omnis ab, perspiciatis magnam quisquam culpa sapiente quaerat
            aliquid numquam, sint vero sunt deleniti libero autem reprehenderit
            nobis quis consequatur. Ab officia temporibus explicabo odit
            asperiores reiciendis id nam expedita eius. Quidem, deleniti quis
            explicabo itaque illo rerum rem dolorum sunt ipsam consequatur
            consectetur minus et qui, dolore esse, aliquam quia. Voluptatem
            harum, necessitatibus sed adipisci facilis voluptatum tempora atque
            dignissimos exercitationem, corrupti reiciendis id culpa provident
            maxime officiis. Veniam blanditiis libero labore magnam et
            perspiciatis repudiandae voluptatem deleniti! Cumque ad iure facere
            esse quasi, quisquam sed vel similique, porro quam tempora
            laudantium sint cupiditate modi quibusdam est deserunt quidem minima
            obcaecati molestiae necessitatibus possimus consectetur saepe
            nostrum. Ea nesciunt libero minima sapiente earum harum iure dicta,
            vel in nulla accusantium, velit quaerat fugiat dolorum fugit quo
            qui! Sunt quas, a architecto nihil nostrum dolorum qui, labore harum
            rem porro modi voluptatum dolorem dolores velit. Commodi minus, modi
            doloribus quisquam omnis placeat asperiores doloremque velit neque
            voluptatum nulla explicabo totam quos fugiat quo aliquid facilis
            dolores ducimus non ipsum maxime minima voluptatem quia. Recusandae
            placeat quasi dolorum soluta commodi! Pariatur molestiae reiciendis
            unde quos velit perspiciatis! Optio, tempore. Quod ex ipsa assumenda
            distinctio iure ipsam ea culpa laudantium? Pariatur hic itaque vel
            ab cum aliquam.
          </p> */}
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </section>
  );
}
