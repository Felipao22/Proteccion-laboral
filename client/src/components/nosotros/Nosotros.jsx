import React from "react";
import NavBar from "../navbar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
import './Nosotros.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Nosotros () {
  return (
    <div className="background-nosotros">
      <NavBar />
      <div className="container-nosotros">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eum neque quos laudantium similique rerum, veniam ratione harum eligendi commodi ipsam porro molestias facere deleniti esse vero nulla minus tempora? Nostrum minima, unde, porro id, recusandae delectus dolorem rerum ea magnam neque deleniti. Laboriosam quas consequatur eveniet voluptate in? Sint explicabo, repellendus harum aliquam quibusdam eligendi. Doloremque, fugiat expedita! Labore natus ullam qui debitis ipsam reiciendis cupiditate consequatur blanditiis adipisci repudiandae ex quae perferendis totam quo, optio dicta corporis est, dolores consequuntur quia et. Voluptatem, doloribus animi nihil, aliquam, atque asperiores eligendi quidem voluptates est facere cumque accusamus quis perferendis minus recusandae tempore! Quasi quo debitis maiores hic asperiores dolores, molestiae alias sunt ducimus, ab odit incidunt est adipisci numquam nostrum excepturi impedit, quaerat dignissimos provident. Deserunt dolores pariatur perferendis minima cupiditate aut unde ipsa nemo vitae, sint reiciendis beatae ea, ut fugiat eum at tempore quisquam voluptatem magnam, odio consequuntur nihil veniam. Maxime iste tempora ipsam quos molestiae! Nesciunt quibusdam sint quod, enim ex labore expedita qui sed facilis cupiditate quaerat fuga maiores voluptate nisi corrupti adipisci, aliquam tenetur? Debitis, mollitia officia. Nemo asperiores porro harum quae inventore libero adipisci impedit ea ab quis quod repudiandae, dicta animi corrupti amet delectus quisquam error esse, debitis consequuntur est perspiciatis repellendus ducimus? Reprehenderit molestias vel aspernatur iusto nihil numquam ipsam ipsum aut doloribus quaerat. Inventore minus at aliquid eum unde cumque veritatis non, amet praesentium voluptatibus blanditiis mollitia deleniti culpa vitae minima. Enim vitae voluptas ab fugit ex, tempore facilis eligendi pariatur laboriosam, quibusdam ipsa perspiciatis consectetur consequatur ullam aliquid, omnis porro expedita officia quae sequi eum aspernatur modi atque a. Quis maiores, optio culpa quas debitis ut ipsa, odio inventore aliquam reprehenderit ullam, obcaecati perspiciatis laudantium dignissimos consequatur sequi repellendus itaque ad eveniet delectus atque hic est architecto. Sint placeat incidunt facilis quasi! Corrupti veritatis blanditiis quam quidem delectus. Sit reiciendis quas amet facilis veritatis est neque corrupti rem quae labore delectus aut beatae commodi dignissimos, optio, error deserunt harum accusamus recusandae aspernatur nisi? Libero harum ipsum voluptas maxime aperiam, voluptate tenetur, architecto quis voluptates deleniti numquam sequi optio enim! Ipsam repellat ipsa fuga odio natus. Ipsum incidunt ex quod, blanditiis similique asperiores ad quis quidem suscipit, culpa delectus aut necessitatibus perspiciatis tempora, beatae eaque reiciendis expedita a saepe velit in temporibus modi animi! Nam, repellat temporibus cumque cupiditate ipsam, explicabo cum ex nihil, pariatur tempora quasi iusto voluptatum facilis voluptatibus rerum. Est laudantium iure necessitatibus dolorem dolore sapiente fugiat quaerat accusantium voluptate, voluptas, suscipit vitae consequuntur accusamus ea molestias, ipsam cupiditate. Vitae adipisci delectus totam impedit officiis eos blanditiis veniam vel necessitatibus animi voluptate, praesentium, doloribus fuga quibusdam sapiente ipsa? Fuga placeat sed minima exercitationem voluptate odio reiciendis, cupiditate pariatur id nostrum reprehenderit atque ex nobis tempora hic dicta vero iste? Illo earum, natus, voluptas odio, similique sint vitae quisquam id harum eum non porro dignissimos dicta mollitia neque eveniet ipsa quasi. Possimus maiores veniam molestiae cupiditate. Corrupti dignissimos nihil quae sunt possimus, eos consequatur repellat voluptatum quibusdam quia!
      </div>
      {/* <div >
        <h1 className="container-pregunta">¿QUIÉNES SOMOS?</h1>
        <br />
        <h3 className="container-text">Nuestro equipo</h3>
        <br />
        <br />
      </div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://www.isecursos.com/multimedia/estudios/img_73655_eddishigiene.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Dueño</MDBCardTitle>
            <MDBCardText>
              Licenciado en Higiene y Seguridad en el trabajo.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://www.ufasta.edu.ar/ingenieria/files/2020/08/11.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br />
    <br /> */}
      <Footer />
    </div>
  );
}
