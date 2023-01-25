import React from 'react';
import {MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import NavBar from '../navbar/NavBar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Contact.css';
import Footer from '../footer/Footer'
import { Button } from 'react-bootstrap';
export default function Contact() {
  return (
    <div className='background-contact'>
        <NavBar />
        <h3 className='container-text' style={{marginTop:'50px'}}>¿Qué desea consultarnos?</h3>
        <div className='container-contact'>
        <MDBInput label='Email' id='typeEmail' type='email' />
        <MDBInput label='Nombre' id='formTexName' type='text' aria-describedby='textName' />
        <MDBInput label='Empresa' id='formTexName' type='text' aria-describedby='textName' />
        <MDBTextArea label='Mensaje' id='textAreaExample' rows={4} />
        <br />
        <button className='boton'>Enviar</button>
        
        </div>
       <Footer />
    </div>
    
  )
}
