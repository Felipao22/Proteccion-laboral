// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import {getAuth} from "firebase/auth";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import React, {useState} from 'react';
import {useFirebaseApp} from 'reactfire';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
// const analytics = getAnalytics(app);

const auth = getAuth();
    // const auth = firebase.auth()
    // console.log(getAuth)
    const firebase = useFirebaseApp();
    const submit = async () => {
        await auth.createUserWithEmailAndPassword(email,password);
        
    }
  return (
    <div>
        <div>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Contraseña</label>
            <input type='password' id='password' onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={submit} >Iniciar sesión</button>
        </div>
    </div>
  )
}
