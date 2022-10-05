import React from 'react';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import NavBar from '../navbar/NavBar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function Contact() {
  return (
    <div>
        <NavBar />
        <div className='container-contact'>
        <MDBInput label='Email input' id='typeEmail' type='email' />
        <MDBInput label='Name' id='formTexName' type='text' aria-describedby='textName' />
        <MDBTextArea label='Message' id='textAreaExample' rows={4} />
        </div>
       
    </div>
    
  )
}
