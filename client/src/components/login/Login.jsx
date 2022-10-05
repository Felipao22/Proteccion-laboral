import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import NavBar from '../navbar/NavBar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    email: "",
    password: "",
    active: true
  });
  return (
    <div>
      <NavBar />
   
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Correo electrónico' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recordar' />
            <a href="!#">¿Olvidaste tu contraseña?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">Ingresar</MDBBtn>

          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div> */}

          {/* <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn> */}

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

