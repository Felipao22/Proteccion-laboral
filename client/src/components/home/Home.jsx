import React from "react";
import { SpinnerCircular } from "spinners-react";
import Carrusel from "../carousel/Carousel";
import NavBar from "../navbar/NavBar";
import "./Home.css";
import {useFirebaseApp} from 'reactfire'

export default function Home() {
  const firebase = useFirebaseApp();
  console.log(firebase)
  return (
    <div name="Home">
      <NavBar />
      <div className="header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        corporis nemo vitae, mollitia hic harum repellat delectus aspernatur
        dolores ipsa iusto esse autem inventore totam consequatur libero ea.
        Dolor, saepe.
      </div>
    </div>
  );
}
