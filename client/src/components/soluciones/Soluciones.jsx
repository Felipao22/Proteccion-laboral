import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import './Soluciones.css'
import Background from "../background/Background";

export default function Soluciones() {
  return (
    <>
      <div>
        <NavBar />
        <Background/>
        <h1 className="header-soluciones">Soluciones</h1>
        <div className="text-soluciones">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque nobis veritatis ut, veniam aliquam voluptatibus ullam asperiores eos quam, nihil magni? Quidem, modi? Magnam cumque similique, harum culpa dolorem at aspernatur veniam inventore doloremque vel cum iste, tempore facilis, perspiciatis sit molestias ab. Quidem voluptatum quis id voluptates ab.
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
