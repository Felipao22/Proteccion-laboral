import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import "./Soluciones.css";
import { Carousel } from "react-bootstrap";
import soluciones from "../../assets/soluciones.jpg";
import soluciones2 from "../../assets/soluciones2.jpg";
import soluciones3 from "../../assets/soluciones3.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Soluciones() {
  return (
    <section id="soluciones">
      <div>
        <div className="background">
          <NavBar />
          <Carousel variant="dark" indicators={false}>
            <Carousel.Item interval={2000}>
              <h2 className="text-overlay">GESTIONAMOS TUS SERVICIOS</h2>
              <img
                className="d-block w-100 "
                src={soluciones}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <h2 className="text-overlay">GESTIONAMOS TUS SERVICIOS</h2>
              <img
                className="d-block w-100"
                src={soluciones2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <h2 className="text-overlay">GESTIONAMOS TUS SERVICIOS</h2>
              <img
                className="d-block w-100"
                src={soluciones3}
                alt="Third slide"
              />
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
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </section>
  );
}
