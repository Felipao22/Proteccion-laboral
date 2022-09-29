import React from 'react';
// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import './Carousel.css';
import IMG1 from '../../assets/shutterstock_140317540.jpg';
import IMG2 from '../../assets/higiene-seg-trabajo-uca-DEF-rotated.jpg';
import IMG3 from '../../assets/1.jpg';
import {Carousel} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'

export default function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src='https://uploads-ssl.webflow.com/5e95bff252d2e8729955e6e7/60c3358cc3ab0c37fd2297be_10-Health-%26-Safety-procedures-used-by-organisations-blog-compressed.png'
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src='https://www.hseblog.com/wp-content/uploads/2022/03/Internal-And-External-Influences-On-The-Health-And-Safety-Culture.jpg'
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src='https://www.bureauveritas.co.uk/sites/g/files/zypfnx216/files/2019-05/workplace%20health%20and%20safety.jpg'
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // <MDBCarousel showControls showIndicators dark fade>
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={1}
    //     src='https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'
    //     alt='...'
    //   >
    //     <h5>First slide label</h5>
    //     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //   </MDBCarouselItem>
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={2}
    //     src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
    //     alt='...'
    //   >
    //     <h5>Second slide label</h5>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //   </MDBCarouselItem>

    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={3}
    //     src='https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg'
    //     alt='...'
    //   >
    //     <h5>Third slide label</h5>
    //     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //   </MDBCarouselItem>
    // </MDBCarousel>

        // <MDBCarousel showIndicators interval='3000' showControls>
        //   <MDBCarouselItem
        //     className='w-100 d-block'
        //     itemId={1}
        //     src={IMG1}
        //     alt='...'
        //   />
        //   <MDBCarouselItem
        //     className='w-100 d-block'
        //     itemId={2}
        //     src={IMG2}
        //     alt='...'
        //   />
        //   <MDBCarouselItem
        //     className='w-100 d-block'
        //     itemId={3}
        //     src='https://mdbootstrap.com/img/new/slides/043.jpg'
        //     alt='...'
        //   />
        // </MDBCarousel>
  );
}